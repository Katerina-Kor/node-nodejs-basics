import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
  try {
    await fs.unlink(filePath);
  } catch (err) {
    throw Error('FS operation failed');
  }
};

await remove();