<template>
    <form class="form__login w-1/3 mx-auto">
        <TitlePage titleText="Login" />
        <div class="form__group">
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input class="border-2 rounded-sm my-1 h-10 w-full" type="email" v-model="email" :name="email"/>
        </div>
        
        <div class="form__group">
            <label class="block text-sm font-medium text-gray-700">Mot de passe</label>
            <input class="border-2 rounded-sm my-1 h-10 w-full" type="password" v-model="password" :name="password"/>
        </div>

        <div class="form__group">
            <button type="submit" @click.prevent="login" class="w-full px-3 py-4 text-white bg-green-500 rounded-md focus:bg-green-600 focus:outline-none">Se connecter</button>
        </div>
        <div class="message__error" v-if="messageError"> 
            {{ messageError }}
        </div>
    
    </form>
    
</template>

<script>
    
    import TitlePage from "../components/ui/TitlePage"
    import FormGroup from "../components/ui/FormGroup";

    export default {
        components:{
            FormGroup,
            TitlePage
        },
        data: function () {
            return {
                email:"",
                password:"",
                messageError:""
            }
        },
        methods: {
            login: function () {
               // console.log(this.email, this.password);
               const body = {
                   email: this.email,
                   passWord: this.password
               }
              // const url = "http://127.0.0.1:3030/api/v1/login"
   
               this.$login(body).then((data) =>{
                     console.log(data)

            if(!data.auth){
              this.messageError = data.message
                 }
            else
            {
                let token = data.token;
                localStorage.setItem('token',token);
                this.$store.commit('isAuth');
                this.$router.push('account');
                }

                }
                )
                .catch(err => console.log(err))
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>