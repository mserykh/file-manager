import fs from 'fs';
import path from 'path';

export const rename = (filePath, fileNewName) => {
  try {
    const fileNewPath = path.resolve(path.dirname(filePath), fileNewName);

    fs.rename(filePath, fileNewPath, (error) => {
      if (error) {
        console.log('Operation failed');
        return;
      }
    });
  } catch (error) {
    console.log('Operation failed');
  }
};
