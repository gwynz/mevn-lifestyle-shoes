import Api from '@/services/Api'

export default {
    fetchUser() {

        return Api().get('user')
    },

    register(params) {
        return Api().post('user/register', params)
    },
    login(params) {
        return Api().post('user/login', params)
    },
    updateUser(params) {
        return Api().put('user/' + params.id, params)
    },

    getUser(params) {
        return Api().get('user/' + params.id)
    },

    deleteUser(id) {
        return Api().delete('user/' + id)
    }
}