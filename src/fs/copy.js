import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDirPath = path.join(__dirname, 'files');
const destDirPath = path.join(__dirname, 'files_copy');

const copy = async () => {
  try {
    await fs.cp(srcDirPath, destDirPath, {
      recursive: true,
      errorOnExist: true,
      force: false
    });
  } catch (err) {
    throw Error('FS operation failed');
  }
};

await copy();