<template>
<div>
      <form class="form__login w-1/3 mx-auto">
        <TitlePage titleText="Search" />
        <div class="loader text-center" v-if="loading == 0">
        ...loading
        </div>
        <div class="form__group">
            <input class="border-2 rounded-sm my-1 h-10 w-full" type="text" v-model="search" :name="search"/>
        </div>
        <div class="form__group">
            <button type="submit" @click.prevent="searchFunc" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-8">Search</button>
        </div>
        </form>
        <div v-if="feedArray.length > 0">
          
            <ProductGrid :productsArray="feedArray"/>
       
        </div>
  
        <div class="message__error text-center" v-if="feedArray.length == 0"> 
            <p>No Product Found!</p>
        </div>
    </div>
    
</template>

<script>
    import TitlePage from "../components/ui/TitlePage"
    import ProductGrid from "../components/ProductGrid"
    import Feed from "../apollo/queries/feed.gql"
   
    export default {
        components:{
        TitlePage,
        ProductGrid 
     
        },
        data: function() {
            return {
         
                loading:0,
                feedArray:[],
                search:"",
                searchEl:""
            }
        },
         middleware:"auth",
       apollo: {
           $loadingKey: "loading",
      
           feedArray:{
               query: Feed,
                variables(){
                return {
                    filter: this.searchEl
                }
            },
               //update Equivalent du .then
               update(data){
                   console.log(data)
                   this.loading = 1
                   return data.feed
               }

           }


       },
     methods: {
            searchFunc: function () {
              
                this.searchEl = this.search
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>