import fs from 'fs';
import path from 'path';
import process from 'process';
import initConfig from './initConfig';
import config from './config';
import { compileSnark, copySnark, testSnark } from './snark/compileSnark';

if(process.argv.length < 3){
    console.log("INVALID ARGUMENTS")
    process.exit(1);
}

switch(process.argv[2]){
    case "init":
        initConfig();
        break;

    case "compile":
        compileSnark();
        break;
    
    case "copy":
        copySnark();
        break;
    
    case "snark":
        if(process.argv.length < 4){
            testSnark("regi");
            testSnark("gen");
            testSnark("accpt");
            process.exit(1);
        }
        testSnark(process.argv[3]);
        break;
    
    case "clean":
        fs.readdirSync(config.LIBSNARK_PATH).forEach(f => {
            if (path.extname(f) == ".json"){
                fs.unlink(config.LIBSNARK_PATH + f, (err) => {if (err) console.log(err)})
            }
        })
        break;
}