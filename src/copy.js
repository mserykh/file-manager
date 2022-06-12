import path from 'path';
import fs from 'fs';

export const copy = (filePath, pathNewDir) => {
  try {
    const fileExtension = path.extname(filePath);
    if (!fileExtension) {
      console.log('Operation failed');
      console.log('You can copy only files, not directories');
      return;
    }

    const fileName = path.basename(filePath);
    const fileNewPath = path.resolve(pathNewDir, fileName);

    const readStream = fs.createReadStream(filePath);

    readStream.on('error', (error) => {
      console.log(error);
      console.log('Operation failed');
      return
    })

    const writeStream = fs.createWriteStream(fileNewPath);

    writeStream.on('error', () => {
      console.log('Operation failed');
      return;
    })

    readStream.pipe(writeStream);

    writeStream.on('ready', () => {
      console.log(`${fileName} has been copied to ${pathNewDir}` )
    })
  } catch (error) {
    console.log('Operation failed');
  }
};
