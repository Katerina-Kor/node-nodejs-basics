import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fresh.txt');
const fileContent = 'I am fresh and young';

const create = async () => {
  try {
    await fs.appendFile(
      filePath,
      fileContent,
      { flag: 'wx' }
    );
  } catch (err) {
    throw Error('FS operation failed');
  }
};

await create();