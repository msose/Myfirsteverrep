let array = [];
document.getElementById('card').style.display='none';
document.getElementById('button').addEventListener('click',function(){
let name = document.getElementById('name').value
let last_name = document.getElementById('lastname').value
let photo = document.getElementById('photo').value
let idnumber = document.getElementById('idnumber').value
let address = document.getElementById('address').value
let age = document.getElementById('age').value



array.push(name,last_name,photo,idnumber,address,age);
 

if(array.length >0){
document.getElementById('card').style.display='block';
document.getElementById('card_name').innerHTML = name
document.getElementById('card_last_name').innerHTML=last_name
document.getElementById('img_link').setAttribute('src',photo)
document.getElementById('card_age').innerHTML=age
document.getElementById('card_address').innerHTML=address
document.getElementById('card_idnumber').innerHTML=idnumber





}
})