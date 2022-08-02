import path from 'path';

import { getHomeDir, printCurrentDir } from './utils.js';

export const goTo = (pathDir) => {
  try {
    if (
      pathDir.toLowerCase() === path.dirname(getHomeDir()).toLowerCase() ||
      pathDir.toLowerCase() === path.dirname(path.dirname(getHomeDir())).toLowerCase()
    ) {
      printCurrentDir();
      return;
    }
    process.chdir(pathDir);
    printCurrentDir();
  } catch (error) {
    console.log(error);
    console.log('Operation failed');
  }
};
