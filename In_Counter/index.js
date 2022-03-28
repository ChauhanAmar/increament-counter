const counters= document.querySelectorAll('.counter');
counters.forEach((counter)=>{
    counter.innerHTML=0;


const updatecounter=()=>{
const targetCount = +counter.getAttribute('data-target');
//   console.log(targetCount);  
const startingCount= Number(counter.innerHTML);
const incr= targetCount/100;

if(startingCount<tagetCount){
    counter.innerHTML = `${Math.round(startingCount + incr)}`;
    setTimeout(updatecounte,10)
}else{
    counter.innerHTML=targetCount;
}

}
updatecounter();
})