
var sub=document.getElementById('for');
sub.addEventListener('submit',cred);

function cred(e){
    e.preventDefault(); 
    var nm=document.getElementById('nm').value;
    var em=document.getElementById('em').value;
    var tel=document.getElementById('tell').value
     let obj={
        name:nm,
        email:em,
        phone:tel
     };
     let obj_st=JSON.stringify(obj);
     localStorage.setItem(em,obj_st);
     //document.write(nm + ' - ' +em +' - '+ tel);
     var list=document.getElementById('items');
     var li=document.createElement('li');
     li.className='list-item';
     li.appendChild(document.createTextNode(nm + ' - ' +em +' - '+ tel));
     list.appendChild(li);
    
}
