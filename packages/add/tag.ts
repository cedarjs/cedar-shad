import fs from 'fs'

import execa from 'execa'

const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'))

const { stdout: stdoutCommit } = await execa.command(
  `git commit -am cedar-shad/v${packageJson.version}`,
)

console.log(stdoutCommit)

const { stdout: stdoutTag } = await execa.command(
  `git tag cedar-shad/v${packageJson.version}`,
)

console.log(stdoutTag)
