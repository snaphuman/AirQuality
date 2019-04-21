import { Universal } from '@aeternity/aepp-sdk';
import settings from '../settings';

export default {
    data: function () {
        return {
            client: null,
            isLoading: false
        };
    },
    props: ['active'],
    methods: {
        registerSensor () {
            return;
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
