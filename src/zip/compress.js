import fs from 'fs';
import path from 'path';
import { createGzip } from 'zlib';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcFilePath = path.join(__dirname, 'files', 'fileToCompress.txt');
const destFilePath = path.join(__dirname, 'files', 'archive.gz');

const compress = async () => {
  try {
    const readStream = fs.createReadStream(srcFilePath, {
      encoding: 'utf8'
    });
    const writeStream = fs.createWriteStream(destFilePath);
    const gzip = createGzip();

    readStream.pipe(gzip).pipe(writeStream);

  } catch (err) {
    throw Error('FS operation failed');
  }
};

await compress();