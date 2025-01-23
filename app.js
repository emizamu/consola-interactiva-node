require ('colors');
const {inquirerMenu, pause, question, deleteTasksView,messageConfirm} = require('./helpers/inquirer');
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
        tareas.createTask(desc);
        break;
      case 2:
        tareas.completeList();
         break;
      case 3:
        tareas.completedTasksList(true);
          break;
      case 4:
        tareas.completedTasksList(false);
        break;
      case 5:
        break;
      case 6:
          console.log();
          const toDelete = await deleteTasksView(tareas.listadoArray);
          if (toDelete != 0) {
            const ok = await messageConfirm('¿Está seguro?');
            if (ok){
              tareas.deleteTask(toDelete);
              console.log('Tarea borrada'.green);
            }
          };
        break;
    }
    saveDB(tareas.listadoArray);

    if(opt != 0){
      console.log('\n')
      await pause();
    }

   } while (opt != 0);

}

main();