<template>
    <center><button @click="$router.push({name: 'artist'})"> Goto Artist </button></center>
    <div class="voximg">
           <center><img src="@/assets/vox.jpg"></center>
       </div>
            <div class="vox">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/eiGdsH1g20k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/LPsyTf6EK5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/5nyFfZnsyNY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/NjRRDE7gK4E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/XDUxYxHU3CY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kQ_A_Q24-hU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </template>
    <style >
    .vox {
        margin-left: 180px;
        margin-right: 100px;
    }
    .vox button{
        margin-top: 5px;
        margin-bottom: 10px;
    }
    .vox{
        background-color: darkorchid;
    }
    .voximg{
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
    .voximg img{
        border-radius: 50%;
        height:400px;
        width:400px;
        
    }
    </style>