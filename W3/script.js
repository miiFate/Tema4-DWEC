function comprobarNombre(){
    var nom = document.getElementsByTagName('name_control').value;
    var exnom = new RegExp("/^([\w]+[\w\s-_]+,{1}[\w\s-]+[\w]+)$/");
    if(exnom.test(nom)){
        return true;
    }
    
}

function comprobarApellido(){
    var apell = document.getElementsByTagName('apellido_control').value;
    var exapil = new RegExp("/^([\w]+[\w\s-_]+,{1}[\w\s-]+[\w]+)$/");
    if(exapil.test(apell)){
        return true;
    }
}

function comprobarDNI(){
    var erdni = document.getElementsByTagName('DNI_control').value;
    var exdni = new RegExp("/^\d{8}[a-zA-Z]$/");
    if(exdni.test(erdni)){
        return true;
    }
}

function comprobarEmail(){
    var elmail = document.getElementsByTagName('email_control').value;
    var exmail = new RegExp(" /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/");
    if(exmail.test(elmail)){
       return true;
    }
}

function comprobarTelefono(){
    var telefono = document.getElementsByTagName('tel_control').value;
    var micasa = new RegExp("/^([0-9]{5})+((-{1})*)+([0-9]{6})$/");
    if(micasa.test(telefono)){
        document.getElementsByTagName('tel_control').style.backgroundColor = "#01ff01"
        return true;
    }
}

function comprobarUsuario(){
    var user = document.getElementsByTagName('user_control').value;
    var exuser = new RegExp("/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/")
    if(exuser(user)){
       return true;
    }
    
}

function comprobar(){
    comprobarNombre();
    comprobarApellido();
    comprobarDNI();
    comprobarEmail();
    comprobarTelefono();
    comprobarUsuario();
}