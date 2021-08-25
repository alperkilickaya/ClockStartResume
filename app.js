const timeArea = document.querySelector('#time');
const stopTime = document.querySelector('#stop');
const resumeTime = document.querySelector('#start');

let interval;
resumeTime.disabled=true; //ilk açılış Resume butonu disabled

function showTime(){
    let time = new Date();
    let saat = time.getHours(); //0-23
    let dakika = time.getMinutes(); // 0-59
    let saniye = time.getSeconds(); // 0-59
    let am_pm;
  
    saat = (saat == 0) ? 12 : ((saat > 12) ? (saat - 12): saat); // saat 0 ise 12, değilse; 12'den büyükse saat-12. Yani 15 ise saat 3 olur.
    am_pm = (saat >= 12) ? "PM" : "AM"; // saat 12 ve büyükse PM kullan.
   
  
    saat = saat < 10 ? "0" + saat : saat; // saat 9 ise 09 olarak göstersin
    dakika = dakika < 10 ? "0" + dakika : dakika; // dakika 9 ise 09 göstersin
    saniye = saniye < 10 ? "0" + saniye : saniye; // saniye 9 ise 09 göstersin
  
    let zaman = saat + ":" + dakika + ":" + saniye + " " + am_pm;   // am/pm durumuna göre zamanı oluştur.
    timeArea.innerHTML = zaman; // bu zamanı sayfaya yerleştir.
};

interval = setInterval(showTime,1000); // saniyede bir showTime'ı yenile.


stopTime.addEventListener("click",function(){ // stop düğmesine basınca zamanı durdur. Interval'i temizler.
    clearInterval(interval)
    // hangi düğme basılı ise onu disabled, diğerini aktif yap
    stopTime.disabled =true; 
    resumeTime.disabled=false;
})

resumeTime.addEventListener("click",function(){
    interval = setInterval(showTime,1000); // 1sn ile showTime'ı yeniden başlat. interval değişkinenine yeniden ata.
    // hangi düğme basılı ise onu disabled, diğerini aktif yap
    resumeTime.disabled=true;
    stopTime.disabled=false;
});