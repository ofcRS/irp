import { open, writeFile } from 'node:fs/promises';

let packageJSONFile;
let newFile;

try {
  packageJSONFile = await open('package.json');
  const { buffer, bytesRead } = await packageJSONFile.read();

  const packageJSON = JSON.parse(buffer.toString('utf8', 0, bytesRead));
  packageJSON.type = 'midile';

  writeFile('package.json', JSON.stringify(packageJSON, null, 2));
} catch (error) {
  console.log(error);
} finally {
  await packageJSONFile?.close();
  await newFile?.close();
}