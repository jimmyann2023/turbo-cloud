import type { Linter } from 'eslint';

import { ignores, javascript, prettier, typescript, vue } from './configs';

type FlatConfig = Linter.Config;

type FlatConfigPromise =
  | FlatConfig
  | FlatConfig[]
  | Promise<FlatConfig>
  | Promise<FlatConfig[]>;

async function defineConfig(config: FlatConfig[] = []) {
  const configs: FlatConfigPromise[] = [
    vue(),
    ignores(),
    prettier(),
    typescript(),
    javascript(),
    ...config,
  ];
  const resolved = await Promise.all(configs);

  return resolved.flat();
}

export { defineConfig };
