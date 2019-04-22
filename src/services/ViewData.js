import Sensor from '@/components/Sensor';
import settings from '../settings';

export default {
    data: function () {
        return {
            client: this.account,
            isLoading: false,
            sensorArray: this.sensors,
            activatedArray: this.activated
        };
    },
    components: {
        Sensor
    },
    props: ['active', 'account', 'sensors', 'activated'],
    watch: {
        isLoading: function () {
            this.$emit('update:active',this.isLoading);
        },
        sensorArray: function () {
            this.$emit('update:sensors',this.sensorArray);
        },
        activatedArray: function () {
            this.$emit('update:activated',this.activatedArray);
        }
    }
};
