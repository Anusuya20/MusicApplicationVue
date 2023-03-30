<template>
    
    <div class="head">
      <h1><center><u> WELCOME TO YOYO MUSIC!!!</u></center></h1>
    <img src="@/assets/music1.jpg">
         <img src="@/assets/music2.jpg">
         <img src="@/assets/music3.jpg">
         <img src="@/assets/music4.jpg">
    </div>
      <div class="home">
          <div class="h1">
     <ul><h3><u><b>PLAYLIST</b></u></h3>
          <li>Melody</li><br>
          <li>Rock</li><br>
          <li>Albums</li>
          </ul>
          </div>
          <div class="h1">
          <ul><u><h3><b>LANGUAGES</b></h3></u>
          <li>Tamil</li><br>
          <li>English</li><br>
          <li>Hindi</li><br>
          <li>Telugu</li><br>
          <li>Malayalam</li><br>
          <li>Kanadam</li><br>
          </ul>
          </div>
          <div class="h1">
          <ul><u><h3><b>ARTIST</b></h3></u>
          <li>Aniruth</li><br>
          <li>Hip Hop Tamizha</li><br>
          <li>Teejay</li><br>
          <li>Santhosh Narayanan</li><br>
          <li>Vidhya Vox</li><br>
          <li>Pradeep Kumar</li><br>
          </ul>
          </div>
          </div>
      
      </template>
      
<style >


.home ul{
    list-style: none;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: larger;
    color: black;
}

 .home{
    margin-top: 20px;
    margin-bottom: 20px;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    margin-left: 400px;
    margin-right: 300px; 
    background-color: yellowgreen;
  }
 .head img{
     margin-left: 20px;
    border-radius: 50%;
    width:350px;
    height:350px;
    padding:0%;
}
.head{
  background-color: lavender;
}
.head h1{
  color:brown;
  font-family: cursive;

}
  .h1{
    position:relative;
    background: #EFF2F4;
    box-shadow: -8px -8px 20px #ffffff, 8px 8px 20px #d1d9e6;
    padding: 20px;
    min-width:200px;
    min-height: 350px;
    border-radius: 24px; 
}

.home::after{
  content: "";
  clear: both;
  display: table;
}
</style>

