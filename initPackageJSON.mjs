import { open, writeFile } from 'node:fs/promises';

export const initPackageJSON = async () => {
  let packageJSONFile;

  try {
    packageJSONFile = await open('package.json');
    const { buffer, bytesRead } = await packageJSONFile.read();

    const packageJSON = JSON.parse(buffer.toString('utf8', 0, bytesRead));
    packageJSON.sideEffects = false;
    packageJSON.scripts = {
      build: 'webpack --config ./webpack/webpack.prod.js',
      dev: 'webpack serve --open --config ./webpack/webpack.dev.js'
    }

    await writeFile('package.json', JSON.stringify(packageJSON, null, 2));
  } catch (error) {
    console.log(error);
  } finally {
    await packageJSONFile?.close();
  }
}