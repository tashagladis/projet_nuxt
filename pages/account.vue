<template>
    <div class="page__account">
        <TitlePage titleText="Account" />
        <div class="message__error text-center" v-if="!isLogged">
            <p> Vous n'etes pas connecter</p>
        </div>
        <div class="user__content text-center" v-else>
            <p>Nom : {{user.firstName}}</p> 
            <p>Prenom :{{user.lastName}}</p>
            <p>Email: {{user.email}}</p>
            <p>Age: {{user.age}}</p>
            <div class="logout__wrapper">
                <button @click="logout">Se Deconnecter</button>
            </div>

        </div>
    </div>
</template>

<script>
import TitlePage from "../components/ui/TitlePage"
import VueJwtDecode from "vue-jwt-decode"
    export default {
           components:{ 
            TitlePage
        },
        data: function(){
            return{
                isLogged: false,
                user: {}

            }
        },
        middleware: "auth",
        methods:{
            logout: function(){
                localStorage.removeItem('token');
               //this.$store.commit('loggedOut')
               this.isLogged = false

            }
        },
        beforeMount(){
            //recuperer le token dans le localstorage avec sa clé
            const token = localStorage.getItem('token')
            if(token){
            const jwtDecode = this.$decodeJwt(token);
            console.log(jwtDecode)

            this.$getMe(jwtDecode.id, token)
            .then(data => {
                console.log(data)
                this.isLogged = true
                this.user = data
                })
            .catch(err => console.log(err))
            }


        }

    }
</script>

<style lang="scss" scoped>

</style>