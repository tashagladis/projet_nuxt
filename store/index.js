


export const state = () => ({
    auth: false,
    cart:  [],
    cartFav:  [],
    

    //cart ? JSON.parse(cart) :
    myVar:"test"

})

export const mutations = {
    isAuth(state) {
        state.auth = true;
    },

    loggedOut(state) {
        state.auth = false
    },

    saveCart(state) {
        localStorage.setItem('shopCart', JSON.stringify(state.cart))
    },

    addToCart(state, item) {
        let productObject = {
            id: item.id,
            title: item.title,
            price: item.price,
            qty:1
        }

    let indexOfExistingProduct = state.cart.findIndex(
        (el) => el.id === productObject.id
    );
    
    if(indexOfExistingProduct !== -1) {
        state.cart[indexOfExistingProduct].qty += 1
    }
    else {
        state.cart.push(productObject);
    }
        this.commit('saveCart');
        console.log(state.cart);
    },

    saveCartFav(state) {
        localStorage.setItem('shopCartFav', JSON.stringify(state.cartFav))
    },

    addToCartFav(state, item) {
        let productObject = {
            id: item.id,
            title: item.title,
            price: item.price,
            qty:1
        }

    let indexOfExistingProduct = state.cartFav.findIndex(
        (el) => el.id === productObject.id
    );
    
    if(indexOfExistingProduct !== -1) {

        const filteredCard = state.cartFav.filter((item) => {
            return item.id !== productObject.id
        })
       
       return localStorage.setItem('shopCartFav', JSON.stringify(filteredCard));
    }
    else {
        state.cartFav.push(productObject);
    }
        this.commit('saveCartFav');
        console.log(state.cartFav);
    }

}

export const getters = {
    calcTotalQtyCart: (state) => {
        return state.cart.reduce((total, product) => total + product.qty,0);
    }
}