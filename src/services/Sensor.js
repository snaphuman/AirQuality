
export default {
    data: function () {
        return {
            isLoading: false,
            sensorArray: this.sensors,
            name: ''
        };
    },
    props: ['active', 'sensors'],
    created() {

        this.name = this.sensorArray[this.$vnode.key - 1].sensorName;
        console.log(this.name);

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
