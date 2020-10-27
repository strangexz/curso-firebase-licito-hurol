function crearUsuario() {
    console.log('func crearUsuario');
    var email = document.getElementById("emailReg").value;
    console.log('email: ', email);
    var pwd = document.getElementById("pwdReg").value;
    console.log('pwd: ', pwd);


    firebase.auth().createUserWithEmailAndPassword(email, pwd)
        .then(response => {
            console.log(response);
            alert("se registro correctamente");
            document.getElementById("btnCancelar").click();
        }).catch(error => {
            console.error(error);
            alert("hubo un error");
        });
}

function iniciarSesion() {
    console.log('func crearUsuario');

    var email = document.getElementById("emailLogin").value;
    console.log('email: ', email);
    var pwd = document.getElementById("pwdLogin").value;
    console.log('pwd: ', pwd);


    firebase.auth().signInWithEmailAndPassword(email, pwd)
        .then(response => {

            document.location.href = "misPrestamos.html";
            // IMAGEN
            if (response.user.photoURL != null) {
                document.getElementById("imgFotoUsuario").src = response.user.photoURL;
            } else {
                document.getElementById("imgFotoUsuario").src = "../img/noFoto.jpeg";
            }
        }).catch(error => {
            console.error(error);
            document.getElementById("alertLoginError").style.display = "block";
            document.getElementById("alertLoginError").innerHTML = error;
        });
}
