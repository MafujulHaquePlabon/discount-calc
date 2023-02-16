let submitBtn= document.getElementById('submit-btn');
document.getElementById("input-field").addEventListener('keyup', function(event){
    const inputFieldValue= event.target.value;
   // console.log(inputFieldValue)
    if(inputFieldValue === 'disc30'){
     submitBtn.removeAttribute('disabled');
     console.log(submitBtn)
    }
    else{
        submitBtn.setAttribute('disabled',true)
    }
});

let count=0;
submitBtn.addEventListener('click', function(){
    const bikePriceElement = document.getElementById('price');
    const bikePriceString= bikePriceElement.innerText;
    const bikePrice= parseFloat(bikePriceString); 
    const discount30= (30/100)*bikePrice;
    const presentBikeTotalPrice=bikePrice-discount30;
    count +=1;
    if(count==1){
        bikePriceElement.innerText=presentBikeTotalPrice;
    }  
const inputFieldValue=document.getElementById('input-field');
inputFieldValue.value='';
});
