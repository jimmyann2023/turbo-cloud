import type { Linter } from 'eslint';

import { ignores, javascript, prettier, typescript, vue } from './configs';
import { customConfig } from './configs/custom-config';

type FlatConfig = Linter.Config;

type FlatConfigPromise =
  | FlatConfig
  | FlatConfig[]
  | Promise<FlatConfig>
  | Promise<FlatConfig[]>;

const defineConfig = async function (config: FlatConfig[] = []) {
  const configs: FlatConfigPromise[] = [
    vue(),
    ignores(),
    prettier(),
    typescript(),
    javascript(),
    ...customConfig,
    ...config,
  ];
  const resolved = await Promise.all(configs);

  return resolved.flat();
};

export { defineConfig };
