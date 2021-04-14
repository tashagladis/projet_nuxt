<template>

<div class="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto">
        <div class="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
            <div class="text-center">
                <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Mise a jour</h1>
                <p class="text-gray-400 dark:text-gray-400">Fill up the form below to update your data.</p>
            </div>
            <div class="m-7">
                <form >

                    <input type="hidden" name="apikey" value="YOUR_ACCESS_KEY_HERE">
                    <input type="hidden" name="subject" value="New Submission from Web3Forms">
                    <input type="checkbox" name="botcheck" id="" style="display: none;">


                    <div class="mb-6">
                        <label for="firstName" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">FirstName</label>
                        <input type="text" v-model="firstName" name="name" id="name" placeholder="John" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    </div>
                    <div class="mb-6">
                        <label for="lastName" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">LastName</label>
                        <input type="text" v-model="lastName" name="lastname" id="lastname" placeholder=" Doe" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    </div>
                     <div class="mb-6">
                        <label for="passWord" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">PassWord</label>
                        <input type="text" v-model="passWord" name="passWord" id="passWord" placeholder="1234Test" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    </div>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                        <input v-model="email" type="email" name="email" id="email" placeholder="you@company.com" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    </div>
                    <div class="mb-6">

                        <label for="age" class="text-sm text-gray-600 dark:text-gray-400">Age</label>
                        <input type="number" v-model="age" name="age" id="age" placeholder="29" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    </div>
                   
                    <div class="mb-6">
                        <button @click.prevent="sendSub" class="w-full px-3 py-4 text-white bg-orange-500 rounded-md focus:bg-orange-600 focus:outline-none">Update</button>
                    </div>
                     <div class="message__error" v-if="change == true"> 
                        <p>Vos informations ont bien été mise jour! </p>
                            <p>Nom : {{this.firstName}}</p> 
                            <p>Prenom :{{this.lastName}}</p>
                            <p>Email: {{this.email}}</p>
                            <p>Age: {{this.age}}</p>
                     </div>
                </form>
                  <div class="message__error" v-if="messageError"> 
                    {{ messageError }}
                </div>
            </div>
        </div>
    </div>
</div>


  
</template>

<script>

export default {
  data: function() {
    return {
      firstName: "",
      lastName: "",
      passWord: "",
      email: "",
      age:"",
     messageError:"",
     change:false


    };
  },
  middleware:"auth",
  methods: {
    sendSub: function() {
        const token = localStorage.getItem('token')
            if(token){
            const jwtDecode = this.$decodeJwt(token);

         const body = {
         _id:jwtDecode.id,
        firstName : this.firstName,
        lastName : this.lastName,
        passWord : this.passWord,
        email : this.email,
        isAdmin: false,
        age: this.age }

      console.log(this.firstName, this.lastName, this.passWord, this.email, this.age );
                
               fetch(
                   `${process.env.API_URL}/update/${jwtDecode.id}`,
                   {
                       method: "PUT",
                       headers:{
                           "Content-type":"Application/json"
                       },
                       body: JSON.stringify(body)
                   }
                )
                .then(res => res.json())
                .then((data) =>{
                     console.log(data)
                     this.change = true

            if(!data.auth){
              this.messageError = data.message
                 }
            else
            {
               
                 this.$router.push('account');

                }

                }
                )
                .catch(err => console.log(err))
    }else{
        this.messageError = " Veuillez vous connecter a nouveau s'il vous plait"

    }
    
    }
  }
};
</script>

<style lang="scss" scoped></style>
