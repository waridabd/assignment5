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
      const div=document.createElement('div');
      div.classList.add('border-2','bg-slate-100','p-2','m-2');
      const newDate = new Date();
      div.innerHTML=`
     <h1 class="text-2xl font-medium">${donateMoney} Taka is Donated for Donate for Flood in Noakhali, Bangladesh. </h1>
     
     <h1 class='text-2xl font-medium'> Date: ${newDate} </h1> `
  
      document.getElementById('history-container').appendChild(div);
  
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
    
    const div=document.createElement('div');
    div.classList.add('border-2','bg-slate-100','p-2','m-2');
    const newDate = new Date();
    div.innerHTML=`
   <h1 class="text-2xl font-medium">${donateMoney} Taka is Donated for Donate for Flood in Feni, Bangladesh. </h1>
   
   <h1 class='text-2xl font-medium'> Date: ${newDate} </h1> `

    document.getElementById('history-container').appendChild(div);

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
    const div=document.createElement('div');
      div.classList.add('border-2','bg-slate-100','p-2','m-2');
      const newDate = new Date();
      div.innerHTML=`
     <h1 class="text-2xl font-medium">${donateMoney} Taka is Donated for Aid for injured in Bangladesh. </h1>
     
     <h1 class='text-2xl font-medium'> Date: ${newDate} </h1> `
  
      document.getElementById('history-container').appendChild(div);
  }
  else{
    alert("Invalid Amount");
  }
});