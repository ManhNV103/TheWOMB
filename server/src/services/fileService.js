import fs from 'fs';
import path from 'path';
import { STORAGE_DIR } from '../constants';

const uploadFile = (file, name, organization) => {
    file.mv(`${STORAGE_DIR}/${organization.id}/${name}`);
};

const deleteFile = (name, organization) => {
    const file = `${STORAGE_DIR}/${organization.id}/${name}`;

    try {
        fs.unlinkSync(file);
    } catch(e) {
        console.log(e.message);
    }
};

const deleteFolder = (organization) => {
    const dir = `${STORAGE_DIR}/${organization.id}`;

    try {
        fs.rmdir(dir);
    } catch(e) {
        console.log(e.message);
    }
};

export {
    uploadFile,
    deleteFile,
    deleteFolder
};