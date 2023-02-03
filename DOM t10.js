


var sub=document.getElementById('for');
sub.addEventListener('submit',cred);

function cred(e){
    e.preventDefault(); 
    var fn=document.getElementById('fn').value;
    var ln=document.getElementById('ln').value;
    localStorage.setItem(fn,ln);
    
}


