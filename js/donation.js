document.getElementById('donate-flood-btn').addEventListener('click',function(event){
    event.preventDefault();
    const donateAmount = document.getElementById('donate-money').value;
    if(donateAmount>0){
      const floodDonation=document.getElementById('flood-donation') .innerText;
      const floodMoney=parseFloat(floodDonation);
      const donateMoney =parseFloat(donateAmount);
     
      const newBalance=donateMoney+floodMoney;
      console.log(newBalance);
      document.getElementById('flood-donation').innerText=newBalance;
      const totalAmount =document.getElementById('total-amount').innerText;
      const newAmount=parseFloat(totalAmount);
      const newTotal=newAmount-donateMoney;
      document.getElementById('total-amount').innerText=newTotal;
    }
    else{
      alert("Invalid Amount");
    }
});

document.getElementById('donate-feni-btn').addEventListener('click',function(event){
  event.preventDefault();
  const donateAmount = document.getElementById('donate-money1').value;
  if(donateAmount>0){
    const floodDonation=document.getElementById('feni-donation') .innerText;
    const floodMoney=parseFloat(floodDonation);
    const donateMoney =parseFloat(donateAmount);
   
    const newBalance=donateMoney+floodMoney;
    console.log(newBalance);
    document.getElementById('feni-donation').innerText=newBalance;
    const totalAmount =document.getElementById('total-amount').innerText;
    const newAmount=parseFloat(totalAmount);
    const newTotal=newAmount-donateMoney;
    document.getElementById('total-amount').innerText=newTotal;
  }
  else{
    alert("Invalid Amount");
  }
});

document.getElementById('donate-quota-btn').addEventListener('click',function(event){
  event.preventDefault();
  const donateAmount = document.getElementById('quota-money').value;
  if(donateAmount>0){
    const floodDonation=document.getElementById('quota-donation') .innerText;
    const floodMoney=parseFloat(floodDonation);
    const donateMoney =parseFloat(donateAmount);
   
    const newBalance=donateMoney+floodMoney;
    console.log(newBalance);
    document.getElementById('quota-donation').innerText=newBalance;
    const totalAmount =document.getElementById('total-amount').innerText;
    const newAmount=parseFloat(totalAmount);
    const newTotal=newAmount-donateMoney;
    document.getElementById('total-amount').innerText=newTotal;
  }
  else{
    alert("Invalid Amount");
  }
});