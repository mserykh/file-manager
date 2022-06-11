import path from 'path';

import { getHomeDir, printCurrentDir } from './utils.js';

export const goTo = (pathDir) => {
  try {
    if (pathDir === path.dirname(getHomeDir())) {
      printCurrentDir();
      return;
    };
    process.chdir(pathDir);
    printCurrentDir();
  } catch (error) {
    console.log(error);
    console.log('Operation failed');
  }
};
