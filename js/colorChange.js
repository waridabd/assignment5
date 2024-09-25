document.getElementById('history-btn').addEventListener('click',function(){
    document.getElementById('history-btn').classList.remove('btn');
document.getElementById('history-btn').classList.add('btn', 'btn-accent');
document.getElementById('donate-btn').classList.remove('btn', 'btn-accent');
document.getElementById('donate-btn').classList.add('btn');
});
document.getElementById('donate-btn').addEventListener('click',function(){
    document.getElementById('donate-btn').classList.remove('btn');
document.getElementById('donate-btn').classList.add('btn', 'btn-accent');
document.getElementById('history-btn').classList.remove('btn', 'btn-accent');
document.getElementById('history-btn').classList.add('btn');
});