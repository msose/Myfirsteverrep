
    
//     document.getElementById('card').style.display = 'none';
//     document.getElementById('button').addEventListener('click', function () {
//         let array = [];




       


//         if (array.length > 0) {
            

//         }
//     });


//     document.getElementById('card').style.display='none'; //displayes nothing when fields are empty//

//     document.getElementById('error_mgs').style.display='none'; //hides error message//
    

// document.getElementById('button').addEventListener('click',function(){

//         let name = document.getElementById('name').value
//         let last_name = document.getElementById('lastname').value
//         let photo = document.getElementById('photo').value













// })



document.getElementById('card').style.display='none';
document.getElementById('alert').style.display='none';

document.getElementById('button').addEventListener('click',function(){
    let array = [];
    let name = document.getElementById('name').value;
    let last_name = document.getElementById('lastname').value;
    let photo = document.getElementById('photo').value;
    let idnumber = document.getElementById('code').value;
    let address = document.getElementById('address').value;
    let age = document.getElementById('age').value;

   

    if(name === ''){
        document.getElementById('name').style.borderColor = 'red'
        document.getElementById('name_label').innerHTML='Name field is required'
        return
     }else{
        document.getElementById('name').style.borderColor = ''
        document.getElementById('name_label').innerHTML='Name'
     }

     if(last_name === ''){
        document.getElementById('lastname').style.borderColor = 'red'
        document.getElementById('lastname_value').innerHTML='Last Name field is required'
        return
        }else{
            document.getElementById('lastname').style.borderColor = ''
            document.getElementById('lastname_value').innerHTML='Last Name'
        }
        
        
        if(photo === ''){
        document.getElementById('photo').style.borderColor = 'red'
        document.getElementById('photo_label').innerHTML='Photo field is required'
        return
        }else{
            document.getElementById('photo').style.borderColor = ''
        document.getElementById('photo_label').innerHTML='Photo'
        }

        if(idnumber === ''){
            document.getElementById('code').style.borderColor = 'red'
            document.getElementById('id_number').innerHTML='ID number field is required'
            return
            }else{
                document.getElementById('code').style.borderColor = ''
                document.getElementById('id_number').innerHTML='ID number'
            }

            if(address === ''){
                document.getElementById('address').style.borderColor = 'red'
                document.getElementById('adrress_label').innerHTML='Address field is required'
                return
                }else{
                    document.getElementById('address').style.borderColor = ''
                    document.getElementById('adrress_label').innerHTML='Address'
                }

                if(age === ''){
                    document.getElementById('age').style.borderColor = 'red'
                    document.getElementById('age_label').innerHTML='Age field is required'
                    return
                    }else{
                        document.getElementById('age').style.borderColor = ''
                    document.getElementById('age_label').innerHTML='Age'
                    }

                    array.push(name, last_name, photo, idnumber, address, age);
         if(array.length === 6){
           
            document.getElementById('card_name').innerHTML = name;
            document.getElementById('card_last_name').innerHTML = last_name;
            document.getElementById('img_link').setAttribute('src', photo);
            document.getElementById('card_age').innerHTML = age;
            document.getElementById('card_address').innerHTML = address;
            document.getElementById('card_idnumber').innerHTML = idnumber;

            document.getElementById('card').style.display = 'block';
         }           


})

