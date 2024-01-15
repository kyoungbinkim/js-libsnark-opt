import config from '../config';
import path from 'path';
import fs from 'fs';

export default class SnarkProofClass{
    #circuit_type;
    #key;

    constructor(_circuit_type, _key){
        this.#circuit_type = _circuit_type;
        this.#key = _key;
        this.proof = undefined;
    }

    toJson(){
        if(this.proof === undefined){
            throw new Error("proof is undefined");
        }
        return JSON.stringify(this.proof, null, 2);
    }

    /**
     * 
     * @param {string} path : directory path
     * @param {*} key : key of proof
     */
    writeProof(_path=config.LIBSNARK_PATH, _key=this.#key){
        try{
            const filepath = path.join(_path, this.#circuit_type+_key+'_proof.json');
            fs.writeFileSync(filepath, this.toJson());
        }
        catch(e){
            console.error(" ERROR while write proof ")
            console.error(e);
        }
        
    }
}