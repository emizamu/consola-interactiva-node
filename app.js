require ('colors');
const {inquirerMenu, pausa, pregunta} = require('./helpers/inquirer');
const Tareas = require ('./models/Tareas');


const main = async () => {

let opt = 0;
const tareas = new Tareas();
   
   do{
    opt = await inquirerMenu();
    //* Opciones del menu
     switch(opt){
      case 1:
        const desc = await pregunta('Indique descripción: ');
        console.log(desc);
        tareas.crearTarea(desc);
        break;
      case 2:
        console.log(tareas.listadoArray);
         break;
      case 3:
          break;
      case 4:
        break;
      case 5:
        break;
      case 6:
        break;
      default:
         break;
    }

    if(opt != 0){
      console.log('\n')
      await pausa();
    }

   } while (opt != 0);

}

main();