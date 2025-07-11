import type { Argv } from 'yargs'
import type { BaseOptions, CommandOptions } from './yargsTypes.js'

export const scriptName = 'cedar-shad'

export const command = '$0 [components..]'

export const description = 'Generate one or more Shadcn components'

export const builder = (yargs: Argv<BaseOptions>) => {
  return yargs
    .positional('components', {
      description: 'The components you want to add',
      type: 'string',
      array: true,
    })
    .option('force', {
      alias: 'f',
      default: false,
      description: 'Overwrite existing components',
      type: 'boolean',
    })
}

export const handler = async (options: CommandOptions) => {
  const { handler } = await import('./cedarShadHandler.js')
  return handler(options)
}
