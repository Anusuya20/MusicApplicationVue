<template>
    <div class="play">
        
        <h1><center>Choose your Favourite Playlist!!</center></h1>
        <center>
            <ul>
        <li><a href="melody">Melody</a></li>
     <li><a href="rock">Rock</a></li>
     <li><a href="album">Latest Albums</a></li>
     <li><a href="romance">Romantic Acoustics</a></li>
     <li><a href="mazhai">Mazhai Feels</a></li>
     </ul>
        </center>
     </div>
    <router-view />
    </template>
    <script>
    export default {
    
             name: 'playlist',
             
      }
    </script>
    <style>
    .play {
        background-color: plum;
    }
    .play h1{
        color:white;
    }
    .play ul{
        list-style: none;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-size: x-large;
        color: white;
        background-color: rgb(250, 204, 144);
        margin-bottom: 0%;
        border-radius: 24px; 
        height: 210px;
        margin-left: 530px;
        margin-right: 500px;
        margin-top: 10px;
        padding-top: 70px;
        }
    
    </style>