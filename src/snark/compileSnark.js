import process from 'process';
import path from 'path';
import os from 'node:os';
import {exec} from 'child_process';
import config from '../config';

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

/**
 * 
 * @param {String} circuit_name  regi or gen or accpt
 */
export const testSnark = (circuit_name) => {
    const LIBSNARK_SRC_DIR = config.LIBSNARK_PATH + '../libsnark-optimization/';
    const LIBSNARK_TEST_DIR = path.resolve(LIBSNARK_SRC_DIR, 'test');

    exec(`cd ${LIBSNARK_TEST_DIR}/ && ls && make ${circuit_name}`, (err, stdout, stderr) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(stdout);
        console.log(stderr);
        copyTestCRS(circuit_name)
    })
}

const copyTestCRS = (circuit_name) => {
    const LIBSNARK_SRC_DIR = config.LIBSNARK_PATH + '../libsnark-optimization/';
    const LIBSNARK_TEST_DIR = path.resolve(LIBSNARK_SRC_DIR, 'test');

    const crs = ['pk', 'vk', 'proof', ]

    crs.forEach((value, index, array)=>{
        const crsDir = value !='proof' ? 'zkverse_' + circuit_name + '_crs_' + value + '.json' : 'zkverse_' + circuit_name + '_' + value + '.json';
        exec(`cp ${LIBSNARK_TEST_DIR}/${crsDir} ${config.LIBSNARK_PATH}`, (err, stdout, stderr) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(stdout);
        })
    })
}
 
export default {
    compileSnark,
    copySnark,
    testSnark,
}
