const Task = require('./Task')

class Tasks {

    _listado = {}; // _ para indicar que es privada, se trabaja como un objeto. Base de Datos no relacional

    constructor (){
        this._listado = {};
    }
    
    createTask(desc){
        const tarea = new Task(desc); // Crea tarea con id unico
        this._listado[tarea.id] = tarea; // Se pasa tarea.id como referencia para guardarlo en el listado
    }

    deleteTask(id = ''){
        if(this._listado[id]){
            delete this._listado[id];
        }
    }

    get listadoArray(){
        let listado = [];
        Object.keys(this._listado).forEach(keys => { //* Metodo de JS donde se pueden traer las keys de este objeto
            listado.push(this._listado[keys]);
        })

        return listado;
    }

    updateTasks( tasks = []) {
        tasks.forEach( task => {
            this._listado[task.id] = task;
        })
    }

    completeList () {

        console.log(); // Simplemente salto de linea
        this.listadoArray.forEach((task, i) => {
            const {desc,completadoEn} = task;
            const indx = `${i + 1}`.green;
            const status = (completadoEn) ? `Completado`.green : `Pendiente`.red;
            console.log(`${indx}. ${desc} :: ${status}`);
        })
        return null;
    }

    completedTasksList ( completed = true) {
        console.log(); // Simplemente salto de linea
        let count = 1; 
        this.listadoArray.forEach( task => {
            const {desc,completadoEn} = task;
            const indx = `${count}`.green;
            const status = (completadoEn) ? `Completado`.green : `Pendiente`.red;
            if(completed && completadoEn){
            console.log(`${indx}. ${desc} :: ${completadoEn}`);
            }
            else if (!completed && !completadoEn){
            console.log(`${indx}. ${desc} :: ${status}`); 
            }
            count++;
        })
        return null;
    }

}


module.exports = Tasks;