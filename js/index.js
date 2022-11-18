btnCrear = document.getElementById("boton")


function validar(){
    const email = document.getElementById("email").value
    const nombre = document.getElementById("name").value
    const contrasenia = document.getElementById("contrasenia").value
    const contrasenia2 = document.getElementById("contrasenia2").value
    
    console.log(email)
    cont = 0
    for (let i = 0; i < email.length; i++) {
        const letra = email[i];
        if(letra == "@"){
            cont++
        }
        
    }
    if(cont == 1){
        
        if(nombre !== "" && contrasenia !== "" && contrasenia2 !== ""){
            if(contrasenia === contrasenia2){
                localStorage.setItem('nombre', JSON.stringify(nombre))
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Estas Doggeado!',
                  showConfirmButton: false,
                  timer: 1200
                })
                setTimeout(function(){
                  window.location.href = "../menu.html"
              }, 1200);
            } else{
                Swal.fire({
                    title: 'Las contraseñas no coinciden',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
            }
        } else{
            Swal.fire({
                title: 'Completar todos los campos',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
        }
    }else{
        Swal.fire({
            title: 'Ingresar email valido',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }

}

btnCrear.addEventListener("click",validar)
document.addEventListener('keypress', (e) =>{
  e.key == 'Enter' ? validar() : null
})



