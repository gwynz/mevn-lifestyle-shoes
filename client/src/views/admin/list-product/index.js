import {
    createIndexes
} from "../../../../../model/user"

import productService from "@/services/productService"
export default {
    data() {
        return {
            listProduct: []
        }
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