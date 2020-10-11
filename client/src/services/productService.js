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
    }
}