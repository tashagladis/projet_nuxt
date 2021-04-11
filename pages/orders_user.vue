<template>
<div>
  <div v-if="isLogged == false" class = "text-center">
    <p>Vous n'etes pas connecter</p>

  </div>
 
    <div class="container px-4 sm:px-8"  v-else>
    <div class="py-8">
        <div>
            <h2 class="text-2xl font-semibold leading-tight">Historiques des commandes</h2>
        </div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table class="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th
                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Reference
                            </th>
                            <th
                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                               Quantity
                            </th>
                            <th
                                class="px-15 py-15 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                               Total 
                            </th>
                               <th
                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Date
                            </th>
                            <th
                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Statut
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="order in result" :key="order.id" :orderObject="order">
                            <td class="px-5 py-25 border-b border-gray-200 bg-white text-sm w-5">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0 w-25 h-10 hidden sm:table-cell">
                                       <p>{{order._id}}</p>
                                    </div>
                                   
                                </div>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p class="text-gray-900 whitespace-no-wrap text-center"> {{order.amountNumber}}</p>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p class="text-gray-900 whitespace-no-wrap text-center">
                                    {{order.totalAmount}}
                                </p>
                            </td>
                             <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p class="text-gray-900 whitespace-no-wrap text-center">
                                    {{order.createdAt}}
                                </p>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                                <div class="flex items-center float-right">
                                    <div class="mr-3">
                                        <p class="text-gray-900 whitespace-no-wrap text-right">
                                            {{order.statut}}
                                        </p>
                                    </div>
                                    
                                </div>
                            </td>
                        </tr>
             
                    </tbody>
                </table>
            </div>
        </div>
  </div>
</div>
  </div>
  

</template>

<script>

    import TitlePage from "../components/ui/TitlePage"
    import TitleBloc from "../components/ui/TitleBloc"
    import ProductGrid from "../components/ProductGrid"

    export default {
        components:{
            TitlePage,
            TitleBloc,
            ProductGrid
        },
        data: function(){
            return{
                isLogged: false,
                orders: Array,
                result: []


            }
        },
        //middleware: "auth",
        methods:{
        },
        beforeMount(){
            this.$getOrders()
            .then(data => {
                console.log(data)
                this.orders = data

            const token = localStorage.getItem('token')

            if(token){
            this.isLogged = true;
            const jwtDecode = this.$decodeJwt(token);

                this.result =  (this.orders).filter(function (item){
                      return item.user._id === jwtDecode.id;
                  });
              
             }

                })
            .catch(err => console.log(err))
            


        }

}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
