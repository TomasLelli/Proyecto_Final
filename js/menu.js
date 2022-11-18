fetch('https://strangerthings-quotes.vercel.app/api/quotes/2')
.then(response => response.json())  // convertir a json
.then(frases => 
    frases.forEach(frase => {
        const cardNotas1 = document.getElementById("texto");
        const divNotas2 = document.createElement('div');
        divNotas2.className = "card m-3";
        divNotas2.innerHTML = `<div class="card-header">
                                @${frase.author}
                                </div>
                                <div class="card-body">
                                <blockquote class="blockquote mb-0">
                                    <p>${frase.quote}</p>
                                    <footer class="blockquote-footer">From: <cite title="">Stranger Things</cite></footer>
                                </blockquote>
                            </div>`
      
        cardNotas1.append(divNotas2) 
    }
    )
    )
    
.catch(err => console.log('Solicitud fallida', err))

/* Por ahora un ususario podra ingresar un solo registro */

class Tweet{
    constructor(nombre, campo){
    nombre = this.nombre;
    campo = this.campo
    }
}

registros = []



/*  */


btnCargar = document.getElementById("cargar")
btnMostrar = document.getElementById("mostrar")

const nombreUsu = document.getElementById("nombreUsu")
const nombreUsu2 = document.getElementById("nombreUsu2")
let usNom = JSON.parse(localStorage.getItem('nombre'))
let letraMayus = usNom[0].toUpperCase()
nombreUsu2.innerHTML +=  `${letraMayus}`
nombreUsu.innerHTML +=  `@${usNom}`

/* Fecha */

let date = new Date();
let current_date = date.getFullYear()+"/"+(date.getMonth()+1)+"/"+ date.getDate();
let current_time = date.getHours()+":"+date.getMinutes()


function cargar(){
    let nombre = JSON.parse(localStorage.getItem("nombre"))
    
    const estado = document.getElementById("campoEstado").value

    registros.push(
        {
            nombre: nombre,
            campo: estado
        }
    )
    
    texto = document.getElementById("texto")
    divNotas = document.createElement('div');
    divNotas.className = "card m-3";
    divNotas.innerHTML = `
    <div class="card-header">
    @${nombre}
        </div>
        <div class="card-body">
        <blockquote class="blockquote mb-0">
            <p>${estado}</p>
            <footer class="blockquote-footer">Date: <cite title="">${current_time} - ${current_date} </cite></footer>
        </blockquote>
    </div>
    `

    texto.append(divNotas)
    Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Publicado',
    showConfirmButton: false,
    timer: 1200
  })
    resetearTextArea()
    console.log(registros);
}


function resetearTextArea(){
    document.getElementById("name").value='';
    document.getElementById("campoEstado").value = '';
}

btnCargar.addEventListener('click', cargar)





