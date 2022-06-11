
var random1=Math.floor(Math.random()*6)+1;
var newPathforImage1="images/dice"+random1+".png"

document.querySelectorAll("img")[0].setAttribute("src",newPathforImage1);

var random2=Math.floor(Math.random()*6)+1;
var newPathforImage2="images/dice"+random2+".png"

document.querySelectorAll("img")[1].setAttribute("src",newPathforImage2);

if(random1>random2){
   document.querySelector("h1").innerHTML="🚩Player 1 wins";
}else if(random1<random2){
    document.querySelector("h1").innerHTML="Player 2 wins🚩";
}else{
    document.querySelector("h1").innerHTML="Draw";
}