import path from 'path'
import { fileURLToPath } from 'url'
import { cp } from 'node:fs/promises'

export const initSrc = async () => {
  const filePath = fileURLToPath(import.meta.url);
  await cp(path.resolve(filePath, '..', 'src'), path.resolve('src'), { recursive: true })
  await cp(path.resolve(filePath, '..', 'public'), path.resolve('public'), { recursive: true })
}