function consola(valor){
    let console = document.getElementById("Display");

    console.value+= valor;
}

function resultado(){
    let console = document.getElementById("Display");

    console.value= eval(console.value)
}