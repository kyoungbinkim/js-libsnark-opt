
class snarkInputClass{
    /**
     * 
     * @param {*} circuit_type 
     */
    constructor(circuit_type){
        this.circuit_type = circuit_type;
        this.input = {};
    }

    add(key, value){
        this.input[key] = value;
    }

    check(){
        // TODO : check INPUT is valid
    }

    prove(key=undefined){
        // TODO : make SNARK Proof
    }

    toJSON(){
        return JSON.stringify(this.input);
    }
}

export default snarkInputClass;