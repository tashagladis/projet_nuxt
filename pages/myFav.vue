<template>
    <div>
         <div class="loader text-center" v-if="loading">
        ...loading
       </div>
      <TitlePage titleText="Ma liste"/>
      <ProductGrid :productsArray="cardArray"/>
    </div>
</template>

<script>
import TitlePage from "../components/ui/TitlePage";
import Button from "../components/Button";
import ProductGrid from "../components/ProductGrid";

    export default {
        name:"myFav",
        components:{
            TitlePage,
            Button,
            ProductGrid
        },
         middleware:"auth",
        data: function () {
            return {
                cardArray:[],
            }
        },
        created() {
            this.cardArray = this.$getCartFav();
        }
    }
</script>

<style lang="scss" scoped>

</style>