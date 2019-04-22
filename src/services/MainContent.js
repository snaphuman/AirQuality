import { Universal } from '@aeternity/aepp-sdk';
import RegisterSensor from '@/components/RegisterSensor';
import WatchSensors from '@/components/WatchSensors';
import ViewData from '@/components/ViewData';
import settings from '../settings';

export default {
    name: "MainContent",
    props: ['active'],
    data: function () {
        return {
            isLoading: false,
            client: null,
            sensorArray: [],
            activatedArray: []
        };
    },
    components: {
        RegisterSensor,
        WatchSensors,
        ViewData
    },
    methods: {
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
