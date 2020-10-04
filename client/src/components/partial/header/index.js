import logInModal from '@/components/partial/login/index.vue'
import registerModal from '@/components/partial/register/index.vue'
import cartModal from '@/components/partial/cart/index.vue'
export default {
    data() {
        return {
            showMenuProfile: false,
            showMenuOnMobile: false
        }
    },
    components: {
        logInModal,
        registerModal,
        cartModal

    },
    computed: {
        user() {
            return this.$store.state.currentUser;
        }
    },
    methods: {
        logOutHandler() {
            this.showMenuProfile = false
            this.$store.commit('logout')

        },
        showModalRegister() {
            this.$refs.modalRegister.setShowModal(true)
        },
        showModalLogin() {
            this.$refs.modalLogin.setShowModal(true)
        }
    }

}