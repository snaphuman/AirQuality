import RegisterSensor from '@/components/RegisterSensor';
import WatchSensors from '@/components/WatchSensors';
import ViewData from '@/components/ViewData';

export default {
    name: "MainContent",
    props: ['active'],
    data: function () {
        return {
            isLoading: false
        };
    },
    components: {
        RegisterSensor,
        WatchSensors,
        ViewData
    },
    watch: {
        isLoading: function () {
            this.$emit('update:active',this.isLoading);
        }
    }
};
