<template>
    <div>
     <pre>
        {{JSON.stringify(formValues,null,2)}}
      </pre>
    </div>
    <div class="frm">
    <form
      id="app"
      >
      <p><center>
           <h1>CREATE YOUR ACCOUNT</h1></center></p>
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
        <label for="password">Password:</label>
        <input
          id="password"
          v-model="password"
          type="password"
          name="password"
        >
      </center></p>
     <center><h4>{{response}}</h4>
       <button @click="account">Submit</button>
      </center>
      <center><h3> Have an Acccount?</h3>
      <a href="login"><i style="font-size:24px" class="fa">&#xf090;</i>Sign In</a></center>
    
    </form>
    </div>
    
      
    </template>
    <script>
      import {ref} from 'vue';
    import firebase from 'firebase';
    
    export default {
        name:'account',
       setup() {
            const email = ref("");
            const password = ref("");
            const account = () =>{
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(email.value, password.value)
                    .catch(err => alert(err.message));
                alert("Account Created Successfully");
                }
                return{
                    account,
                    email,
                    password
                }
        }
              
    }
    </script>
    <style >
    .frm button{
      margin-top: 25px;
      
    }
    .frm active{
      color:blue;
    }
    .frm errors{
      color:green;
    }
    .frm{
      float:left;
      margin-left: 370px;
      margin-bottom: 20px;
      width:50%;
        background-color: tomato;
    }
    .frm p{
      background-color: transparent;
    }
    .frm h3 {
      
      
      margin-top: 50px;
      background-color: lime;
      border-radius: 80px;
      font-size: 25px;
      
    
    }
    .frm a{
     
      margin-top: 50px;
      margin-bottom: 50px;
      
    }
    
    </style>