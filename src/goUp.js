import path from 'path';

import { getCurrentDir, getHomeDir, printCurrentDir } from './utils.js';

export const goUp = () => {
  const currentDir = getCurrentDir();
  const goUpPath = path.dirname(currentDir);
  if (
    currentDir.toLowerCase() === getHomeDir().toLowerCase() ||
    goUpPath.toLowerCase() === path.dirname(getHomeDir()).toLowerCase()
  ) {
    printCurrentDir();
    return;
  }
  process.chdir(goUpPath);
  printCurrentDir();
};
