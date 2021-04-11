<template>
    <div>
        <h1 class="text-center" >Product détail</h1>
        
         <div class="product__content text-center" v-if="product">
            <p > Title: {{ product.title }}</p>
            <p >Price: {{ product.price }}</p>
            <p >Description: {{ product.description }}</p>
         </div>

    </div>
</template>

<script>
import Product from "../../apollo/queries/product.gql"
    export default {
        data:function(){
            return{
                product:{}
            }
        },
        apollo: {
            product: {
            query: Product,
            variables(){
                return {
                    id: this.$route.params.id
                }
            },
              update(data){
                    console.log(data.product)
                    return data.product
                },
                error(){
                    return this.$root.error({'statusCode': 404, message: "id not found"})

                }
            }

        }
      
        
    }
</script>

<style lang="scss" scoped>

</style>