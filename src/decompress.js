import zlib from 'zlib';
import fs from 'fs';
import path from 'path';

export const decompress = (filePath, dirPath) => {
  try {
    const fileExtension = path.extname(filePath);
    if (fileExtension !== '.br') {
      console.log('Operation failed');
      console.log('Path extension should be ".br"');
      return;
    }

    const decompressedFileName = path.basename(filePath, fileExtension);
    const decompressedFileNameDir = path.join(dirPath, decompressedFileName);
    const input = fs.createReadStream(filePath);

    input.on('error', (error) => {
      if (error) {
        console.log('Operation failed');
      }
    });

    const output = fs.createWriteStream(decompressedFileNameDir);
    output.on('error', (error) => {
      if (error) {
        console.log('Operation failed');
      }
    });

    input.pipe(zlib.createBrotliDecompress()).pipe(output);

    output.on('ready', () => {
      console.log('File was decompressed');
    });
  } catch (error) {
    console.log('Operation failed');
  }
};
