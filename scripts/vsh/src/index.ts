import { colors, consola } from '@repo/node-utils';
import cac from 'cac';

import { defineLintCommand } from './lint';
import { definePubLintCommand } from './publint';

try {
  const vsh = cac('vsh');

  // vsh lint
  defineLintCommand(vsh);

  // vsh publint
  definePubLintCommand(vsh);

  vsh.on('command:*', () => {
    consola.error(colors.red('Invalid command!'));
    process.exit(1);
  });

  vsh.usage('vsh');
  vsh.help();
  vsh.parse();
} catch (e) {
  consola.error(e);
  process.exit(1);
}
