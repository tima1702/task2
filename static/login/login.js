function validateLogin() {
    removeAllError();

    var str = document.getElementById('login').value;
    var parrent = /^[a-zA-Z]{1}[a-zA-Z1-9]{3,20}/i;
    if(!parrent.test(str)) VT.addClass(".help-login",'error');

    if(document.getElementById('inputPassword').value.length < 5) VT.addClass('.help-password','error');

    if(VT.getAllEl('.error').length == 0) return true;
    return false;
}

function getObjectLogin(){
    var object = new Object();

    object.login = document.getElementById('login').value;
    var str = document.getElementById('inputPassword').value;
    object.password = str.hashCode();

    return object;
}

function userLogin(){

    if(!validateLogin()) return false;
    var obj = getObjectLogin();

    VT.send('POST','/login',obj, function (e) {
        console.log(e);
    },function (p) {

        console.log(p);

        if(p.numer == '-1'){
            alert(p.description);
            return false;
        }
        var userInfo = p;
        for(var key in userInfo) localStorage.setItem(key,userInfo[key]);
        console.log(userInfo);
        loadUserInfo();
    });
}

