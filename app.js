require ('colors');
const {inquirerMenu} = require('./helpers/inquirer');


const main = async () => {

let opt = 0;
   
   do{
    
    opt = await inquirerMenu();

   } while (opt != 0);

}

main();