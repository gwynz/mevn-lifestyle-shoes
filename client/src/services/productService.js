import Api from '@/services/Api'

export default {
    fetch() {
        return Api().get('product')
    },
    post(params) {
        return Api().post('product', params)
    },
    get(params) {
        return Api().get('product/' + params.id)
    },
    delete(id) {
        return Api().delete('product/' + id)
    },
    uploadImages(id, images) {
        this.loading = true;
        let formData = new FormData();
        images.forEach(element => {
            formData.append("images", element.file);
        });
        formData.append("productId", id);
        return Api().post('product/upload-images', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
    },
}