const { v4: uuidv4 } = require('uuid'); // Se nombra v4 al uuidv4 que se importa

class Task {

    id = '';
    desc = '';
    completadoEn = null;

    constructor(desc) {

        this.id = uuidv4();
        this.desc = desc;
        this.completadoEn = null;
    }


};

module.exports = Task;