<template>
    <center><button @click="$router.push({name: 'artist'})"> Goto Artist </button></center>
    <div class="tjimg">
           <center><img src="@/assets/tj.jpg"></center>
       </div>
        <div class="tj">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/tzXYQGFUqmo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/YM2hx5vopeA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/CK6CN7IF0qg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZhUTv_cIc0A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Za91DGHG624" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/nzPR62sx0OE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </template>
    <style >
    .tj {
        margin-left: 180px;
        margin-right: 100px;
    }
    .tj button{
        margin-top: 5px;
        margin-bottom: 10px;
    }
    .tjimg{
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
    .tjimg img{
        border-radius: 50%;
        height:400px;
        width:400px;
        
    }
    </style>