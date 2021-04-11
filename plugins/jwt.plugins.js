import vueJwtDecode from "vue-jwt-decode"

export default ({app}, inject) => {
    inject('decodeJwt', (token) => {
        return vueJwtDecode.decode(token)
    });
}