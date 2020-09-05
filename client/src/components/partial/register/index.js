import userService from '../../../services/userService'
export default {
    data: () => {
        return {
            isShow: false,
            userModel: {
                name: '',
                email: '',
                password: ''
            },
            error: ''
        }
    },
    methods: {
        setShowModal(isShow) {
            this.isShow = isShow;
        },
        submit() {


        },
        register: function () {
            var params = {
                name: this.userModel.name,
                email: this.userModel.email,
                password: this.userModel.password
            }
            this.$store
                .dispatch("register", params)
                .then(() => {
                    setShowModal(false)
                })
                .catch(err => {
                    console.log(err.response)
                    this.error = err.response.data.message
                });
        }
    }
}