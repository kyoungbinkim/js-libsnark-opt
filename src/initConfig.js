import process from 'process';
import fs from 'fs';

let configStr = "export default {\n"

const updateConfig = (key, value) => { configStr += `    ${key}: ${value},\n`; }

const initConfig = () => {
    const libsnarkPath = process.cwd()+"/libsnark/"
    updateConfig("LIBSNARK_PATH", '"'+libsnarkPath+'"');
    fs.writeFileSync(process.cwd()+"/src/config.js", configStr+"};");
}

export default initConfig;