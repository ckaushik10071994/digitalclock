 function clock(){
 let date = new Date()
       let hours=date.getHours()
       let minutes=date.getMinutes()
       let seconds=date.getSeconds()
       if(hours>12){
        hours=hours-12}

       console.log(hours,minutes,seconds)
    
       //    assigning real times value
 let hrs= document.getElementById("hrs")
 hrs.innerText=hours
 let mins= document.getElementById("mins")
 mins.innerText=minutes
 let sec= document.getElementById("secs")
 sec.innerText=seconds
       }  
 setInterval(()=>{
      clock()    
  },1000)
// chnage Am/pm
  let date = new Date()
     let hours=date.getHours()
     if(hours>=12){
      let ampm = document.getElementById('ampm');
      ampm.textContent= "PM";
     }
     else if(hours<12){
      let ampm = document.getElementById('ampm');
      ampm.textContent="AM";
    }
     

let greeting = document.getElementById('greeting');

if(hours>=12 && hours<16){
  greeting.innerHTML = "GOOD AFTERNOON !!"
}
if(hours>=16 && hours<20){
  greeting.innerHTML = "GOOD EVENING !!"
}
if(hours>=20 && hours<23){
  greeting.innerHTML = "GOOD NIGHT !!"
}


//button
let button = document.getElementById('button')


button.addEventListener("mouseover",function(){
  
  this.innerText="Party Time"
})
button.addEventListener("mouseout",function(){
  this.innerText="Set Alarm"
})

button.addEventListener("click",function(){
  let date = new Date()
     let hours=date.getHours()
     
     let wakeup = document.getElementById("wakeup")
     let lunch = document.getElementById("lunch")
     let nap = document.getElementById("nap")
     let night = document.getElementById("night") 

     if(parseInt(wakeup.value)=== hours){
      document.getElementById("greeting1").innerHTML = "GRAB SOME BREAKFAST"
      document.getElementById('image').src = "./Component 30 – 1.png"
     }
    else if(parseInt(lunch.value)=== hours){
      document.getElementById("greeting1").innerHTML = "LET HAVE SOME LUNCH"
      document.getElementById('image').src = "./lunch1.svg"
     }
     else if(parseInt(nap.value)=== hours){
      document.getElementById("greeting1").innerHTML = "ITS JUST A EVENING"
      document.getElementById('image').src = "./lunch_image.png"
     }
     else if(parseInt(night.value)=== hours){
      document.getElementById("greeting1").innerHTML = "GO TO SLEEP"
      document.getElementById('image').src = "./goodnight_image.svg"
     }
     

     let timing = document.getElementsByClassName('timing');

     timing[0].innerText = wakeup.options[wakeup.selectedIndex].text;
     timing[1].innerText = lunch.options[lunch.selectedIndex].text;
     timing[2].innerText = nap.options[nap.selectedIndex].text;
     timing[3].innerText = night.options[night.selectedIndex].text;
   
})



