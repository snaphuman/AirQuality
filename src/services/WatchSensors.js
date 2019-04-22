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
    props: ['active', 'account', 'sensors', 'activated'],
    methods: {
        viewData (index) {

            console.log(index);
            if (this.activatedArray.includes(index)) {

                var i = this.activatedArray.indexOf(index);
                if (i > - 1) {
                    this.activatedArray.splice(i, 1);
                }
                this.sensorArray[index - 1].state = "Off";

            } else {

                this.activatedArray.push(index);
                this.sensorArray[index - 1].state = "On";
            }


        },
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

        this.sensorArray = [];
        const sensorsLength = await this.getSensorsLength();

        for (let i = 1; i <= sensorsLength.value; i++ ) {

            const sensor = await this.getSensor(i);

            this.sensorArray.push({
                sensorName: sensor.value[1].value,
                sensorLat: sensor.value[2].value,
                sensorLon: sensor.value[3].value,
                sensorZipCode: sensor.value[4].value,
                index: i,
                state: 'Off'

            });
        }
    },
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
