let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// --- ESTA FUNCIÓN HA SIDO MODIFICADA ---
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("java");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("mysql");
        habilidades[3].classList.add("git");
        habilidades[4].classList.add("aprendizaje");
        habilidades[5].classList.add("trabajo");
        habilidades[6].classList.add("detalle");
        habilidades[7].classList.add("critico");
    }
}
// --- FIN DE LA FUNCIÓN MODIFICADA ---


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}

const form = document.getElementById('form-contacto');

if(form) {
    form.addEventListener("submit", async function(event) {
        event.preventDefault(); // Evita que la página se recargue
        
        const data = new FormData(event.target);
        
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                alert("¡Mensaje enviado con éxito!");
                form.reset(); // Limpia los campos
            } else {
                alert("Hubo un error al enviar el mensaje.");
            }
        }).catch(error => {
            alert("Hubo un error al enviar el mensaje.");
        });
    });
}