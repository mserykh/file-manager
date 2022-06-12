import readline from 'readline';

import { greetUser } from './src/greetUser.js';
import { getUsername } from './src/getUsername.js';
import { farewellUser } from './src/farewellUser.js';
import { getHomeDir, parseInput, printCurrentDir } from './src/utils.js';
import { goUp } from './src/goUp.js';
import { goTo } from './src/goTo.js';
import { list } from './src/list.js';
import { printOsInfo } from './src/printOsInfo.js';
import { read } from './src/read.js';
import { create } from './src/create.js';
import { rename } from './src/rename.js';
import { copy } from './src/copy.js';
import { move } from './src/move.js';
import { remove } from './src/remove.js';

const username = getUsername();

const init = () => {
  greetUser(username);
  try {
    process.chdir(getHomeDir());
    printCurrentDir();
  } catch (error) {
    console.log('Operation failed');
  }
};

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine.on('line', (input) => {
  try {
    const [command, arg1, arg2] = parseInput(input);

    switch (command) {
      case '.exit':
        readLine.close();
        break;
      case 'up':
        goUp();
        break;
      case 'cd':
        goTo(arg1);
        break;
      case 'ls':
        list();
        break;
      case 'cat':
        read(arg1);
        break;
      case 'add':
        create(arg1, arg2);
        break;
      case 'rn':
        rename(arg1, arg2);
        break;
      case 'cp':
        copy(arg1, arg2);
        break;
      case 'mv':
        move(arg1, arg2);
        break;
      case 'rm':
        remove(arg1, arg2);
        break;
      case 'os':
        printOsInfo(arg1);
        break;
      default:
        console.log('Invalid input');
    }
  } catch (error) {
    console.log(error);
    console.log('Operation failed');
  }
});

readLine.on('SIGINT', () => {
  readLine.close();
});

readLine.on('close', () => {
  farewellUser(username);
});

init();
