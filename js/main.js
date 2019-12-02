const fodase = 'fodase';
console.log(fodase);

class oloko{
    constructor(olokinho){
        this.olokinho = olokinho;
    }
    getOlokinho(){
        return this.olokinho;
    }
}

ol = new oloko("OLOKINHO MEU");
console.log(ol.getOlokinho());