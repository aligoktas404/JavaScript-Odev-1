let name=prompt("İsim Giriniz.");
let nameselector=document.querySelector("#myName")
nameselector.innerHTML=name
function sss(){
    let date=new Date();
    let clockselector=document.querySelector("#myClock");
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    hours = ("0" + hours).slice(-2);
    let days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];

    let dayName = days[date.getDay()];
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    clockselector.innerHTML=`${hours}:${minutes}:${seconds} ${dayName}`;
    // clockselector.innerHTML=date.toLocaleString();

}
setInterval(sss,50)
