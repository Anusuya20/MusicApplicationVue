<template>
    <center><button @click="$router.push({name: 'playlist'})"> Goto Playlist </button></center>
        <div class="mel"><h1>
            Here You can see your favourite Melody songs!!</h1> 
            <iframe width="498" height="315" src="https://www.youtube.com/embed/nA290eVZb78" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="498" height="315" src="https://www.youtube.com/embed/DScFlfN9vDk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="498" height="315" src="https://www.youtube.com/embed/A32yLrkcQP8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="498" height="315" src="https://www.youtube.com/embed/lkPI-45gxBw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="498" height="315" src="https://www.youtube.com/embed/VpJDmKKz3yg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="498" height="315" src="https://www.youtube.com/embed/bWlsbVfEnII" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </template>
    <style>
    .mel{
        background-color: rgba(255, 255, 0, 0.651);
    }
    .mel h1{
        color: rgb(12, 130, 240);
    }
    .mel button{
        margin-top: 5px;
        margin-bottom: 10px;
    }
    </style>