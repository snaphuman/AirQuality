import { Universal } from '@aeternity/aepp-sdk';
import settings from '../settings';

export default {
    data: function () {
        return {
            client: null,
            isLoading: false,
            sensorArray: [],
            sensorName: '',
            sensorLat: '',
            sensorLon: '',
            sensorZipCode: ''
        };
    },
    props: ['active'],
    methods: {
        async onCallDataAndFunctionAsync(func, args, types) {
            const extraOpts = {
                'owner': settings.account.pub
            };

            const opts = Object.assign(extraOpts, this.callOpts);
            if (func && args && types) {
                try {
                    const dataRes = await this.contractAECall(func, args, opts);
                    if (types !== '()') {
                        const data = await this.client.contractDecodeData(types, dataRes.result.returnValue);
                        console.log(data);
                        return data;
                    }
                } catch (err) {
                    console.log(err);
                }
            } else {
                console.log('Please enter a Function and 1 or more Arguments.');
            }
        },
        contractAECall(func, args, options) {

            console.log(`calling a function on a deployed contract with func: ${func}, args: ${args} and options:`, options);
            return this.client.contractCall(settings.contractAddress,
                                            'sophia-address',
                                            settings.contractAddress,
                                            func,
                                            { args, options });
        },
        async registerSensor () {

            this.isLoading = true;

            const index = this.sensorArray.length + 1,
                  name = this.sensorName,
                  lat  = this.sensorLat,
                  lon  = this.sensorLon,
                  zip  = this.sensorZipCode;

            await this.onCallDataAndFunctionAsync('registerSensor',
                                                  `("${name}","${lat}","${lon}","${zip}")`,
                                                  'int');

            this.sensorArray.push({
                index: index,
                sensorName: name,
                sensorLat: lat,
                sensorLon: lon,
                sensorZipCode: zip
            });

            this.isLoading = false;
        },
        async getClient() {

            this.isLoading = true;

            this.client = await Universal({
                url: settings.url,
                internalUrl: settings.internalUrl,
                keypair: {
                    secretKey: settings.account.priv,
                    publicKey: settings.account.pub
                },
                nativeMode: true,
                networkId: settings.networkId
            });
            
            this.isLoading = false;
        }
    },
    async created () {

        await this.getClient();
    },
    watch: {
        isLoading: function () {
            this.$emit('update:active',this.isLoading);
        }
    }
};
