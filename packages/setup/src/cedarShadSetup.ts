import type Yargs from 'yargs'

interface BaseOptions {
  cwd: string | undefined
}

interface ForceOptions extends BaseOptions {
  force: boolean
}

export const scriptName = 'setup-cedar-shad'

export const description = 'Setup cedar-shad'

export const builder = (yargs: Yargs.Argv<BaseOptions>) => {
  return yargs.option('force', {
    alias: 'f',
    default: false,
    description: 'Overwrite existing configuration',
    type: 'boolean',
  })
}

export const handler = async (options: ForceOptions) => {
  const { handler } = await import('./cedarShadSetupHandler')
  return handler(options)
}
