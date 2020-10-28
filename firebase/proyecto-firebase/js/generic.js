// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyARW8D75nBsUu9W-q5jYmtTjJEHWpbq3wc",
    authDomain: "miproyectoconfirebase.firebaseapp.com",
    databaseURL: "https://miproyectoconfirebase.firebaseio.com",
    projectId: "miproyectoconfirebase",
    storageBucket: "miproyectoconfirebase.appspot.com",
    messagingSenderId: "774804926869",
    appId: "1:774804926869:web:2ea51ada74ca6cf389069c",
    measurementId: "G-T6HN97PXX7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

function checkAuth() {
    firebase.auth().onAuthStateChanged(
        res => {
            if (res == null) {
                document.getElementById("itemSalir").style.display = "none";
                document.getElementById("itemTipoLibro").style.display = "none";
                document.getElementById("itemLibro").style.display = "none";
                document.getElementById("itemMisPrestamos").style.display = "none";
                document.getElementById("itemRegistro").style.display = "inline-block";

                document.getElementById("divDatosUso").style.visibility = "hidden";

                if (document.getElementById("divRedes")) {
                    document.getElementById("divRedes").style.visibility = "visible";
                }

            } else {
                document.getElementById("itemSalir").style.display = "inline-block";
                document.getElementById("itemTipoLibro").style.display = "inline-block";
                document.getElementById("itemLibro").style.display = "inline-block";
                document.getElementById("itemMisPrestamos").style.display = "inline-block";
                document.getElementById("itemRegistro").style.display = "none";

                document.getElementById("divDatosUso").style.visibility = "visible";

                if (document.getElementById("divRedes")) {
                    document.getElementById("divRedes").style.visibility = "hidden";
                }

                if (res.displayName != null) {
                    document.getElementById("lblNombreUsuario").innerHTML = "Bienvenido " + res.displayName;
                }else{
                    document.getElementById("lblNombreUsuario").innerHTML = "Bienvenido " + res.email;
                }
            }
        }
    );
}

function salir() {
    console.log('func salir');
    firebase.auth().signOut()
        .then(res => {
            console.log('res: ', res);
            // console.log(document.location.href);
            document.location.href = "./";
        })
        .catch(err => {
            console.error(err);
            alert(err);
        });
}