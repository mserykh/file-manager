import fs from 'fs';

export const read = (filePath) => {
  try {
    const readStream = fs.createReadStream(filePath);

    readStream.on('error', (error) => {
      if (error.code === 'ENOENT') {
        console.log('Invalid input');
        return;
      }
      console.log('Operation failed');
    });

    readStream.pipe(process.stdout);

    readStream.on('end', () => {
      console.log('\n');
    });
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('Invalid input');
      return;
    }
    console.log('Operation failed');
  }
};
