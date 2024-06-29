const StopwatchDuration = document.getElementById("StopwatchDuration")
 Start=document.getElementById("Start"),
 Lap=document.getElementById("Lap"),
 Stop=document.getElementById("Stop"),
 Reset=document.getElementById("Reset"),
 laps =document.getElementById("laps");
 
let hrs =0,
  mins=0,
  sec=0,
  ms=0,
  timeInterval;

Start.onclick = () => {
    timeInterval=setInterval(()=>{
      ms++;
      if (ms==100){
        sec++;
        ms=0;
      }
      if(sec==60){
        mins++;
        sec=0;
      }
      if(mins==60){
        hrs++;
        mins=0;
      }
      StopwatchDuration.innerHTML = `${zeroPad(hrs)}:${zeroPad(mins)}:${zeroPad(sec)}:${zeroPad(ms)}`;
    }, 10);
    Start.setAttribute("style","display:none");
    Stop.setAttribute("style","display:block");
    Lap.setAttribute("style","display:block");
    Reset.setAttribute("style","display:none");
    Lap.removeAttribute("disabled");
};
const zeroPad =(num)=>{
    return String(num).padStart(2,"0");
}
let count=0;
Lap.onclick = () => {
  count++;
  let li = document.createElement("li");
  li.innerHTML=`${"#" + count} - ${zeroPad(hrs)}:${zeroPad(mins)}:${zeroPad(sec)}:${zeroPad(ms)}`;
  laps.appendChild(li);
  laps.scroll({top:laps.scrollHeight,behaviour: "smooth"});

};
Stop.onclick = () => {
    clearInterval(timeInterval);
    Lap.setAttribute("style","display:none");
    Reset.setAttribute("style","display:block");
    Start.setAttribute("style","display:block");
    Start.innerHTML="Resume";
    Stop.setAttribute("style","display:none");
};
Reset.onclick = () => {
    laps.innerHTML="";
    hrs=mins=sec=ms=count=0;
    clearInterval(timeInterval);
    StopwatchDuration.innerHTML = "00:00:00:00";

    Start.innerHTML="Start";
    Lap.setAttribute("style","display:block");
    Lap.setAttribute("disabled",true);
    Reset.setAttribute("style","display:none");
    Start.setAttribute("style","display:block");
    Stop.setAttribute("style","display:none");
};