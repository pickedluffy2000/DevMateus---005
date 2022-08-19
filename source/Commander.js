class Commander {

    constructor(socket, host, port){
        this.socket = socket,
        this.host = host,
        this.port = port
    }
    //ligar o drone
    sendInitCommand(){

        return new Promise((s, f)=>{
            this.socket.send('command', 0, 'command'.length, this.port, this.host, (err)=>{
                if(err){
                    return f(err)
                } else{
                    return s()
                }
            })
        })

    }
    //decolar o drone
    sendTakeOff(){

        return new Promise((s, f)=>{
            this.socket.send('takeoff', 0, 'takeoff'.length, this.port, this.host, (err)=>{
                if(err){
                    return f(err)
                } else{
                    return s()
                }
            })
        })

    }
    //pousar o drone
    sendLand(){

        return new Promise((s, f)=>{
            this.socket.send('land', 0, 'land'.length, this.port, this.host, (err)=>{
                if(err){
                    return f(err)
                } else{
                    return s()
                }
            })
        })

    }

    //comando para ir para frente
    sendForward(distance=20){

        return new Promise((s, f)=>{
            this.socket.send(`forward ${distance}`, 0,`forward ${distance}`.length, this.port, this.host, (err)=>{
                if(err){
                    return f(err)
                } else{
                    return s()
                }
            })
        })

    }

    //comando para ir para tras
    sendBack(distance=20){

        return new Promise((s, f)=>{
            this.socket.send(`back ${distance}`, 0,`back ${distance}`.length, this.port, this.host, (err)=>{
                if(err){
                    return f(err)
                } else{
                    return s()
                }
            })
        })

    }
    //comando para ir para a direita
    sendRight(distance=20){

        return new Promise((s, f)=>{
            this.socket.send(`right ${distance}`, 0,`right ${distance}`.length, this.port, this.host, (err)=>{
                if(err){
                    return f(err)
                } else{
                    return s()
                }
            })
        })

    }
    //comando para ir para a esquerda
    sendLeft(distance=20){

        return new Promise((s, f)=>{
            this.socket.send(`left ${distance}`, 0,`left ${distance}`.length, this.port, this.host, (err)=>{
                if(err){
                    return f(err)
                } else{
                    return s()
                }
            })
        })
    }
    sendCw(distance=20){

        return new Promise((s, f)=>{
            this.socket.send(`cw ${distance}`, 0,`cw ${distance}`.length, this.port, this.host, (err)=>{
                if(err){
                    return f(err)
                } else{
                    return s()
                }
            })
        })
    }
    sendCcw(distance=20){

        return new Promise((s, f)=>{
            this.socket.send(`ccw ${distance}`, 0,`ccw ${distance}`.length, this.port, this.host, (err)=>{
                if(err){
                    return f(err)
                } else{
                    return s()
                }
            })
        })
    }
    //comando para ir para a esquerda
    sendFlip(){

        return new Promise((s, f)=>{
            this.socket.send(`flip b`, 0,`flip b`.length, this.port, this.host, (err)=>{
                if(err){
                    return f(err)
                } else{
                    return s()
                }
            })
        })

    }
    //comando para ir para a esquerda
    getBattery(distance=20){

        return new Promise((s, f)=>{
            this.socket.send(`battery?`, 0,`battery?`.length, this.port, this.host, (err)=>{
                if(err){
                    return f(err)
                } else{
                    return s()
                }
            })
        })

    }

}

module.exports = Commander