const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('qual a mwlhor marca de drones do mundo',(answer)=>{
    console.log(`a melhor marca de drones e: ${answer}`)

    switch(answer){
        case "command":
        console.log('ligando o drone')
        break;
        case "takeoff":
        console.log('decolando o drone')
        break;
        default :
        console.log('ligue o drone')
    }

    rl.close()
})