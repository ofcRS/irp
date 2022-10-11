import { open, writeFile } from 'node:fs/promises';

const babelPresets = [
  '@babel/preset-react',
  ['@babel/preset-env', {
  "targets": "> 0.25%, not dead",
  "useBuiltIns": "usage",
  "corejs": "3"
}]]

export const initBabel = async (isTs) => {
  console.log(`TypeScript was ${!isTs ? 'not ' : ''}added`)
  if (isTs) {
    babelPresets.unshift('@babel/preset-typescript');
  }
  await writeFile('babel.config.json', JSON.stringify({presets: babelPresets}, null, 2));
}