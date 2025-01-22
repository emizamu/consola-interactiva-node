require ('colors');
const {inquirerMenu, pause, question} = require('./helpers/inquirer');
const {saveDB, readDB} = require('./helpers/fileSystem');
const Tasks = require ('./models/Tasks');


const main = async () => {

let opt = 0;
const tareas = new Tasks();

const TasksDB = readDB();

if (TasksDB) {
  tareas.updateTasks(TasksDB);
}
   
   do{
    opt = await inquirerMenu();
    //* Opciones del menu
     switch(opt){
      case 1:
        const desc = await question('Indique descripción: ');
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
        saveDB(tareas.listadoArray);
         break;
    }

    if(opt != 0){
      console.log('\n')
      await pause();
    }

   } while (opt != 0);

}

main();