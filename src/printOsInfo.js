import os from 'os';

import { getHomeDir } from './utils.js';

const getEol = () => {
  return JSON.stringify(os.EOL);
};

const getCPUInfo = () => {
  const cpusInfo = os.cpus();
  const cpusCount = cpusInfo.length;

  const cpusTable = [];
  cpusInfo.forEach((el) => {
    cpusTable.push({
      Model: el.model,
      'Clock rate (GHz)': Number(Number.parseFloat(el.speed / 1000).toFixed(2)),
    });
  });

  console.log(`Overall amount of CPUs: ${cpusCount}`);
  console.table(cpusTable);
};

const getSystemUsername = () => {
  return os.userInfo().username;
};

const getCpuArchitecture = () => {
  return os.arch();
};

export const printOsInfo = (arg) => {
  try {
    switch (arg) {
      case '--EOL':
        console.log(`Default system End-Of-Line: ${getEol()}`);
        break;
      case '--cpus':
        getCPUInfo();
        break;
      case '--homedir':
        console.log(`Home directory: ${getHomeDir()}`);
        break;
      case '--username':
        console.log(`System username: ${getSystemUsername()}`);
        break;
      case '--architecture':
        console.log(`CPU architecture: ${getCpuArchitecture()}`);
        break;
      default:
        console.log('Invalid input');
    }
  } catch (error) {
    console.log('Operation failed');
  }
};
