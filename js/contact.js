let frm = document.querySelector("#frm");


frm.addEventListener('submit', (e) => {
    
    let errId = document.querySelector("#errId");
    let errName = frm.name.value;
    if (errName.length < 1 || errName == " ") {
        e.preventDefault();
        errId.style.display = "block";
        errId.style.color = "red";
        errId.innerHTML = "<stong style='font-size:small; float:left; margin-left: 10px;'>이름을 입력하세요.</stong>"
       
        return false;
    }
    else errId.style.display="none";
   
    return true;
});
frm.addEventListener('submit', (e) => {
    

    let errEmail = document.querySelector("#errEmail");
    let errE = frm.email.value;
    
    if (errE.length < 1 || errE == " ") {
        e.preventDefault();
        errEmail.style.display = "block";
        errEmail.style.color = "red";
        errEmail.innerHTML = "<stong style='font-size:small; float:left; margin-left: 10px;'>이메일을 입력하세요.</stong>"
        
        return false;
    }
    else errEmail.style.display="none";

    return true;
});

frm.addEventListener('submit', (e) => {
    
   
    let errPhone = document.querySelector("#errPhone");
    let errP = frm.phone.value;
    
    console.log(errPhone);

    if (errP.length < 1 || errP == " ") {
        e.preventDefault();
        errPhone.style.display = "block";
        errPhone.style.color = "red";
        errPhone.innerHTML = "<stong style='font-size:small; float:left; margin-left: 10px;'>전화번호를 입력하세요.</stong>"
       
        return false;
    }
    else errPhone.style.display="none";

   
    return true;
});
