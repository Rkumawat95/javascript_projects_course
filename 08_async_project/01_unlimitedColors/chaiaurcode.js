// generate a random color

const randomColor = function(){
     const hex = "01234567890ABCDEF"
     let color = '#'

     for(let i=0;i<6;i++)
     {
          color += hex[Math.floor(Math.random() * 16)]
     }
     return color
};

let intervalid;
const startChangingColor = function (){
     if(!intervalid){
          intervalid = setInterval(changeBgColor, 2000)
     }
     function changeBgColor(){
          document.body.style.backgroundColor = randomColor();
     }
}

const stopChangingColor = function(){
     clearInterval(intervalid);
     intervalid = null;
}

document.querySelector('#start').addEventListener('click',startChangingColor )
document.querySelector('#stop').addEventListener('click',stopChangingColor)
