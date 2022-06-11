import os from 'os';

const parseInput = (input) => {
  try {
    const regex =
      /^(?<command>[.a-z]+)(?<arg1Raw> ((--[a-zA-Z]+)|("([^"]+)")|([^ ]+)))?(?<arg2Raw> (("([^"]+)")|([^ ]+)))?$/;
    const matches = input.match(regex);
    const { command, arg1Raw, arg2Raw } = matches.groups;

    const arg1Match = arg1Raw ? arg1Raw.trim().match(/("(.+)")|(.+)/): '';
    const arg1 = arg1Match[2] || arg1Match[3] || '';

    const arg2Match = arg2Raw ? arg2Raw.trim().match(/("(.+)")|(.+)/) : '';
    const arg2 = arg2Match[2] || arg2Match[3] || '';

    const result = [command, arg1, arg2];

    return result;
  } catch (error) {
    console.log(error);
    console.log('Operation failed');
  }
};

const getCurrentDir = () => {
  return process.cwd();
};

const getHomeDir = () => os.homedir();

const printCurrentDir = () => console.log(`You are currently in ${getCurrentDir()}`);

export { parseInput, getCurrentDir, getHomeDir, printCurrentDir };
