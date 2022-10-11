import termKit from 'terminal-kit';
import path from 'path';
import { initBabel } from './initBabel.mjs';
import { initWebpack } from './initWebpack.mjs';

const terminal = termKit.terminal;

terminal.blue('Add TypeScript? [y/n]\n');
terminal.yesOrNo({ yes: ['y'], no: ['n'] }, async (error, result) => {
  await initBabel(result);
  await initWebpack();
  process.exit();
});