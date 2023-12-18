import process from 'process';
import path from 'path';
import os from 'node:os';
import {exec} from 'child_process';
import config from './config';

export const compileSnark = () => {
    exec('cd ./libsnark-optimization && make release=yes', (err, stdout, stderr) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(stdout);
        copySnark();
    });
}

export const copySnark = () => {
    const LIBSNARK_SRC_DIR = config.LIBSNARK_PATH + '../libsnark-optimization/';
    const LIBSNARK_DST_DIR = path.resolve(LIBSNARK_SRC_DIR, 'lib', os.platform()+'_release', 'lib');

    console.log(LIBSNARK_DST_DIR)
    exec(`cp ${LIBSNARK_DST_DIR}/libSnark.dylib ${config.LIBSNARK_PATH}`, (err, stdout, stderr) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(stdout);
    })
}
 
export default {
    compileSnark,
    copySnark,
}
