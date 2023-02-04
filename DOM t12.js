
var sub=document.getElementById('for');
sub.addEventListener('submit',cred);
var list=document.getElementById('items');




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
     var btn=document.createElement('button');
     var li=document.createElement('li');
     btn.id=('buttonid');
     li.appendChild(document.createTextNode(nm + ' - ' +em +' - '+ tel));

     
     btn.className='button';
     btn.appendChild(document.createTextNode('Delete'));
     li.appendChild(btn);



     list.appendChild(li);
     console.log(btn)
    btn.addEventListener('click',function(e){
      if(e.target.id==='buttonid'){
         var li=e.target.parentElement;
         list.removeChild(li);
      }
    })
}



