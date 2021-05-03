const form = document.querySelector('#reForm');
const email = document.querySelector('#email');


const validate = (id) =>{
    let input = document.querySelector('#' + id)
    if(input.value==='' || input.value.length < 2){
        input.classList.add('is-invalid');
        input.focus();
        return false;
    }
    else{
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        return true;
    }
}

const  emailVlidate = (email) =>{
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)){
    email.classList.remove('is-invalid');
    email.classList.add('is-valid');
    return true;
    }else{
    email.classList.remove('is-valid');
    email.classList.add('is-invalid');
    return false;
  }
  //console.log(email);
}



const select = document.getElementById('select');
const selectVlidate =(select)=>{
    if (select.value) {
    select.classList.remove('is-invalid');
    select.classList.add('is-valid');
    return true;

    }else{
    select.classList.remove('is-valid');
    select.classList.add('is-invalid');
    select.focus();
    return false;
    }
}
check = document.getElementById('flexCheckChecked');
const checkValidate =(check) =>{   
    if (check.checked === false) {
    check.classList.remove('is-valid');
    check.classList.add('is-invalid');       
    check.focus();
    //document.getElementById('check-error').style.visibility='visible';
    return false;     
    } else {
    check.classList.remove('is-invalid');
    check.classList.add('is-valid'); 
    //document.getElementById('check-error').style.visibility='hidden'; 
    return true;
    }
}

errors =[];
form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(check.classList)
    
    for(let i=0;i<e.currentTarget.length;i++){
        if(e.currentTarget[i].type ==='text'){
        validate(e.currentTarget[i].id);
        errors[i] = validate(e.currentTarget[i].id);
        }else if(e.currentTarget[i].value ==='email'){
        emailVlidate(email);
        errors[i] = emailVlidate(email);
        }else if(e.currentTarget[i].id ==='select'){
        selectVlidate(select);
        errors[i] = selectVlidate(select);
        }else{
        checkValidate(check);
        errors[i] =checkValidate(check);
        }
    }

    if(errors.includes(false)){
        console.log('det finns fel');             
    }else{
        console.log('all är rätt');}
    
})


