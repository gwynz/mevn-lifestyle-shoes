import sideBar from '../../components/partial/sidebar/index.vue'
import search from '../../components/partial/search/index.vue'
import headerBar from '../../components/partial/header/index.vue'
export default {
    components: {
        sideBar,
        search,
        headerBar
    },
    computed: {
        isLoggedIn: function () {
            return this.$store.getters.isLoggedIn;
        }
    },
    methods: {
        logout: function () {
            this.$store.dispatch("logout").then(() => {
                this.$router.push("/login");
            });
        }
    }
}