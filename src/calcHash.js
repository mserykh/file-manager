import fs from 'fs';
import crypto from 'crypto';
import { stdout } from 'process';

export const calcHash = (filePath) => {
  try {
    const hash = crypto.createHash('sha256');

    const data = fs.createReadStream(filePath);

    data.on('error', (error) => {
      console.log('Operation failed');
    });

    data.pipe(hash).setEncoding('hex').pipe(stdout);

    data.on('close', () => console.log('\n'));
  } catch (error) {
    console.log('Operation failed');
  }
};
