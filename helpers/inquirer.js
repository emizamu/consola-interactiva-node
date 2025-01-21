const {select} = require ('@inquirer/prompts');


    const inquirerMenu = async () => {

        console.clear();
        console.log('========================='.green);
        console.log('  Seleccione una opción'.green);
        console.log('========================='.green);
        
        const preguntas = await select ({
            message: '¿Que desea hacer?',
            choices: [
                {name: '1. Crear Tarea', value: 1},
                {name: '2. Listar Tareas', value: 2},
                {name: '3. Listar Tareas completadas', value: 3},
                {name: '4. Listar Tareas pendiente', value: 4},
                {name: '5. Completar Tarea(s)', value: 5},
                {name: '6. Borrar Tarea', value: 6},
                {name: '0. Salir', value: 0},
            ]
        }); 

        return preguntas;

    };

    module.exports = {
        inquirerMenu
    }