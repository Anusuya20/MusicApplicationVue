<template>
    <center><button @click="$router.push({name: 'playlist'})"> Goto Playlist </button></center>
        <div class="rck"><h1>You can see your favourite Rock Music Here...</h1>
        <iframe width="498" height="315" src="https://www.youtube.com/embed/JGwWNGJdvx8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="498" height="315" src="https://www.youtube.com/embed/y2tEPmwWEiI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="498" height="315" src="https://www.youtube.com/embed/3aLUT8oisBM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="498" height="315" src="https://www.youtube.com/embed/J4gy_9J2ST8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="498" height="315" src="https://www.youtube.com/embed/yoaUIyfudOw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="498" height="315" src="https://www.youtube.com/embed/tYSrY4iPX6w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </template>
    <script>
    export default {
    
             name: 'rock',
             
      }
    </script>
    
    <style>
    .rck{
        background-color: rgba(8, 221, 79, 0.356);
    
    }
    .rck h1{
       color:black;
    }
    .rck button{
        margin-top: 5px;
        margin-bottom: 10px;
    }
    </style>