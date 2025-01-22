const {select, input} = require ('@inquirer/prompts');
require('colors');


    const inquirerMenu = async () => {

        console.clear();
        console.log('========================='.green);
        console.log('  Seleccione una opción'.green);
        console.log('========================='.green);
        
        const preguntas = await select ({
            message: '¿Que desea hacer?',
            choices: [
                {name: `${'1.'.green} Crear Tarea`, value: 1},
                {name: `${'2.'.green} Listar Tareas`, value: 2},
                {name: `${'3.'.green} Listar Tareas completadas`, value: 3},
                {name: `${'4.'.green} Listar Tareas pendiente`, value: 4},
                {name: `${'5.'.green} Completar Tarea(s)`, value: 5},
                {name: `${'6.'.green} Borrar Tarea`, value: 6},
                {name: `${'0.'.green} Salir`, value: 0},
            ]
        }); 

        return preguntas;

    };
    
    const pausa = async () => {
        
        await input({ message: `Presione ${'ENTER'.green} para continuar` });
    }

    const pregunta = async (message = '') => {

        const respuesta = await input({message, required: true});
        return respuesta;
    }

    
    module.exports = {
        inquirerMenu,
        pausa,
        pregunta,
    }