import Line from 'vue-chartjs';

export default {
    data: function () {
        return {
            interval: null,
            isLoading: false,
            sensorArray: this.sensors,
            name: '',
            value: 0,
            dataset: []
        };
    },
    props: ['active', 'sensors'],
    methods: {
        generateRandomValue () {
            this.value = Math.floor((Math.random()*100)+ 1);
        }

    },
    mounted() {
        this.interval = setInterval(() => {
            this.generateRandomValue();
        },1000);

        this.generateRandomValue();
    },
    destroyed() {
        clearInterval(this.interval);
    },
    created() {

        this.name = this.sensorArray[this.$vnode.key - 1].sensorName;
        console.log(this.value);

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
