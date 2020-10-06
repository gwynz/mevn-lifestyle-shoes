export default {
    data() {
        return {
            showCategory: false,
            model: {
                name: "",
                number: 0,
                price: 0,
                category: null,
                enable: true
            }
        }
    },
    methods: {
        selectCategory(item) {
            this.model.category = item;
            this.showCategory = false
        }
    }
}