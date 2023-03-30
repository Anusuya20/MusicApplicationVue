<template>
    <div>
     <pre>
        {{JSON.stringify(formValues,null,2)}}
      </pre>
    </div>
    <div class="frm1">
    <form
      id="app"
      >
      <p><center>
           <h1>LOGIN</h1></center></p>
           <p><center>
        <label for="email">Mail Id:</label>
        <input
          id="email"
          v-model="email"
          type="email"
          name="email"
        >
      </center></p>
    
      <p><center>
        <label for="pass">Password:</label>
        <input
          id="password"
          v-model="password"
          type="password"
          name="password"
        >
      </center></p>
      <center>
      <button @click="login">Sign in</button>
      </center>
    </form>
    </div>
    </template>
    <script>
    import {ref} from 'vue';
    import firebase from 'firebase';
    
    export default {
        name:'login',
       setup() {
            const email = ref("");
            const password = ref("");
            const login = () =>{
                firebase
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value)
                    .catch(err => alert(err.message));
                alert("Logged in  Successfully");
                }
                return{
                    login,
                    email,
                    password
                }
        }
              
    }
    </script>
    <style >
    .frm1 button{
      margin-top: 25px;
      
    }
    .frm1 active{
      color:blue;
    }
    .frm1 errors{
      color:green;
    }
    .frm1{
      
      margin-bottom: 20px;
        background-color: tomato;
    }
    .frm1 p{
      background-color: transparent;
    }
    
    </style>