import process from 'process';
import initConfig from './initConfig';
import { compileSnark, copySnark } from './compileSnark';

if(process.argv.length < 3){
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
}