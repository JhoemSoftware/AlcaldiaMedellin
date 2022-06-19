// Algoritmo Uno
const response = document.getElementById('respuestaAlgUno')
const namePerson = document.getElementById('AlgoritmoUnoNAMEPERSON')
const lastNamePerson = document.getElementById('AlgoritmoUnoLASTNAMEPERSON')
const selectSexPerson = document.getElementById('AlgoritmoUnoSEXPERSON')
const selectMaritalPerson = document.getElementById('AlgoritmoUnoMARITALPERSON')
const botonRespuestaAlgUno = document.getElementById('botonAlgUno')

namePerson.addEventListener('blur',()=>{
      if(namePerson.value == "" ){
            swal({
                  title: "¡ERROR!",
                  text: "El nombre no puede estar vacío",
                  icon: "error",
                  button: "¡Listo!",
                });
      }
})

lastNamePerson.addEventListener('blur',()=>{
      if(lastNamePerson.value == "" ){
            swal({
                  title: "¡ERROR!",
                  text: "El apellido no puede estar vacío",
                  icon: "error",
                  button: "¡Listo!",
                });
      }
})

selectSexPerson.addEventListener('blur',()=>{
      if(selectSexPerson.value == 0){
            swal({
                  title: "¡ERROR!",
                  text: "Debes seleccionar un sexo",
                  icon: "error",
                  button: "¡Listo!",
                });
      }
})

selectMaritalPerson.addEventListener('blur',()=>{
      if(selectMaritalPerson.value == 0){
            swal({
                  title: "¡ERROR!",
                  text: "Debes seleccionar un estado civil",
                  icon: "error",
                  button: "¡Listo!",
                });
      }
})

botonRespuestaAlgUno.addEventListener('click',()=>{
      if ((namePerson.value != "") && (lastNamePerson.value != "") && (selectMaritalPerson.value != 0) && (selectSexPerson.value != 0)) {
            response.innerHTML = `La persona se llama: <b>${namePerson.value} ${lastNamePerson.value}</b> y está <b>${selectMaritalPerson.value}</b>, es una persona <b>${selectSexPerson.value}</b>`
      } else {
            swal({
                  title: "¡VALIDA TÚ INFORMACIÓN!",
                  text: "No has enviado la info correctamente",
                  icon: "warning",
                  button: "¡Revisaré!",
                });
      }
})

