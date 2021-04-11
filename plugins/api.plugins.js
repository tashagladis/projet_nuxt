export default({app}, inject) => {
    inject('login', (body) => {
        console.log(process.env.API_URL)
        return fetch(
          
            `${process.env.API_URL}/login`,
            {
                method: "POST",
                headers:{
                    "Content-type":"Application/json"
                },
                body: JSON.stringify(body)
            }
         )
         .then(res => res.json())
    }),
    //Pour recupérer un utilisateur "user/:id"
    inject('getMe', (id,token) => {
        return fetch(`${process.env.API_URL}/user/${id}`, {
            headers:{
                "Authorization": token
            }
        })
        .then(res => res.json())
    })

    inject('getCategories', () => {
        return fetch(`${process.env.API_URL}/categories`,  {
            method: "Get",
            headers:{
                "Content-type":"Application/json"
            },
            
        })
        .then(res => res.json())
    }),

    inject('order', (body) => {
        console.log(process.env.API_URL)
        return fetch(
          
            `${process.env.API_URL}/order`,
            {
                method: "POST",
                headers:{
                    "Content-type":"Application/json"
                },
                body: JSON.stringify(body)
            }
         )
         .then(res => res.json())
    }),
    inject('getOrders', () => {
        return fetch(`${process.env.API_URL}/orders`,  {
            method: "Get",
            headers:{
                "Content-type":"Application/json"
            },
            
        })
        .then(res => res.json())
    })
    
    
} 