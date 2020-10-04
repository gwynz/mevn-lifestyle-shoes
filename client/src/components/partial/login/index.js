export default {
    data: () => {
        return {
            isShow: false,
            userModel: {
                name: '',
                email: '',
                password: ''
            },
            error: '',
            firstAccess: true
        }
    },
    methods: {
        setShowModal(show) {
            this.isShow = show;
        },
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
                    if (err.response) {
                        this.error = err.response.data.message
                    }
                });
        }
    }
}