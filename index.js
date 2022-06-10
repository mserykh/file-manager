import readline from 'readline';
import os from 'os';

import { greetUser } from './src/greetUser.js';
import { getUsername } from './src/getUsername.js';
import { farewellUser } from './src/farewellUser.js';
import { serCurrentDir } from './src/utils.js'

const username = getUsername();
const userHomeDir = os.homedir();

const init = () => {
  greetUser(username);
  try {
    process.chdir(userHomeDir);
    console.log(`You are currently in ${serCurrentDir()}`);
  } catch (err) {
    console.log('Operation failed');
  }
};

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine.on('line', (input) => {
  switch (input) {
    case '.exit':
      readLine.close();
      break;
    default:
      console.log('Invalid input');
  }
});

readLine.on('SIGINT', () => {
  readLine.close();
});

readLine.on('close', () => {
  farewellUser(username);
});

init();
