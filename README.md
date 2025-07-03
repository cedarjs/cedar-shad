# cedar-shad Monorepo

Welcome to the cedar-shad monorepo.

[packages/add](packages/add) is home to the `cedar-shad` command line tool. This
tool is used to generate components in your CedarJS project.

[packages/setup](packages/setup) is home to the `setup-cedar-shad` command line
tool. This tool is used to setup a new CedarJS project with the `cedar-shad`
command

## Installation

To install the `cedar-shad` command line tool, run the following command in your
CedarJS project:

```
yarn dlx setup-cedar-shad
```

See the [setup-cedar-shad README](packages/setup/README.md) for more information.

## Releasing

The packages are versioned independently. To release a new version of a package,
go to the package directory and run `yarn release:patch|minor|major`
