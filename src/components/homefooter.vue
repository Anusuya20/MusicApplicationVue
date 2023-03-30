<template>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-awesome@1.2.0/css/fork-awesome.min.css" integrity="sha256-XoaMnoYC5TH6/+ihMEnospgm0J1PM/nioxbOUdnM8HY=" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
        <div class="footer1">
            <h1><i class="fa">&#xf001;</i>   YOYO MUSIC</h1>
            <div class="foo1">
                <h3>Get in touch with us!!!</h3>
                   <p><i class="fa">&#xf095;</i>  +9779840059834</p>
                   <p><i class="fa fa-envelope"></i>   yoyomusic@gmail.com</p>
               </div>         
           <div class="foo1">
               <h3>You can follow us through</h3>
               <p><i class="fa">&#xf230;</i>  yoyo_music</p>
               <p><i class="fa">&#xf16d;</i>  fantasy_world</p>
           </div>
        </div>
    </template>
    <script>
    
    export default {
        name:'home'
    }
    </script>
    
    <style>
    .foo1{
        float: right;
    }
    .footer1::after{
        content: "";
        clear: both;
        display: table;
    }
    .footer1 h1{
        padding-left: 70px;
        padding-top: 20px;
        color: greenyellow;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .footer1 h3{
        color: orangered;
        padding-right: 70px;
        padding-top: 30px;
    }
    .footer1 p{
        padding-right: 60px;
        line-height: 10px;
        color: greenyellow;
        font-size: x-large;
    }
    .footer1 i{
          color:white;
          font-size: 44px;
    }
    .footer1{
        background: black;
        width:93.4%;
        display: inline-block;
        margin-left: 50px;
        margin-right: 50px;
        padding-bottom: 20px;
        margin-bottom: 30px;
    }
    </style>