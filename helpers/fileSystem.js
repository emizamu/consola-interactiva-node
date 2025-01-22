const fs = require('fs'); // Se utiliza para crear archivos, simulo la DB

const path = './DB/data.json';

const saveDB = (data) => {
    fs.writeFileSync(path, JSON.stringify(data)); // convierte el objeto a string, sino no podria guardarse
} 

const readDB = () => {

    if(!fs.existsSync(path)){
        return null;
    }
    else{ 
        const data = fs.readFileSync(path, {encoding: 'utf-8'}); // encoding para que no devuelva los bytes
        const info = JSON.parse(data); //la info guardada como string pasa a objeto nuevamente al leer
        return info; 
    }
}

module.exports = {
    saveDB,
    readDB
}