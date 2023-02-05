console.log(document.url);
console.log(document.title);
console.log(document.doctype); 
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.forms);
console.log(document.links); 
console.log(document.images);
//console.log(document.getElementById('header-title'));
var a=document.getElementById('header-title');
a.textContent="Hello";
//console.log(header-title);
a.style.borderBottom="solid 3px black";
var b=document.querySelector('.title');
b.style.color="green";
b.style.fontWeight='bold';   
var c=document.getElementsByClassName("list-group-item");
c[2].style.backgroundColor="green";
console.log(c);
for(var i=0;i<c.length;i++){
    c[i].style.fontWeight="bold";
}    
var d=document.getElementsByClassName("list-group-item");
for(var i=0;i<d.length;i++){
    d[i].style.backgroundColor="grey";

}
var e=document.getElementsByTagName('li');
for(var i=0;i<e.length;i++){
    e[i].style.backgroundColor="pink";
}   
var f=document.querySelector('.list-group-item:nth-child(2)');
f.style.backgroundColor="green";
var g=document.querySelector('.list-group-item:nth-child(3)');
g.style.display='none';        
var h=document.querySelectorAll('.list-group-item');
h[1].style.color='green';
var i=document.querySelectorAll('.list-group-item:nth-child(odd)');
for(var a=0;a<i.length;a++){
    i[a].style.backgroundColor='green';
}  
       




var it=document.querySelector('#items');

console.log(it.parentNode);
console.log(it.parentNode.parentNode);
console.log(it.parentNode.parentNode.parentNode);
console.log(it.parentElement);
console.log(it.childNodes);
console.log(it.children);
it.children[2].style.backgroundColor="yellow";
console.log(it.firstChild);
console.log(it.firstElementChild);
        
console.log(it.firstElementChild.textContent="Hello 1");
console.log(it.lastElementChild.textContent="Hello 5");
console.log(it.nextSibling);
console.log(it.nextElementSibling);
console.log(it.previousSibling);
console.log(it.previousElementSibling);
console.log(it.previousElementSibling.style.color='red');     
  
var newdiv=document.createElement("div");
newdiv.className='hello';
newdiv.id='hello2';
newdiv.setAttribute('title','hello title');
var newdivtext=document.createTextNode('HEllo');
newdiv.appendChild(newdivtext);  

var con=document.querySelector('header .container');
var h1=document.querySelector('header h1');
con.insertBefore(newdiv,h1);

      

var li=document.createElement('li');
var lidata=document.createTextNode('HEllo');
li.appendChild(lidata);
var find=document.querySelector('ul');
var lc=find.firstElementChild;
lc.appendChild(li);
console.log(find);


