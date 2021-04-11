export default({app}, inject) => {
    inject('addToCart', (product) => {
            //récupération du localStorage (bien penser à parser)
            if(process.browser){
            let card = JSON.parse(localStorage.getItem('shopCart')) || [];
            }
            let productObject = {
                id: this.product.id,
                title: this.product.title,
                price: this.product.price,
                qty: 1
            }

            // Eventuellement le même id dans le localStorage
            let indexOfExistingProduct = card.findIndex(
                (el) => el.id === productObject.id
            );
            
            //check si id du produit à ajouter est présent dans le panier
            //Si déjà présent, j'incrémente la prop qté
            if(indexOfExistingProduct !== -1) {
                card[indexOfExistingProduct].qty += 1
            }
            //Si il n'est pas présent, j'ajoute le nouveau produit au tableau Card
            else {
                card.push(productObject)
            }

            //Je réinsère le nouveau tableau dans le localStorage (bien penser à Stringify)
            return    localStorage.setItem('shopCart', JSON.stringify(card));
    }),
    inject('clearCart', () => {
        localStorage.removeItem('shopCart');
    }),
    inject('removeItemCart', (product) => {
        let card = JSON.parse(localStorage.getItem('shopCart'));
        const filteredCard = card.filter((item) => {
            return item.id !== product.id
        })
       return localStorage.setItem('shopCart', JSON.stringify(filteredCard));
    }),
    inject('addOneQty', (product) => {
       //récupération du localStorage (bien penser à parser)
       let card = JSON.parse(localStorage.getItem('shopCart')) || [];
       let productObject = {
           id: product.id,
           title: product.title,
           price: product.price,
           qty: 1
       }

       // Eventuellement le même id dans le localStorage
       let indexOfExistingProduct = card.findIndex(
           (el) => el.id === productObject.id
       );
       
       //check si id du produit à ajouter est présent dans le panier
       //Si déjà présent, j'incrémente la prop qté
       if(indexOfExistingProduct !== -1) {
           card[indexOfExistingProduct].qty += 1
       }
       //Si il n'est pas présent, j'ajoute le nouveau produit au tableau Card
       // else {
       //     card.push(productObject)

       //Je réinsère le nouveau tableau dans le localStorage (bien penser à Stringify)
      return localStorage.setItem('shopCart', JSON.stringify(card));
    }),
    inject('removeOneQty', (product) => {
        if (product.qty > 1) {
            let card = JSON.parse(localStorage.getItem('shopCart')) || [];
        let productObject = {
            id: product.id,
            title: product.title,
            price: product.price,
            qty: 1
        }

        let indexOfExistingProduct = card.findIndex(
            (el) => el.id === productObject.id
        );
        
        if(indexOfExistingProduct !== -1) {
            card[indexOfExistingProduct].qty -= 1
        }

        //Je réinsère le nouveau tableau dans le localStorage (bien penser à Stringify)
       return localStorage.setItem('shopCart', JSON.stringify(card));
        }
        
    }),
    inject('getCart', () => {
        if(process.browser){

        let card = JSON.parse(localStorage.getItem('shopCart'));
        return card;
        }

           
    }),
    inject('getCartTotal', (card) => {
        let total = card.reduce((total, item) => total + item.price * item.qty, 0)
            return total;
    }),
    inject('getCartCount', (card) => {
        let count = card.reduce((total, item) => total + item.qty, 0);
            return count;
    }),
    inject('getCartFav', () => {
        if(process.browser){
        let card = JSON.parse(localStorage.getItem('shopCartFav'));
        return card;
        }
            
    })

}