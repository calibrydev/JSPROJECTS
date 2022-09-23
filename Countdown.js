let Days=document.getElementById('Days');
let Hours=document.getElementById('Hours');
let Minutes=document.getElementById('Minutes');
let seconds=document.getElementById('Seconds');

    function countTimer(){

let tarehe=new Date().getTime();
//let Dday=new Date("2023-01-01T19:21:38");
let Dday=new Date('Sep  19,2023 16:00:00' ).getTime();

let balance=Dday-tarehe;
let sec=1000;
let min=sec*60;
let hrs=min*60;
let days=hrs*24;

    let dueDate=Math.floor(balance/days);
    const hhHours=Math.floor((balance%days)/hrs);

    let dueMins=Math.floor((balance%hrs)/min);
    let dueseconds=Math.floor((balance%min)/sec);


Days.innerHTML=dueDate;
Hours.innerHTML=hhHours;
Minutes.innerHTML=dueMins;
seconds.innerHTML=dueseconds;
setTimeout(()=>{
    countTimer();
},1000)

}
countTimer();