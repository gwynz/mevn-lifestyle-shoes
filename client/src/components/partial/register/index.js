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
        setShowModal(show) {
            this.isShow = show;
        },
        register: function () {
            var params = {
                name: this.userModel.name,
                email: this.userModel.email,
                password: this.userModel.password
            }
            this.$store
                .dispatch("register", params)
                .then((res) => {
                    this.setShowModal(false)
                }).catch((err) => {
                    console.log('error')
                    if (err.response)
                        this.error = err.response.data.message
                });
        }
    }
}