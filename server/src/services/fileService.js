import fs from 'fs';
import path from 'path';
import { STORAGE_DIR } from '../constants';

const uploadFile = (file, name, organization) => {
    file.mv(`${STORAGE_DIR}/${organization.id}/${name}`);
};

const deleteFile = () => {

};

export {
    uploadFile
};