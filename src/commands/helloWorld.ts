import type { Arguments, CommandBuilder } from 'yargs';

export const builder: CommandBuilder<any, any> = (yargs) =>
  yargs.positional('name', { type: 'string', demandOption: true });

export const command = 'helloWorld';
export const desc = 'Say hello to someone';

export const handler = (argv: Arguments<any>): void => {
  const message = `Hello, ${argv.name}!`;
  process.stdout.write(message);
  process.exit(0);
};
