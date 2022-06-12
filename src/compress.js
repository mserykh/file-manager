import zlib from 'zlib';
import fs from 'fs';
import path from 'path';

export const compress = (filePath, dirPath) => {
  try {
    const input = fs.createReadStream(filePath);

    input.on('error', (error) => {
      if (error) {
        console.log(error);
        console.log('Operation failed');
      }
    });

    const fileName = path.basename(filePath);
    const compressedFileName = fileName.concat('.br');
    const compressedFileNameDir = path.join(dirPath, compressedFileName);

    const output = fs.createWriteStream(compressedFileNameDir);
    output.on('error', (error) => {
      if (error) {
        console.log(error);
        console.log('Operation failed');
      }
    });

    input.pipe(zlib.createBrotliCompress()).pipe(output);

    output.on('ready', () => {
      console.log('File was compressed');
    });
  } catch (error) {
    console.log(error);
    console.log('Operation failed');
  }
};
