const {readFile} = require('fs')

console.log('Start the first task');

readFile('./content/first.txt', 'utf-8', (err, result)=> {
    if(err) {
        console.log(err);
        return
    }
    console.log(result);
    console.log('complete first task');
})
console.log('starting next task!');