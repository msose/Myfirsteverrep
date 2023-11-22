newFunction();

function newFunction() {
    let array = [];
    document.getElementById('card').style.display = 'none';
    document.getElementById('button').addEventListener('click', function () {
        let name = document.getElementById('name').value;
        let last_name = document.getElementById('lastname').value;
        let photo = document.getElementById('photo').value;
        let idnumber = document.getElementById('idnumber').value;
        let address = document.getElementById('address').value;
        let age = document.getElementById('age').value;



        array.push(name, last_name, photo, idnumber, address, age);


        if (array.length > 0) {
            document.getElementById('card').style.display = 'block';
            document.getElementById('card_name').innerHTML = name;
            document.getElementById('card_last_name').innerHTML = last_name;
            document.getElementById('img_link').setAttribute('src', photo);
            document.getElementById('card_age').innerHTML = age;
            document.getElementById('card_address').innerHTML = address;
            document.getElementById('card_idnumber').innerHTML = idnumber;

        }else{ 


            
        document.getElementById('card').style.display='none'; //displayes nothing when fields are empty//

        document.getElementById('error_mgs').style.display='none'; //hides error message//
        
        document.getElementById('button').addEventListener('click',function(){

            let name = document.getElementById('name').value
            let last_name = document.getElementById('lastname').value
            let photo = document.getElementById('photo').value
 

if(name === '' || name.length < 3){
document.getElementById('name').style.borderColor = 'red'
document.getElementById('name_laleb').innerHTML='Name field is required'
}


if(last_name === ''){
document.getElementById('lastname').style.borderColor = 'red'
document.getElementById('lastname_value').innerHTML='Last Name field is required'
}


if(photo === ''){
document.getElementById('photo').style.borderColor = 'red'
document.getElementById('photo_label').innerHTML='Photo field is required'
}




let inputs = document.querySelectorAll('input');
for (let i = 0; i<inputs.length ; i++) {
if(inputs[i].value === ''){
document.getElementById('error_mgs').style.display='block';
}else{
document.getElementById('error_mgs').style.display='none';
}
}
 

 

})



        }
    });
}
