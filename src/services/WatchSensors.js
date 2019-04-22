import settings from '../settings';

export default {
    data: function () {
        return {
            client: this.account,
            isLoading: false,
            sensorArray: this.sensors
        };
    },
    props: ['active', 'account', 'sensors'],
    methods: {

        async callAEStatic(func, args ,types) {

            this.isLoading = true;

            const calledGet = await this.client.contractCallStatic(
                settings.contractAddress,
                'sophia-address',
                func,
                {args}).catch(e => console.error(e));

            const decodedGet = await this.client.contractDecodeData(
                types,
                calledGet.result.returnValue).catch(e => console.error(e));


            this.isLoading = false;

            return decodedGet;
        },
        async getSensorsLength() {

            return this.callAEStatic('getSensorsLength',
                                     '()',
                                     'int');
        },
        async getSensor(index) {
            
            this.isLoading = true;
            let type = '(address,string,string,string,int,list(string))';


            this.isLoading = false;

            return this.callAEStatic('getSensor',
                                     `(${index})`,
                                     `(${type})`);
        }
    },
    async created (){

        const sensorsLength = await this.getSensorsLength();

        for (let i = 1; i <= sensorsLength.value; i++ ) {

            const sensor = await this.getSensor(i);

            this.sensorArray.push({
                sensorName: sensor.value[1].value,
                sensorLat: sensor.value[2].value,
                sensorLon: sensor.value[3].value,
                sensorZipCode: sensor.value[4].value,
                index: i
            });
        }
    },
    watch: {
        isLoading: function () {
            this.$emit('update:active',this.isLoading);
        },
        sensorArray: function () {
            this.$emit('update:sensors',this.sensorArray);
        }
    }
};
