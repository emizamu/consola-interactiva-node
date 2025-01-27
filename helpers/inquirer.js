const {select, input, confirm, checkbox} = require ('@inquirer/prompts');
require('colors');


    const inquirerMenu = async () => {

        console.clear();
        console.log('========================='.green);
        console.log('  Seleccione una opción'.green);
        console.log('========================='.green);
        
        const questions = await select ({
            message: '¿Que desea hacer?',
            choices: [
                {name: `${'1.'.green} Crear Tarea`, value: 1},
                {name: `${'2.'.green} Listar Tareas`, value: 2},
                {name: `${'3.'.green} Listar Tareas Completadas`, value: 3},
                {name: `${'4.'.green} Listar Tareas Pendientes`, value: 4},
                {name: `${'5.'.green} Completar Tarea(s)`, value: 5},
                {name: `${'6.'.green} Borrar Tarea`, value: 6},
                {name: `${'0.'.green} Salir`, value: 0},
            ]
        }); 

        return questions;

    };
    
    const pause = async () => {
        
        await input({ message: `Presione ${'ENTER'.green} para continuar` });
    }

    const question = async (message = '') => {

        const answer = await input({message, required: true});
        return answer;
    }

    const deleteTasksView = async (tasks = [] ) => {
        
        const choices = tasks.map ((task, i) => {
            const indx = `${i + 1}. `.green;

            return {
                value: task.id,
                name: `${indx} ${task.desc}`
            }
        });

        choices.unshift({ // Agrega una opcion al principio
            value: 0,
            name: `0. `.green + `Cancelar`
        })

        const questions = await select (
            {   
                message: 'Borrar',
                choices
            }
        );

        return questions;

    }

    const messageConfirm = async (message) => {
        const answer = await confirm({ message });
        return answer;
    }

    const changeTasksStatusView = async (tasks = [] ) => {
        
        const choices = tasks.map ((task, i) => {
            const indx = `${i + 1}. `.green;

            return {
                value: task.id,
                name: `${indx} ${task.desc}`,
                checked: (task.completadoEn) ? true : false, // Muestra check las tareas completadas
            }
        });

        const questions = await checkbox (
            {   
                message: 'Select',
                choices
            }
        ); 

        return questions;

    }
    
    module.exports = {
        inquirerMenu,
        pause,
        question,
        deleteTasksView,
        messageConfirm,
        changeTasksStatusView
    }