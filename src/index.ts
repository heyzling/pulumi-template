import { glob, globSync, globStream, globStreamSync, Glob } from 'glob'

// ==== AUTO IMPORT ALL MODULES FROM PROJECT ====
// to avoid manual import of each module specifically
// source: https://stackoverflow.com/a/69132028/8356505
// FIX __dirname is not exist in 'module' scope
// https://stackoverflow.com/questions/64383909/dirname-is-not-defined-error-in-node-14-version
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const allModules = globSync(__dirname + '/**/*.ts')
for (const module of allModules) {
  const moduleName = module.replace(__dirname, '.').replace('.ts', '')
  import(moduleName)
}