import path from 'path';

import { getCurrentDir, getHomeDir, printCurrentDir } from './utils.js';

export const goUp = () => {
  const currentDir = getCurrentDir();
  const goUpPath = path.dirname(currentDir);
  if (currentDir === getHomeDir() || goUpPath === path.dirname(getHomeDir())) {
    printCurrentDir();
    return;
  };
  process.chdir(goUpPath);
  printCurrentDir();
};
