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
        submit() {},
        login: function () {
            var params = {
                email: this.userModel.email,
                password: this.userModel.password
            }
            this.$store
                .dispatch("login", params)
                .then(() => {
                    this.setShowModal(false)
                })
                .catch(err => {
                    console.log(err.response)
                    this.error = err.response.data.message
                });
        }
    }
}