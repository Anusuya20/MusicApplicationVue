<template>
    <center><button @click="$router.push({name: 'artist'})"> Goto Artist </button></center>
<div class="snimg">
       <center><img src="@/assets/sn.jpg"></center>
   </div>
<div class="sn">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/My_S68DAAPg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/zRnPYVDIiJY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/HmdwGjWWWQo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/AS4HqtTsu5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/xE2_A0h6k8o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/NuwkB1UuZQo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</template>
<style >
.sn {
    margin-left: 180px;
    margin-right: 100px;
}
.sn button{
    margin-top: 5px;
    margin-bottom: 10px;
}
.snimg{
    animation-name: example;
    animation-duration: 10s;  
    margin-bottom: 30px;
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 30px;
    
}
@keyframes example {
  0%   {background-color: red;}
  25%  {background-color: yellow;}
  50%  {background-color: blue;}
  100% {background-color: green;}
}
.snimg img{
    border-radius: 50%;
    height:400px;
    width:400px;
    
}
</style>