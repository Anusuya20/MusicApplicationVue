<template>
    <center><button @click="$router.push({name: 'artist'})"> Goto Artist </button></center>
    <div class="gvimg">
           <center><img src="@/assets/gv.jpg"></center>
       </div>
    <div class="gv">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/LUO4KPeVjzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/x-j36lxT568" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/HRD2-_bU4K0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/nWxGhq_lBII" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/uxb-TMoqb9k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/jFwAoGRlVds" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </template>
    <style >
    .gv {
        margin-left: 180px;
        margin-right: 100px;
    }
    .gv button{
        margin-top: 5px;
        margin-bottom: 10px;
    }
    .gvimg{
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
    .gvimg img{
        border-radius: 50%;
        height:400px;
        width:400px;
        
    }
    </style>