export default {
    data: () => {
        return {
            isShow: false,
        }
    },
    methods: {
        setShowModal(isShow) {
            this.isShow = isShow;
        }
    }
}