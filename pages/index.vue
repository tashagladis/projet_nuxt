<template>
  <div class="categiers ">
    <div v-for="category in categories" :key="category.id" :categoryObject="category">
    <TitleBloc :titleText="category.title" />
    <ProductGrid :productsArray="category.products"/>
    
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
                categories: Array

            }
        },
        //middleware: "auth",
        methods:{
        },
        beforeMount(){
            this.$getCategories()
            .then(data => {
                console.log(data)
                this.categories = data
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
