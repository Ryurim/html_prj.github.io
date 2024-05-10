let frm = document.querySelector("#frm");


frm.addEventListener('submit', (e) => {
    
    let errId = document.querySelector("#errId");
    let errName = frm.id.value;
    if (errName.length < 1 || errName == " ") {
        e.preventDefault();
        errId.style.display = "block";
        errId.style.color = "red";
        errId.innerHTML = "<stong style='font-size:small; float:left; margin-left: 10px;'>아이디를 입력하세요.</stong>"
       
        return false;
    }
    else errId.style.display="none";
   
    return true;
});
frm.addEventListener('submit', (e) => {
    

    let errPwd = document.querySelector("#errPwd");
    let errP = frm.pwd.value;
    
    if (errP.length < 1 || errP == " ") {
        e.preventDefault();
        errPwd.style.display = "block";
        errPwd.style.color = "red";
        errPwd.innerHTML = "<stong style='font-size:small; float:left; margin-left: 10px;'>비밀번호를 입력하세요.</stong>"
        
        return false;
    }
    else errPwd.style.display="none";

    return true;
});
