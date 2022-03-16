const information = require("./information");

let cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello I'm ${information.studentName} from ${information.campus} Campus`,
    e : "oO",
    T : "U "
}));
