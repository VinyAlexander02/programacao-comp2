function chefe() {
    var hora = Number(prompt("Informe as hora: "))
    var minutos = Number(prompt("Informe os minutos: "))
    var segundos = Number(prompt("Informe os segundos: "))

    var resultado = ex2(hora, minutos, segundos)

    console.log(`A hora em segundos é ${resultado}s`)
}

function ex2(hora, minutos, segundos) {
   var hr = 3600 * hora
   var min = 60 * minutos
   var seg = segundos 
   return(hr + min + seg)
}

chefe()