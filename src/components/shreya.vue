<template>
    <center><button @click="$router.push({name: 'artist'})"> Goto Artist </button></center>
    <div class="shimg">
           <center><img src="@/assets/shreya.jpg"></center>
       </div>
    <div class="sh">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/jCafZht8yMA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/inEu2qQuGZ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/guj4nJFvLo4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/aDFEb_W2t1Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Sqbeoe5UEOM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/asw-wTDzGUQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </template>
    <style >
    .sh {
        margin-left: 180px;
        margin-right: 100px;
    }
    .sh button{
        margin-top: 5px;
        margin-bottom: 10px;
    }
    .sh{
        background-color: firebrick;
    }
    .shimg{
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
    .shimg img{
        border-radius: 50%;
        height:400px;
        width:400px;
        
    }
    </style>