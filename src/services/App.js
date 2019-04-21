import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import NavBar from '@/components/NavBar';
import MainContent from '@/components/MainContent';

export default {
    name: 'app',
    components: {
        Loading,
        NavBar,
        MainContent
    },
    data: function() {
        return {
            isLoading: false
        };
    }
};
