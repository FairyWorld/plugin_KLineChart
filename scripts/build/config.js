// import child_process from 'child_process'

import { nodeResolve } from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'
import fileSize from 'rollup-plugin-filesize'
import eslint from '@rollup/plugin-eslint'

import { resolvePath, getVersion } from '../utils.js'

const version = getVersion()

// let commitId = ''
// try {
//   commitId = child_process.execSync(`git rev-parse --short v${version}^{}`).toString().trim()
// } catch {
// }

const env = process.env.NODE_ENV

const isDev = env === 'development'

const isProd = env === 'production'

const buildDir = resolvePath('dist')

function createInputConfig ({ input, replaceValues }) {
  return {
    input,
    plugins: [
      typescript(),
      eslint({
        throwOnError: true
      }),
      nodeResolve(),
      replace({
        preventAssignment: true,
        values: {
          // '__VERSION__': `v${version}(${commitId.length > 0 ? `${commitId}, ` : ''}${new Date().toISOString()})`,
          __VERSION__: version,
          ...replaceValues
        }
      }),
      fileSize(),
      isProd && terser()
    ].filter(p => !!p)
  }
}

function createOutputConfig ({
  fileName, format, name, parentDir
}) {
  let file
  if (parentDir) {
    file = resolvePath(fileName, resolvePath(parentDir, buildDir))
  } else {
    file = resolvePath(fileName, buildDir)
  }
  const config = {
    file,
    format,
    sourcemap: isDev,
    indent: false,
    banner: `
    /**
     * @license
     * KLineChart v${version}
     * Copyright (c) 2019 lihu.
     * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
     */`.trim()
  }

  if (name) {
    config.name = name
  }
  return config
}

export {
  createInputConfig,
  createOutputConfig,
  version,
  env,
  isDev,
  isProd
}
