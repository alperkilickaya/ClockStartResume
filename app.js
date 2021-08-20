const timeArea = document.querySelector('#time');
const stopTime = document.querySelector('#stop');
const resumeTime = document.querySelector('#start');



var interval = setInterval(showTime,1000);

function showTime(){
    let time = new Date();
    let saat = time.getHours();
    let dakika = time.getMinutes();
    let saniye = time.getSeconds();
 
    am_pm = "AM";
  
    if (saat > 12) {
        saat -= 12;
        am_pm = "PM";
    }
    if (saat == 0) {
        saat = 12;
        am_pm = "AM";
    }
  
    saat = saat < 10 ? "0" + saat : saat;
    dakika = dakika < 10 ? "0" + dakika : dakika;
    saniye = saniye < 10 ? "0" + saniye : saniye;
  
    let zaman = saat + ":" + dakika + ":" + saniye + " " + am_pm;   
    timeArea.innerHTML = zaman;
};


stopTime.addEventListener("click",function(){
    clearInterval(interval)
})

resumeTime.addEventListener("click",function(){
    interval = setInterval(showTime,1000);
});


