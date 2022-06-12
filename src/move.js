import path, { isAbsolute } from 'path';
import fs from 'fs';

export const move = (filePath, pathNewDir) => {
  try {
    const fileExtension = path.extname(filePath);
    if (!fileExtension) {
      console.log('Operation failed');
      console.log('You can move only files, not directories');
      return;
    }

    const fileDir = isAbsolute(filePath) ? path.dirname(filePath) : path.dirname(path.resolve(filePath));
    const pathNewDirCheck = isAbsolute(pathNewDir) ? pathNewDir : path.resolve(pathNewDir);

    if (pathNewDirCheck === fileDir) {
      console.log('You tried to move file to the same directory');
      return;
    }

    const fileName = path.basename(filePath);
    const fileNewPath = path.resolve(pathNewDir, fileName);

    const readStream = fs.createReadStream(filePath);

    readStream.on('error', (error) => {
      console.log(error);
      console.log('Operation failed');
      return;
    });

    const writeStream = fs.createWriteStream(fileNewPath);

    writeStream.on('error', () => {
      console.log('Operation failed');
      return;
    });

    readStream.pipe(writeStream);

    writeStream.on('ready', () => {
      console.log(`${fileName} has been moved to ${pathNewDir}`);
      fs.unlink(filePath, (error) => {
        if (error) {
          console.log('Operation failed');
          return;
        }
      });
    });
  } catch (error) {
    console.log('Operation failed');
  }
};
