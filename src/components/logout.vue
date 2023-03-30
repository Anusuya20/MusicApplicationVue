<template>
    <div class="log"><center>
      <h1>Logout</h1>
          <button @click="logout">Logout</button></center>
    </div>
    </template>
    <script>
    import {ref, onBeforeMount} from 'vue';
    import firebase from 'firebase';
    export default {
    name:"logout",
    setup(){
        const name=ref("");
        
        onBeforeMount(() =>{
            const user = firebase.auth().currentUser;
            if(user){
                name.value = user.email.split('@')[0];
            }
        });
    
        const logout = () =>{
            firebase
                .auth()
                .signOut()
                .then(()=>console.log("Signned Out"))
                .catch(err => alert(err.code))
        }
    
        return{
            name,
            logout
        }
    }
    }
    </script>
    <style scoped>
    .log{
        margin-left: 600px;
        margin-right: 400px;
        margin-top: 50px;
        height: 100px;
        width:400px;
        background-color: mistyrose;
    }
    
    </style>