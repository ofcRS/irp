import path from 'path';
import { fileURLToPath } from 'url'
import { cp } from 'node:fs/promises';

export const initWebpack = async () => {
  await cp(path.resolve(fileURLToPath(import.meta.url), '..', 'webpack'), path.resolve('webpack'), { recursive: true })
}
