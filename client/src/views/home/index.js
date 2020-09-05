import sideBar from '../../components/partial/sidebar/index.vue'
import logInModal from '../../components/partial/login/index.vue'
import registerModal from '../../components/partial/register/index.vue'
import search from '../../components/partial/search/index.vue'
export default {
    components: {
        sideBar,
        logInModal,
        registerModal,
        search
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