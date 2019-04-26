import LineChart from '@/services/LineChart';

export default {
    data: function () {
        return {
            interval: null,
            isLoading: false,
            sensorArray: this.sensors,
            name: '',
            value: 0,
            datacollection: null,
            currentDate: null,
            labels: [],
            dataset: []
        };
    },
    components: {
        LineChart
    },
    props: ['active', 'sensors'],
    methods: {
        fillData () {
            this.datacollection = {
                labels: this.labels.slice(5),
                datasets: [
                    {
                        label: 'Valor',
                        backgroundColor: '#f87979',
                        data: this.dataset.slice(5)
                    }
                ]
            };
        },
        getRandomInt () {
            return Math.floor((Math.random()*10)+ 1);
        }

    },
    mounted() {

        setInterval (() => {
            let date = new Date();
            this.currentDate = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            this.labels.push(this.currentDate);
            this.dataset.push(this.getRandomInt());
            this.fillData();
        },2000);

    },
    created() {
        this.fillData();

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
