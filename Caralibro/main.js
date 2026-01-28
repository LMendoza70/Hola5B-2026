const selectMuro=document.getElementById("select-usuario")
const muroDiv=document.getElementById("muro")
const avatarImg=document.getElementById("avatar-img")
const nombreHeader=document.getElementById("nombre-usuario")

//cargamos el select con la informacion 
fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>response.json())
.then(data=>{
    data.forEach(usuario=>{
        const opcion='<option value="'+usuario.id+'">'+usuario.name+'</option>'
        selectMuro.innerHTML +=opcion
    })
})

//funcion para cargar el muro segun el usuario
const cargarMuro=()=>{
    const userId=selectMuro.value
    const nombre=selectMuro.options[selectMuro.selectedIndex].text
    //si no selecciono ningun usuario
    if(!userId) return
    //y si si...
    //actualizamos el nombre de usuario 
    nombreHeader.innerText=nombre
    //mostramos el avatar
    avatarImg.src='https://api.dicebear.com/9.x/avataaars/svg?seed='+nombre
    avatarImg.style.display='block'

}