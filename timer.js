(function(){
    const second =1000,
    minutes= second*60,
    hours= minutes*60,
    day= hours*24;

let birthday='august 21,2023 00:00:00',
countdown= new
Date(birthday).getTime(),
x=setInterval(function(){

    let now= new Date().getTime(),
    distance= countdown - now;

document.getElementById('days').innerText=
Math.floor(distance/(day)),

document.getElementById('days').innerText=
Math.floor((distance%(day)) /(hour)),

document.getElementById('days').innerText=
Math.floor((distance%(hour)) / (minute)),

document.getElementById('days').innerText=
Math.floor((distance%(minute)) /(second))


//when the day is reached
if(distance<0){
    let headline=
    document.getElementById('headline'),

    countdown = 
    document.getElementById('countdown')
content = 
document.getElementById('content');
headline.innerText='its my birthday'
clearInterval(x);

}
},0)


}())