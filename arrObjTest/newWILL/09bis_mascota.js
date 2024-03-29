/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function crearClaseMascota() {
    class Mascota {
      constructor(nombre, dueño, actividades) {
        // El constructor de la clase Mascota recibe nombre (string), dueño (objeto), actividades (array de objetos)
        // ej:
        //[{actividad: 'salir a caminar', frecuencia: '1 vez al dia'}, {actividad: 'baño', frecuencia: '1 vez al mes'}]
        // Inicializar las propiedades de la mascota con los valores recibidos como argumento
        // Tu código aca:
        this.nombre = nombre;
        this.dueño = dueño;
        this.actividades = actividades;
      }
  
      getNombre() {
        // este método debe retornar el nombre de la mascota.
        // Tu código aca:
        return this.nombre;
      }
  
      getDueño() {
        // El método debe retornar nombre y apellido del dueño (concatenados).
        // Tu código aca:
        return this.dueño.nombre + " " +this.dueño.apellido;
      }
  
      addActividad(actividad, frecuencia) {
        // El método recibe un string 'actividad' y otro string 'frecuencia'  y debe agregarlo al arreglo de actividades de la mascota.
        // No debe retornar nada.
        // Tu código aca:
        let activ = {actividad:actividad,frecuencia:frecuencia} //CREAS UNA VAR LE GUARDAS UN JSON CON ACTIVIDAD: ACTIVIDAD FRECUENCIA: FRECUENCIA
        this.actividades.push(activ); // HACES PUSH DE ACTIV AL ARRAY DE ACTIVIDADES DE LA MASCOTA
      }
  
      getActividades() {
        // El método debe retornar un arreglo con sólo las actividades de las mascotas.
        // Ej:
        // [{actividad: 'salir a caminar', frecuencia: '1 vez al dia'}, {actividad: 'baño', frecuencia: '1 vez al mes'}]
        // mascotas.getActividades() debería devolver ['salir a caminar, 'baño']
        // Tu código aca:
  
        var newArr = [];
  
        const activities = this.actividades
        activities.forEach(element => {
          newArr.push(element.actividad);
        });
  
        return newArr;
  
      }
  
      getFrecuencia(actividad) {
        // El metodo debe retornar la frecuencia de dicha actividad
        // ej:
        // [{actividad: 'salir a caminar', frecuencia: '1 vez al dia'}, {actividad: 'baño', frecuencia: '1 vez al mes'}]
        // mascotas.getFrecuencia('baño') debería devolver '1 vez al mes'
        // Tu código aca:
  
        const accion = this.actividades

        for(let i = 0; i<accion.length; i++){
            if(accion[i].actividad==actividad){
                return accion[i].frecuencia
            }
        }
        return 'No hubo actividad'

        // if(accion[actividad]){
        //     return accion
        // }
        
      }
  
  
    }
  
    return Mascota;
  }
  
  // No modifiques nada debajo de esta linea //
  
  
  let Mascota = crearClaseMascota();
  let mascota = new Mascota("LALLALA",{ nombre: "Molly", apellido: "pepe" },[{ actividad: "salir a caminar", frecuencia: "1 vez al dia" },{ actividad: "baño", frecuencia: "1 vez al mes" },])
  
  mascota.addActividad('correr','10 veces por día')
  mascota.addActividad('baño','2 veces al mes')
  mascota.addActividad('dormir','1 vez por año')
  
  
  
  // console.log(mascota.getDueño())
  // console.log(mascota.getNombre())
  // console.log(mascota.getActividades())
  console.log(mascota.getFrecuencia('correr'))
  console.log(mascota.getFrecuencia('comer'))
  
  
        // let arr = [] 
  
        // for(let i = 0; i < Object.entries(this.actividades).length ;i++){ // PEDIS LA QUE LA LONGITUD DEL OBJECT ENTRIES DE THIS.ACTIVIDADES
  
        //   arr.push(Object.entries(this.actividades)[i][1].actividad) //PUSH DE CADA ACTIVIDAD AL ARR VACIO
          
  
        // }
  
        // return arr
  
              // let arr = []
  
        // for(let i = 0; i < Object.entries(this.actividades).length ;i++){ // PEDIS LA QUE LA LONGITUD DEL OBJECT ENTRIES DE THIS.ACTIVIDADES
  
        //   arr.push(Object.entries(this.actividades)[i][1].frecuencia)  //PUSH DE CADA FRECUENCIA AL ARR VACIO
           
          
  
        // }
        // return arr