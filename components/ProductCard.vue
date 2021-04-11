<template>
  <div class="max-w-xs rounded overflow-hidden shadow-lg my-2">
     <img class="w-23" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains">

    <div class="px-6 py-4">
      
    <NuxtLink :to="`product/${ productObject.id}`">
       <div class="font-bold text-xl mb-2"> 
        {{ productObject.title }}
       </div>
       

    
        <p class="text-grey-darker font-bold text-base mb-3">{{ productObject.price }} €</p>
         <p class="text-grey-darker text-base">{{ productObject.description}}</p> 
    </NuxtLink>
   </div>
    <button @click="()=>addToCart(productObject)" class="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">Ajouter au panier</button>
     <button @click="()=>addToCartFav(productObject)" class="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">Ma Liste</button> 
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    productObject: Object,
  },
  methods: {
      addToCart: function(productObject) {
        this.$store.commit('addToCart',productObject)
     }
    ,
       addToCartFav: function(productObject) {
        this.$store.commit('addToCartFav',productObject)
      }
  }
};
</script>

<style lang="scss" scoped></style>