import {
    createIndexes
} from "../../../../../model/user"
import pagination from "@/components/partial/pagination/index.vue"
import productService from "@/services/productService"
export default {
    data() {
        return {
            listProduct: []
        }
    },
    components: {
        pagination
    },
    created() {
        this.getData();
    },
    methods: {
        getData() {
            productService.fetch().then(res => {
                this.listProduct = res.data
            }).catch((err) => {
                console.log(err);
            });
        }
    }
}