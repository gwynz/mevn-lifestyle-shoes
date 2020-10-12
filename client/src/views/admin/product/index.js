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
            },
            images: [],
            errors: []
        }
    },
    methods: {
        selectCategory(item) {
            this.model.category = item;
            this.showCategory = false
        },
        submit() {
            this.checkForm();
            productService.post(this.model).then((res) => {
                this.resetModel();
                console.log(res)
            }).catch((err) => {
                console.log(err)
            });
        },
        checkForm() {
            if (this.model.name && this.model.number && this.model.price && this.model.category) {
                return true
            } else
                this.errors.push('error');

        },
        resetModel() {
            this.model = {
                name: "",
                number: 1,
                price: 1000000,
                category: null,
                enable: true
            }
        },
        handleFileUpload() {
            this.$refs.fileImages.files.forEach(image => {
                this.images.push({
                    file: image,
                    url: URL.createObjectURL(image)
                });
            });
            this.supmitFile('123')
        },
        supmitFile(id) {
            productService.uploadImages(id, this.images).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            });
        },
    }
}