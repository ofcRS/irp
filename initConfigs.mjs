import termKit from 'terminal-kit';
import { initBabel } from './initBabel.mjs';
import { initWebpack } from './initWebpack.mjs';
import { initPackageJSON } from './initPackageJSON.mjs';
import { initSrc } from './initSrc.mjs';

const terminal = termKit.terminal;

terminal.blue('Add TypeScript? [y/n]\n');
terminal.yesOrNo({ yes: ['y'], no: ['n'] }, async (error, result) => {
  await initPackageJSON();
  await initBabel(result);
  await initWebpack();
  await initSrc();
  process.exit();
});