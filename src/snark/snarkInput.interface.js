
export const isHex = (str) => {
    return /^[0-9a-fA-F]+$/.test(str);
}

class snarkInputClass{
    #circuit_type;
    #key;
    
    /**
     * 
     * @param {*} circuit_type 
     */
    constructor(circuit_type, key=''){
        this.#circuit_type = circuit_type;
        this.#key = key;
        this.input = {};
    }

    add(key, value){
        this.input[key] = value;
    }

    getCircuitType(){
        return this.#circuit_type;
    }

    check(){
        // TODO : check INPUT is valid
        Object.keys(this.input).forEach((key, index, array)=>{
            console.log(this.input[key], typeof this.input[key])
            if (typeof this.input[key] == 'object' || typeof this.input[key] == 'array'){
                this.input[key].forEach((value, index, array)=>{
                    if(!isHex(value)){
                        throw new Error("INPUT is not Hex");
                    }
                })
            }
            else if(!isHex(this.input[key])){
                throw new Error("INPUT is not Hex");
            }
        })
    }

    prove(){
        throw new Error("override prove() method");
    }

    toJSON(){
        return JSON.stringify(this.input);
    }
}

export default snarkInputClass;