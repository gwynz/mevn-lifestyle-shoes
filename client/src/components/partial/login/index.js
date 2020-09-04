export default {
    data: () => {
        return {
            isShow: false,
            userModel: {
                name: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        setShowModal(isShow) {
            this.isShow = isShow;
        }
    }
}