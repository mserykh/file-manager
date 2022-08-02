import fs from 'fs';
import path from 'path';

import { getCurrentDir } from './utils.js';

export const create = async (filePath, args) => {
  try {
    if (!filePath) {
      console.log('Invalid input');
      console.log('Please provide a file name');
      return;
    }

    if (args) {
      console.log('Invalid input');
      console.log('Please provide a file name with a space in "", eg. add "new file.txt"');
      return;
    }

    await fs.promises.access(path.resolve(getCurrentDir(), filePath), fs.constants.F_OK);

    console.log('Operation failed');
    console.log(`${filePath} already exists`);
  } catch (error) {
    const writeStream = fs.createWriteStream(filePath);

    writeStream.on('error', (error) => {
      if (error.code === 'ENOENT') {
        console.log('Operation failed');
        return;
      }
      console.log('Operation failed');
    });

    writeStream.on('ready', () => {
      console.log(`File ${filePath} has been created`);
    });
  }
};
