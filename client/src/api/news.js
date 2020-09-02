import Api from '../api/index'
export default {
    getNewsWithContent() {
        return Api.get('/news').then(res => res.data)
    },
    getCreators() {
        return Api.get('/creators').then(res => res.data)
    },
    saveNews(params) {
        return Api.post('/news', params).then(res => res.data)
    }
}