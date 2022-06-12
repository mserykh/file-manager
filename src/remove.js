import path, { isAbsolute } from 'path';
import fs from 'fs';

export const remove = (filePath) => {
  try {
    const fileExtension = path.extname(filePath);
    if (!fileExtension) {
      console.log('Operation failed');
      console.log('You can delete only files, not directories');
      return;
    }

    const fileName = path.basename(filePath);

    fs.unlink(filePath, (error) => {
      if (error) {
        console.log(error);
        console.log('Operation failed');
        return;
      }
      console.log(`${fileName} has been deleted`);
    });
  } catch (error) {
    console.log(error);
    console.log('Operation failed');
  }
};
