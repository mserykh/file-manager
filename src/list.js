import fs from 'fs';

import { getCurrentDir } from './utils.js';

export const list = async () => {
  try {
    fs.readdir(getCurrentDir(), (error, files) => {
      if (!error) {
        for (let file of files) {
          console.log(file);
        }
      }
    });
  } catch (error) {
    console.log(error);
    console.log('Operation failed');
  }
};
