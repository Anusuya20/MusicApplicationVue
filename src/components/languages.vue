<template>
    <div class="lan">
           <a href="tamil"><img src="@/assets/tamil1.png" alt="Tamil"></a>
        <a href="english"><img src="@/assets/english1.jpg"></a>
        <a href="malayalam"><img src="@/assets/malayalam1.jpg"></a>
    </div>
    <div class="lan1">
        <a href="hindi"><img src="@/assets/hindi2.png"></a>
        <a href="telugu"><img src="@/assets/telugu2.png"></a>
        <a href="kanada"><img src="@/assets/kanada1.png"></a>
    </div>
    </template>
    <script>
    export default {
    
             name: 'languages',
             
      }
    </script>
    <style>
    .lan img{
        width:300px;
        height: 300px;
        border-radius: 70px;
        margin-top: 30px;
        margin-left: 120px;
        margin-right: 60px;
    margin-bottom: 30px;
    }
    .lan{
        background-color: rgba(16, 233, 143, 0.918);
    }
    .lan img:hover{
        -ms-transform: scale(1.3); /* IE 9 */
      -webkit-transform: scale(1.3); /* Safari 3-8 */
      transform: scale(1.3); 
    }
    .lan1 img{
        width:300px;
        height: 300px;
        border-radius: 70px;
        margin-top: 30px;
        margin-left: 120px;
        margin-right: 60px;
    margin-bottom: 30px;
    }
    .lan1{
        background-color: rgba(248, 126, 132, 0.918);
    }
    .lan1 img:hover{
        -ms-transform: scale(1.3); /* IE 9 */
      -webkit-transform: scale(1.3); /* Safari 3-8 */
      transform: scale(1.3); 
    }
    </style>