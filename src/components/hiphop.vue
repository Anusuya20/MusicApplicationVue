<template>
    <center><button @click="$router.push({name: 'artist'})"> Goto Artist </button></center>
    <div class="hopimg">
          <center><img src="@/assets/hop.jpg"></center>
      </div>
       <div class="hop">
       <iframe width="560" height="315" src="https://www.youtube.com/embed/no8-RcTP2rs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/QGazPz_hbcs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/IShvgCm8JdM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/H79h6Ztd40o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/SKmEwaTYkME" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/8YJdRIf9sd0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   </div>
   </template>
   <style >
   .hop {
       margin-left: 180px;
       margin-right: 100px;
   }
   .hop button{
       margin-top: 5px;
       margin-bottom: 10px;
   }
   .hop{
       background-color: darkgray;
   }
   .hopimg{
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
   .hopimg img{
       border-radius: 50%;
       height:400px;
       width:400px;
       
   }
   </style>