// cambio color

document.addEventListener("keydown",function(modificar){
    if(modificar.key === "a" ||modificar.key === "A"){
        let rosado = document.getElementById("key");
        rosado.style.backgroundColor = "pink";
    }else if (modificar.key === "s" ||modificar.key === "S"){
        let naranjo = document.getElementById("key");
        naranjo.style.backgroundColor = "orange";
    }else if (modificar.key === "d" ||modificar.key === "D"){
        let celeste = document.getElementById("key");
        celeste.style.backgroundColor = "skyBlue";
    }

})


// añadir div

document.addEventListener("keydown", function(agregar){
    if(agregar.key === "q" ||agregar.key === "Q"){
        let contenedor = document.getElementById("contenedor");
        let cuadroNuevo = document.createElement("div");
        cuadroNuevo.style.backgroundColor = "purple";
        cuadroNuevo.style.border = "2px solid black";
        cuadroNuevo.style.width = "200px";
        cuadroNuevo.style.height = "200px";
        contenedor.appendChild(cuadroNuevo);
    } else if (agregar.key === "w" ||agregar.key === "W"){
        let contenedor = document.getElementById("contenedor");
        let cuadroNuevo = document.createElement("div");
        cuadroNuevo.style.backgroundColor = "gray";
        cuadroNuevo.style.border = "2px solid black";
        cuadroNuevo.style.width = "200px";
        cuadroNuevo.style.height = "200px";
        contenedor.appendChild(cuadroNuevo);
    }else if (agregar.key === "e" ||agregar.key === "E"){
        let contenedor = document.getElementById("contenedor");
        let cuadroNuevo = document.createElement("div");
        cuadroNuevo.style.backgroundColor = "brown";
        cuadroNuevo.style.border = "2px solid black";
        cuadroNuevo.style.width = "200px";
        cuadroNuevo.style.height = "200px";
        contenedor.appendChild(cuadroNuevo);
    }
})

