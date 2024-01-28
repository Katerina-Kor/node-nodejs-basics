import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'files', 'wrongFilename.txt');
const newFilePath = path.join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
  try {
    await fs.copyFile(filePath, newFilePath, fs.constants.COPYFILE_EXCL);
    await fs.unlink(filePath);  
  } catch (err) {
    throw Error('FS operation failed');
  }
};

await rename();