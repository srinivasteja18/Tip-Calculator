
const card = document.querySelector('.card');
const billInput = card.querySelector('.input-bill')
const tips = card.querySelectorAll('.percent');
const tipInput = card.querySelector('.custom');
const personsInput = card.querySelector('.input-people') ;
const error1 = card.querySelector('.error1');
const error2 = card.querySelector('.error2');
const tipAmount = card.querySelector('.amountTip');
const totalAmount = card.querySelector('.amountTotal');
const reset = card.querySelector('.button');

const array = {"25%":25, "5%":5, "15%":15, "10%":10, "20%":20 }


function validateBill(){
    var bill = billInput.value;
    if(bill.length == 0){
        error1.style.visibility = "visible";
        billInput.style.border = "1px solid red"
        return false;
    }
    if(bill.length>0){
        error1.style.visibility = "collapse";
        billInput.style.border = "0px"
    }
    calcTotal();
}
function validatePersons(){
    var person = personsInput.value;
    if(person.length == 0){
        error2.style.visibility = "visible";
        personsInput.style.border = "1px solid red"
        return false;
    }
    if(person.length>0){
        error2.style.visibility = "collapse";
        personsInput.style.border = "0px"
    }
    calcTotal();
}

function tipPercent(e){
    tipInput.value="";
    tips.forEach(tip => {
         if(e == tip){
             tip.style.backgroundColor = "hsl(180, 66%, 41%)";
         }else{
            tip.style.backgroundColor = "hsl(183, 91%, 13%)";
         }
    });
    calcTotal();
    return true;
}


function calcTotal(){
    const billValue = parseFloat(billInput.value);
    const numPersons = parseFloat(personsInput.value);
    if(billInput.value.length ==0 || personsInput.value.length ==0) return false;
    let e =tipInput.value;
    if(e.length ==0 ){
        tips.forEach(tip=>{
            if(tip.style.backgroundColor == "rgb(36, 174, 174)"){
                e = tip;
            }
        });
    }
    var tip;
    if(e != tipInput.value)
         tip = (array[e.innerHTML]/100)*billValue;
    else 
        tip = (e/100)*billValue;
    console.log("jh");
    tipAmount.innerHTML = (tip/numPersons).toFixed(2);
    totalAmount.innerHTML = ((billValue+tip)/numPersons).toFixed(2);
}

function validateCustom(){
    const value = tipInput.value;
    if(value.length > 0){
        tips.forEach(tip=>{
            tip.style.backgroundColor = "hsl(183, 91%, 13%)";
        });
    }
    calcTotal();
}

function resetAll(){
    tipInput.value="";
    billInput.value="";
    personsInput.value="";
    tipAmount.innerHTML="0.00";
    totalAmount.innerHTML="0.00";
    tips.forEach(tip=>{
        tip.style.backgroundColor = "hsl(183, 91%, 13%)";
    });
}

