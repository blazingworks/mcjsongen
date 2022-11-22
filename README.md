<div align="center">

# mcjsongen

![Lines of code](https://img.shields.io/tokei/lines/github/blazingworks/mcjsongen?style=for-the-badge)
![npm Downloads](https://img.shields.io/npm/dy/mcjsongen?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/blazingworks/mcjsongen?style=for-the-badge)
![GitHub pull requests](https://img.shields.io/github/issues-pr/blazingworks/mcjsongen?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/blazingworks/mcjsongen?style=for-the-badge)
![GitHub Repo stars](https://img.shields.io/github/stars/blazingworks/mcjsongen?style=for-the-badge)
![npm Version](https://img.shields.io/npm/v/mcjsongen?style=for-the-badge)
![GitHub contributors](https://img.shields.io/github/contributors/blazingworks/mcjsongen?style=for-the-badge)

</div>

🏗️ A CLI (and js/ts library) that simplifies the task of creating model, blockstate, loot table JSON files for Minecraft Modding

## Tech Stack

-   [TypeScript](https://www.typescriptlang.org/)
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)

## Installation

### NPM

```bash
# Globally (CLI)
npm install -g mcjsongen

# Locally (Library)
npm install mcjsongen
```

### Yarn

```bash
# Globally (CLI)
yarn global add mcjsongen

# Locally (Library)
yarn add mcjsongen
```

## CLI Usage

```
Usage: mcjsongen [options] [command]

A CLI (and js/ts library) that simplifies the task of creating model, blockstate, loot table JSON files for Minecraft Modding

Options:
  -V, --version                        output the version number
  -h, --help                           show this help message

Commands:
  gen <category> <type> <id> [mod]     Output result of an individual generator
  create <category> <type> <id> [mod]  Write result of an individual generator to assets directory
  new <template> <id> [mod]            Generate a block/item from a template and write to assets
                                       directory
  help [command]                       display help for command
```

## Library Usage

🚧 Documentation will be available soon. The Library is currently not suggested for use in the current version.

## Generators (for `gen` and `create`)

### `models`

-   `crossBlock`
-   `flowerPotCrossBlock`
-   `item`

### `blockstates`

-   **`general`**
-   `ages` _(Takes additional data: Amount of growth stages)_

## Templates (for `new`)

-   `berry`: Creates berry item and berry bush block with 4 growth stages
-   `flower`: Creates a normal minecraft flower with block and item. Allows for the creation of multiple at once by seperating the IDs with a `,`.

## How to report issues/questions

-   For general issues/questions, [open an issue](https://github.com/blazingworks/mcjsongen/issues)
-   For security issues, please email [security@blazing.works](mailto:security@blazing.works)
-   For important questions, please email [opensource@blazing.works](mailto:opensource@blazing.works)

## License

As this is an open-source project, support is limited. Please use [GitHub Issues](https://github.com/blazingworks/mcjsongen/issues) for community support or contact [opensource@blazing.works](mailto:opensource@blazing.works) for very important matters.

**ℹ️ All code in this repository is licensed under the [MIT License](https://github.com/blazingworks/mcjsongen/blob/main/LICENSE).**
