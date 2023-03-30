<template>
    <div class="abt">
            <center><button @click="$router.push({name: 'home'})"> Goto home </button></center>
        <h3><center>MUSIC,ONCE ADMITTED TO THE SOUL,BECOMES A SORT OF SPIRIT,AND NEVER DIES!!!</center></h3>
        <p><center>
            Here you can watch your favourite songs based on your mood in video mode!!<br><br>
            We offer you 1 month free trail after having trail you can pay the premium plans..<br><br>
            Damn sure you will enjoy here..
    
        </center></p>
        
    <div class="flip-box">
      <div class="flip-box-inner">
        <div class="flip-box-front">
          <center><h2>HOVER TO SEE THE PREMIUM PLANS HERE!!!</h2></center>
        </div>
        <div class="flip-box-back">
            <ul>
                   <li>1 Day = 8 Ruppees</li>
              <li>1 Week = 25 Ruppees</li>
              <li>1 Month = 85 Ruppees</li>
              <li>1 Year =  400 Ruppees</li></ul> 
        </div>
      </div>
    </div>
    </div>
    </template>
    <style>
    .abt{
        background-color: aquamarine;
    }
    .abt p{
        font-family: initial;
        font-size: x-large;
        color:red;
        background-color: white;
        height: 200px;
        margin-left: 100px;
        margin-right: 100px;
    }
    .abt h3{
        color:darkblue;
    }
    .abt h2{
        font-family: 'Times New Roman', Times, serif;
        color:black;
        
        height: 60px;
       
    }
    .abt button{
       
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .ul{
    
        list-style: none;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-size: larger;
        color: white;
        background-color: rgb(236, 89, 89);
        margin-bottom: 30px;
        height: 210px;
        margin-left: 550px;
        margin-right: 500px;
    
    }
    .flip-box {
      background-color: transparent;
      width: 500px;
      height: 200px;
      margin-left: 500px;
      margin-right: 300px;
      border: 1px solid #f1f1f1;
      perspective: 1000px;
      margin-bottom: 30px;
    }
    
    .flip-box-inner {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 0.8s;
      transform-style: preserve-3d;
    }
    
    .flip-box:hover .flip-box-inner {
      transform: rotateX(180deg);
    }
    
    .flip-box-front, .flip-box-back {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }
    
    .flip-box-front {
      background-color: rgb(247, 18, 18);
      color: black;
      align-items: center;
      line-height: 80px;
    }
    
    .flip-box-back {
      background-color: dodgerblue;
      color: white;
      transform: rotateX(180deg);
    }
    </style>