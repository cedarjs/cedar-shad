# setup-cedar-shad

Command for setting up [cedar-shad](https://github.com/cedarjs/cedar-shad) in a CedarJS project

## Setup

```
yarn dlx setup-cedar-shad
```

Run the command above inside your CedarJS project and it'll setup [cedar-shad](https://github.com/cedarjs/cedar-shad/tree/main/packages/add) for you.
You'll get a tailor-made setup of [shadcn/ui](https://ui.shadcn.com) for CedarJS, with a CedarJS specific cli to generate components.

## Usage

Inside your CedarJS project you can now use the `cedar-shad` command to generate components.

For example, the command below will generate a button component

```
yarn cedar-shad button
```

## Note

Currently this doesn't work great if you've already installed custom Tailwind plugins. It won't know how to update your TW config. PRs are welcome 😉

## Contributing

If you want to improve TW config merging, or contribute any other changes an easy way to test this locally is:

```
yarn start --cwd ../cedar-example-project --force
```

### Releasing

Just run `yarn release:patch|minor|major` in this directory (`packages/setup`)
