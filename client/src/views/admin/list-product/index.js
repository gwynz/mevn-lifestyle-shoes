import {
    createIndexes
} from "../../../../../model/user"
import pagination from "@/components/partial/pagination/index.vue"
import productService from "@/services/productService"
export default {
    data() {
        return {
            listProduct: [],
            pagnation: {
                currentPage: 1,
                count: 0,
                totalPages: 1
            }
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
            productService.getPage(this.pagnation.currentPage).then(res => {
                this.listProduct = res.data.d
                this.pagnation.count = res.data.c
                this.pagnation.totalPages = res.data.tp
                this.pagnation.currentPage = res.data.p

            }).catch((err) => {
                console.log(err);
            });
        },
        remove(id) {
            console.log(id)
            productService.delete(id).then(res => {
                console.log(res)
                this.getData()
            }).catch((err) => {
                console.log(err);
            });
        }
    }
}