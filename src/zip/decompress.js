import fs, { write } from 'fs';
import path from 'path';
import { createUnzip } from 'zlib';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const destFilePath = path.join(__dirname, 'files', 'fileToCompress.txt');
const srcFilePath = path.join(__dirname, 'files', 'archive.gz');

const decompress = async () => {
  try {
    const readStream = fs.createReadStream(srcFilePath);
    const writeStream = fs.createWriteStream(destFilePath);
    const unzip = createUnzip()

    readStream.pipe(unzip).pipe(writeStream);

  } catch (err) {
    throw Error('FS operation failed');
  }
};

await decompress();