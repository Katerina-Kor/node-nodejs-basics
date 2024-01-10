import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDirPath = path.join(__dirname, 'files');

const list = async () => {
  try {
    const fileNames = await fs.readdir(srcDirPath);
    fileNames.forEach((fileName) => console.log(fileName))
  } catch (err) {
    throw Error('FS operation failed');
  }
};

await list();