<template>
    <center><button @click="$router.push({name: 'artist'})"> Goto Artist </button></center>
        <div class="uvanimg">
           <center><img src="@/assets/uvan.jpg"></center>
       </div>
       <div class="uvan">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/vQAs_P9JrJQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/OcYUEsZ1crg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/_-pdljs3KJA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/B7j1qEQPfr8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/iDqvHRhQdyk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/pbGTuJiC7bI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </template>
    <style >
    .uvan {
        margin-left: 180px;
        margin-right: 100px;
    }
    .uvan button{
        margin-top: 5px;
        margin-bottom: 10px;
    }
    .uvan{
        background-color: darkorange;
    }
    .uvanimg{
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
    .uvanimg img{
        border-radius: 50%;
        height:400px;
        width:400px;
        
    }
    </style>