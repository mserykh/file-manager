import os from 'os';

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

export const printOsInfo = (arg) => {
  try {
    switch (arg) {
      case '--EOL':
        console.log('Invalid input');
        break;
      case '--cpus':
        getCPUInfo();
        break;
      case '--homedir':
        console.log('Invalid input');
        break;
      case '--username':
        console.log('Invalid input');
        break;
      case '--architecture':
        console.log('Invalid input');
        break;
      default:
        console.log('Invalid input');
    }
  } catch (error) {}
};
