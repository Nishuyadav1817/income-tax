const btn=document.getElementById('btn');

btn.addEventListener('click', ()=>{
 const inc=document.getElementById('inc');
 const pri=document.getElementById('box2');
 const income=Number(inc.value);

 if (income <= 300000) {
    tax = 0;
} else if (income <= 600000) {
    tax = (income - 300000) * 0.05;
} else if (income <= 900000) {
    tax = (300000 * 0.05) + (income - 600000) * 0.10;
} else if (income <= 1200000) {
    tax = (300000 * 0.05) + (300000 * 0.10) + (income - 900000) * 0.15;
} else if (income <= 1500000) {
    tax = (300000 * 0.05) + (300000 * 0.10) + (300000 * 0.15) + (income - 1200000) * 0.20;
} else {
    tax = (300000 * 0.05) + (300000 * 0.10) + (300000 * 0.15) + (300000 * 0.20) + (income - 1500000) * 0.30;
}

pri.innerHTML=tax;

if(tax===0){
    pri.innerHTML=" Chal nikal Bhikhari"
}


})
const inc=document.getElementById('inc');
 const pri=document.getElementById('box2');
const btn2=document.getElementById('btn2');
btn2.addEventListener('dblclick',() =>{
    inc.value='';
    pri.innerHTML="No input";
   
})