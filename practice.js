/*console.log(document.url);
console.log(document.title);
console.log(document.doctype); 
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.forms);
console.log(document.links); */
console.log(document.images);
//console.log(document.getElementById('header-title'));
var a=document.getElementById('header-title');
a.textContent="Hello";
//console.log(header-title);
a.style.borderBottom="solid 3px black";
var b=document.querySelector('.title');
b.style.color="green";
b.style.fontWeight='bold';