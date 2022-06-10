import readline from 'readline';

import { greetUser } from './src/greetUser.js';
import { getUsername } from './src/getUsername.js';
import { farewellUser } from './src/farewellUser.js';

const username = getUsername();

const init = () => {
  greetUser(username);
};

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine.on('SIGINT', () => {
  readLine.close();
});

readLine.on('close', () => {
  farewellUser(username);
});

init();
