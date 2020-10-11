import productService from "@/services/productService"
export default {
    data() {
        return {
            showCategory: false,
            model: {
                name: "",
                number: 1,
                price: 1000000,
                category: null,
                enable: false
            }
        }
    },
    methods: {
        selectCategory(item) {
            this.model.category = item;
            this.showCategory = false
        },
        submit() {
            productService.post(this.model).then((res) => {
                this.resetModel();
                console.log(res)
            }).catch((err) => {
                console.log(err)
            });
        },
        resetModel() {
            this.model = {
                name: "",
                number: 1,
                price: 1000000,
                category: null,
                enable: true
            }
        }
    }
}