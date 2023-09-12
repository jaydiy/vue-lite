# vue-lite

这是一个项目模板，集成了一些基础配置和框架；包括代码质量检查、代码格式化、基础功能等等


## 初始化项目

[Vue 文档](https://cn.vuejs.org/)

1. 初始化项目

   ```sh
   npm init vue@latest vue-lite
   ...
   cd vue-lite
   npm install 
   npm run dev
   ```

   推荐的 `IDE` 配置是 [Visual Studio Code](https://code.visualstudio.com/) + [Volar 扩展](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

2. 代码提交规范

   ```sh
   # npm install -g commitizen
   commitizen init cz-conventional-changelog --save-dev --save-exact
   # git add . ; git cz
   
   git init # 会自动生成 .gitignore
   git add . 
   git cz # 初始化项目
   ```

3. 在项目根目录新建`.vscode`目录，进行 `VSCode` 配置

   - `extensions.json` 需要安装的插件

     ```json
     // extensions.json
     {
       "recommendations": [
         "editorconfig.editorconfig", // EditorConfig
         "stylelint.vscode-stylelint",
         "esbenp.prettier-vscode",
         "dbaeumer.vscode-eslint",
         "Vue.volar",
         "Vue.vscode-typescript-vue-plugin"
       ]
     }
     ```

   - `settings.json` 设置

     ```json
     {
       // vscode默认启用了根据文件类型自动设置tabsize的选项
       "editor.detectIndentation": false,
       // 重新设定tabsize
       "editor.tabSize": 2,
       "editor.formatOnSave": true,
       "editor.defaultFormatter": "esbenp.prettier-vscode",
       "editor.codeActionsOnSave": {
         "source.fixAll": true, // 开启自动修复
         "source.fixAll.stylelint": true, // 开启 stylelint 自动修复
         "source.fixAll.eslint": true
       },
       "stylelint.autoFixOnSave": true, // 保存自动格式化
       "stylelint.enable": true,
       "css.validate": false,
       "scss.validate": false,
       "stylelint.validate": ["css", "scss", "sass", "postcss", "less", "vue"],
       "eslint.validate": [
         "javascript",
         "typescript",
         "vue",
         "html",
         "markdown",
         "json",
         "jsonc",
         "yaml"
       ],
       "[typescript]": {
         "editor.defaultFormatter": "vscode.typescript-language-features",
         "editor.codeActionsOnSave": {
           // 开启保存时执行eslint进行校验和格式化
           "source.fixAll.eslint": true
         },
         "editor.formatOnSave": false // 所以编辑器默认的格式化设置为false，避免重复格式化
       },
       "[javascript]": {
         "editor.defaultFormatter": "vscode.typescript-language-features",
         "editor.codeActionsOnSave": {
           "source.fixAll.eslint": true
         },
         "editor.formatOnSave": false
       },
       "[sass]": {
         "editor.defaultFormatter": "stylelint.vscode-stylelint", // 设置编辑器默认格式化工具为stylelint
         "editor.codeActionsOnSave": {
           "source.fixAll.stylelint": true // 保存时自动使用sytlelint 修复
         },
         "editor.formatOnSave": false // 关闭编辑器默认的保存格式化
       },
       "[css]": {
         "editor.defaultFormatter": "stylelint.vscode-stylelint",
         "editor.codeActionsOnSave": {
           "source.fixAll.stylelint": true
         },
         "editor.formatOnSave": false
       },
       "[vue]": {
         "editor.defaultFormatter": "esbenp.prettier-vscode"
       }
     }
     ```

4. TS 配置

   - `tsconfig.json`

     ```json
     {
       "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue", "uno.config.ts"],
       "exclude": ["node_modules"],
       "compilerOptions": {
         "lib": ["es2015"], // Promise 报错
         "module": "esnext", // 修改 commonjs -- esnext es2022
         "strictNullChecks": true,
         "types": ["node", "vite/client", "vite-plugin-svg-icons/client"], // 环境变量不存在报错
         "moduleResolution": "node" // 导入 vue vue-router 报错
       }
     }
     ```

   - `tsconfig.app.json`

     ```json
     {
       // "extends": "@tsconfig/node18/tsconfig.json",
       "extends": "./tsconfig.json",
       "include": [
         "vite.config.*",
         "vitest.config.*",
         "cypress.config.*",
         "nightwatch.conf.*",
         "playwright.config.*"
       ],
       "compilerOptions": {
         "composite": true,
         "module": "ESNext",
         "moduleResolution": "Bundler",
         "types": ["node"]
       }
     }
     ```

5. TODO

   - 


## 编码规范

代码检查和格式化

### 配置 EditorConfig

在不同的编辑器和 `IDE` 之间定义和维护一致的编码样式

官网：<https://editorconfig.org/>

1. 安装插件

   搜索安装 `EditorConfig for VS Code`

2. 生成配置文件

   项目右键选择 `Generate .editorconfig` ，快速生成 `.editorconfig` 文件

   要和 `Prettier`、` ESlint` 一致，不能冲突 💥

   ```text
   # https://editorconfig.org
   # 最顶层的配置文件，值为 true，停止继续向上查找 .editorconfig 文件
   root = true
   
   # 控制指定文件类型的编码风格
   [*]
   # 文件编码
   charset = utf-8
   # 缩进风格为空格
   indent_style = space
   # 一个缩进占用两个空格，因没有设置 tab_with，一个 Tab 占用 2 列
   indent_size = 2
   # 换行符, 值为 lf、cr、crlf
   end_of_line = lf
   # 文件以换行符结尾
   insert_final_newline = true
   # 删除换行符之前的所有空格字符
   trim_trailing_whitespace = true
   
   ## 大括号的左侧部分是否应位于下一行
   curly_bracket_next_line = false
   ## 算术运算符和布尔运算符周围有空格
   spaces_around_operators = true
   ## 代码块中使用大括号的样式，条件语句格式是 1tbs
   indent_brace_style = 1tbs
   ## 方括号和圆括号周围的空格应如何：没有空格，仅在括号内，仅在括号外或括号两侧，值为 none、inside、outside、both 
   spaces_around_brackets = none
   ## 指定的字符数后强制硬换行。 off 以关闭此功能， 【 Emacs、Vim、Atom、Intellij IDEA、Prettier】
   max_line_length = 80
   
   [*.js]
   ## 字符串使用单引号
   quote_type = single
   
   [*.{html,less,css,json}]
   # 字符串使用双引号
   quote_type = double
   
   [*.md]
   indent_style = tab
   insert_final_newline = false
   trim_trailing_whitespace = false
   
   [*.{json,yml}]
   indent_style = space
   indent_size = 2
   ```

3. 使用

   `Alt + Shift + F` 格式化代码

### 配置 Stylelint

`CSS` 代码检查器，帮助开发者规避 `CSS` 代码中的错误并保持一致的编码风格

官网：<https://www.stylelint.com.cn/>

1. 安装

   - `VSCode` 中安装插件 `stylelint-plus`

     在`settings.json`中进行相关配置

     配置忽略文件`.stylelintignore`

     ```text
     # .stylelintignore
     # 旧的不需打包的样式库
     *.min.css
      
     # 其他类型文件
     *.js
     *.jpg
     *.png
     *.eot
     *.ttf
     *.woff
     *.json
      
     # 测试和打包目录
     /test/
     /dist/
     /node_modules/
     /lib/
     ```

   - 安装 stylelint 依赖包

     ```sh
     npm install --save-dev 
     stylelint-config-html postcss postcss-html
     stylelint stylelint-config-standard stylelint-order stylelint-config-recess-order stylelint-scss stylelint-config-rational-order stylelint-prettier 
     stylelint-config-standard-vue stylelint-config-standard-scss 
     npm install --save-dev --legacy-peer-deps stylelint-config-prettier 
     
     # 修复 Unknown word CssSyntaxError
       1. 安装
       npm install stylelint-config-standard-vue
       2. 修改配置文件 .stylelintrc.js
       "extends": "stylelint-config-standard-vue"
       "customSyntax": "postcss-html",
     
     # ✨stylelint-config-standard 官网提供的 css 标准
     # https://github.com/stylelint/stylelint-config-standard
     
     # stylelint-order 该插件的作用是强制你按照某个顺序编写 css
     # ✨stylelint-config-recess-order 属性排列顺序
     # https://github.com/stormwarning/stylelint-config-recess-order
     # stylelint-scss scss 拓展，增加支持 scss 语法
     
     # ✨stylelint-prettier 基于 prettier 代码风格的 stylelint 规则
     # https://www.npmjs.com/package/stylelint-prettier
     # ✨stylelint-config-prettier 禁用所有与格式相关的 Stylelint 规则，解决 prettier 与 stylelint 规则冲突，确保将其放在 extends 队列最后，这样它将覆盖其他配置
     # https://www.npmjs.com/package/stylelint-config-prettier
     ```

     

2. 生成配置文件

   在项目根目录新建`.stylelintrc.js`文件

   ```js
   module.exports = {
     extends: [
       'stylelint-config-standard',
       'stylelint-config-recess-order',
       'stylelint-config-html/vue',
       'stylelint-config-standard-vue',
       'stylelint-config-standard-scss',
       'stylelint-prettier/recommended',
     ],
     plugins: ['stylelint-order'],
     // 不同格式的文件指定自定义语法
     overrides: [
       // {
       //   files: ['**/*.(less|css|vue|html)'],
       //   customSyntax: 'postcss-less'
       // },
       {
         files: ['**/*.(html|vue)'],
         customSyntax: 'postcss-html',
       },
     ],
     ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx', '**/*.json'],
     rules: {
       // 标记 CSS 规范中未知的属性-值对
       'declaration-property-value-no-unknown': true,
       // 不要使用已被 autoprefixer 支持的浏览器前缀
       'media-feature-name-no-vendor-prefix': true,
       'at-rule-no-vendor-prefix': true,
       'selector-no-vendor-prefix': true,
       'property-no-vendor-prefix': true,
       // 不能用important
       'declaration-no-important': true,
       // 颜色指定大写 deprecated
       // "color-hex-case": "upper",
       // 禁止空块
       'block-no-empty': true,
       // 颜色6位长度
       'color-hex-length': 'short',
       // 兼容自定义标签名
       'selector-type-no-unknown': [
         true,
         {
           ignoreTypes: [],
         },
       ],
       // 忽略伪类选择器 ::v-deep
       'selector-pseudo-element-no-unknown': [
         true,
         {
           ignorePseudoElements: ['v-deep', ':deep'],
         },
       ],
       // 禁止低优先级的选择器出现在高优先级的选择器之后。
       'no-descending-specificity': null,
       // 不验证@未知的名字，为了兼容scss的函数
       'at-rule-no-unknown': null,
       // 禁止空注释
       'comment-no-empty': true,
       // 禁止简写属性的冗余值
       'shorthand-property-no-redundant-values': true,
       // 禁止值的浏览器引擎前缀
       'value-no-vendor-prefix': true,
       // property-no-vendor-prefix
       'property-no-vendor-prefix': true,
       // 禁止小于 1 的小数有一个前导零 deprecated
       // "number-leading-zero": "never",
       // 禁止空第一行 deprecated
       // "no-empty-first-line": true,
       // 属性的排序
       'order/properties-order': [
         'position',
         'top',
         'right',
         'bottom',
         'left',
         'z-index',
         'display',
         'justify-content',
         'align-items',
         'float',
         'clear',
         'overflow',
         'overflow-x',
         'overflow-y',
         'margin',
         'margin-top',
         'margin-right',
         'margin-bottom',
         'margin-left',
         'border',
         'border-style',
         'border-width',
         'border-color',
         'border-top',
         'border-top-style',
         'border-top-width',
         'border-top-color',
         'border-right',
         'border-right-style',
         'border-right-width',
         'border-right-color',
         'border-bottom',
         'border-bottom-style',
         'border-bottom-width',
         'border-bottom-color',
         'border-left',
         'border-left-style',
         'border-left-width',
         'border-left-color',
         'border-radius',
         'padding',
         'padding-top',
         'padding-right',
         'padding-bottom',
         'padding-left',
         'width',
         'min-width',
         'max-width',
         'height',
         'min-height',
         'max-height',
         'font-size',
         'font-family',
         'font-weight',
         'text-align',
         'text-justify',
         'text-indent',
         'text-overflow',
         'text-decoration',
         'white-space',
         'color',
         'background',
         'background-position',
         'background-repeat',
         'background-size',
         'background-color',
         'background-clip',
         'opacity',
         'filter',
         'list-style',
         'outline',
         'visibility',
         'box-shadow',
         'text-shadow',
         'resize',
         'transition',
       ],
     },
   }
   ```

3. 使用

   在 `package.json`中配置

   ```json
   "scripts":{
       "slint": "stylelint  \"src/**/*.{vue,scss,css,sass,less}\"",
       "slint:fix": "stylelint  \"src/**/*.{vue,scss,css,sass,less}\" --fix"
   }
   ```

### 配置 Prettier

统一代码风格

官网：<https://prettier.io/>

1. 安装

   1. 在 VSCode 安装 `Prettier - Code formatter` 插件

      在`settings.json`中配置

      ```json
      {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true,
        "[javascript]": {
          "editor.defaultFormatter": "esbenp.prettier-vscode",
          "editor.formatOnSave": true, // 保存的时候自动格式化
        }
      }
      ```

   2. 安装 prettier 依赖包

      `npm install prettier --save-dev --save-exact`

2. 生成配置文件

   在根目录下创建`.prettierrc.js`配置文件及`.prettierignore`忽略文件

   - `.prettierrc.js` 

     ```js
     //此处的规则供参考，其中多半其实都是默认值，可以根据个人习惯改写
     module.exports = {
       printWidth: 100, // 一行最多 100 字符
       tabWidth: 2, // 使用 2 个空格缩进
       useTabs: false, // 不使用 tab 缩进，使用空格
       semi: false, // 行尾自动添加分号
       singleQuote: true, // 使用单引号
       quoteProps: 'as-needed', // 对象的 key 仅在必要时用引号
       jsxSingleQuote: false, // jsx 不使用单引号，而使用双引号
       trailingComma: 'es5', // 末尾不需要逗号  "<es5|none|all>"
       bracketSpacing: true, // 大括号内的首尾需要空格
       jsxBracketSameLine: false, // jsx 标签的反尖括号需要换行
       arrowParens: 'always', // 箭头函数，只有一个参数的时候，也需要括号
       rangeStart: 0, // 每个文件格式化的范围是文件的全部内容
       rangeEnd: Infinity,
       requirePragma: false, // 不需要写文件开头的 @prettier
       insertPragma: false, // 不需要自动在文件开头插入 @prettier
       proseWrap: 'preserve', // 使用默认的折行标准; 因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
       htmlWhitespaceSensitivity: 'css', // 根据显示样式决定 html 要不要折行
       trailingComma: 'es5', // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）  
       vueIndentScriptAndStyle: false, // 不对vue中的script及style标签缩进
       endOfLine: 'lf', // 换行符使用 lf
       embeddedLanguageFormatting: 'auto', // 对引用代码进行格式化
       ignorePath: '.prettierignore',
       eslintIntegration: false, // 不让prettier使用eslint的代码格式进行校验
       tslintIntegration: false, // 不让prettier使用tslint的代码格式进行校验
     };
     ```

   - `.prettierignore`

     ```text
     # Ignore artifacts:
     build
     coverage
     
     **/*.md
     **/*.svg
     **/*.html
     package.json
     **/node_modules
     **/dist
     
     /node_modules
     package-lock.json
     
     /dist
     ```

3. 使用

   - 格式化

     ```sh
     # 格式化全部文档
     npx prettier --write .
     
     # 添加到 package.json 脚本中 "format": "prettier --write src/" 
     "scripts": {
         "format": "prettier --write \"./**/*.{html,vue,ts,js,json,md}\"",
     }
     ```

#### 解决和 `ESlint` 的冲突

1. 安装 `eslint-config-prettier` 插件

   `npm install eslint-config-prettier eslint-plugin-prettier --save-dev`

   - `eslint-plugin-prettier`： 基于 `prettier` 代码风格的 `eslint` 规则，即 `eslint` 使用 `pretter` 规则来格式化代码。
   - `eslint-config-prettier`： 禁用所有与格式相关的 `eslint` 规则，解决 `prettier` 与 `eslint` 规则冲突，**确保将其放在 extends 队列最后，这样它将覆盖其他配置**

2. 在 `eslint` 的配置文件`.eslintrc.js`中写入以下内容

   ```js
   extends: [
       'plugin:prettier/recommended', // eslint-plugin-prettier，即 eslint 使用 pretter 规则来格式化代码
       'prettier', // eslint-config-prettier, 必须放在最后
   ],
   ```

3. 解决 `eslint`与 `prettier` 默认规则的冲突，修改 `eslint` 或者 `prettier` 配置中冲突的规则

#### git hooks 👀

- https://github.com/typicode/husky

- https://www.npmjs.com/package/husky

  ```text
  可以设置在 git 提交之前执行一次格式化( pre-commit hook )，这样我们仓库里的代码就都是格式化好的了
  只需要在 package.json 里面加入一些配置。
  {
    "husky": {
      "hooks": {
        "pre-commit": "lint-staged"
      }
    },
    "lint-staged": {
      "**/*": "prettier --write --ignore-unknown"
    }
  }
  // 如果你使用 ESlint，请确保 lint-staged 里，ESlint 的执行顺序放在前面
  // 需要安装husky 和 lint-staged这两个依赖才能实现，其中husky是帮助我们添加git hooks的工具，而lint-staged则是筛选那些staged的git文件执行lint。
  // 执行 npx mrm lint-staged 就会把两个工具都安装好。
  // https://github.com/typicode/husky
  // https://github.com/okonet/lint-staged
  // prettier-ignore 注释会忽略抽象语法树下一行代码的格式化
  ```

1. 安装依赖包

   ```sh
   // 先别运行这两行，下面会有更简单的办法
   npm install husky --save-dev
   ## 激活 Git hooks，这一步创建 .husky 目录并设置 git hooksPath
   # npx husky install
   
   npm install lint-staged
   
   // ✨ 这一行就可以安装 husky 和 lint-stage，并且配置好 husky。
   npx mrm lint-staged
   ```

   [husky](https://github.com/typicode/husky)在这里的作用就是咬住 Git 的[hooks](https://githooks.com/)不放。我们这里只关心 pre-commit 这一个 hook

   mrm 之后，你的 `package.json` 多了这些内容：

   ```json
   "devDependencies": {
       "husky": "^3.0.5",
       "lint-staged": "^9.2.5"
     },
     "husky": {
       "hooks": {
         "pre-commit": "lint-staged", // // 在commit之前先执行npm run test命令
         //"commit-msg": "commitlint -e $HUSKY_GIT_PARAMS"
       }
     },
     "lint-staged": {
       "*.{js,css,json,md}": [
         "prettier --write",
         "git add"
       ]
     },
   // or ？
    "lint-staged": {
       "**/*": "prettier --write --ignore-unknown"
     }
   ```

   现在修改代码后`git add .`，然后再 `git commit -m 'Test Prettier'`试试

   - add a hook

     ```sh
     npx husky add .husky/pre-commit "npm run lint"
     npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"' 
     git add .husky/pre-commit
     
     //  我试了，还需要安装2个插件 @commitlint/cli @commitlint/config-conventional
     ```


### 配置 ESlint

`JavaScript` 代码检查 + 代码格式化

禁掉 `ESlint` 中与 `Prettier` 冲突的规则，然后使用 `Prettier` 格式化， `ESLint` 代码质量检查

官网：<https://eslint.org/>

1. 安装

   1. 在 `VSCode` 安装`ESlint`、`Prettier - Code formatter`、`Prettier ESlint`插件

   2. 安装依赖

      - [eslint：](https://link.juejin.cn?target=https%3A%2F%2Fcn.eslint.org%2F) `JavaScript` 和 `JSX` 检查工具

        [eslint-plugin-import：](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fbenmosher%2Feslint-plugin-import) `ES2015 +（ES6 +）`导入/导出语法的检查

        [babel-eslint：](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fbabel%2Fbabel-eslint) 使 `ESlint` 支持有效的 `babel` 代码

        [eslint-config-airbnb-base：](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fairbnb%2Fjavascript) 目前比较流行的 `JavaScript` 代码规范,  `React` 项目可下载 [eslint-config-airbnb](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fairbnb%2Fjavascript%2Ftree%2Fmaster%2Fpackages%2Feslint-config-airbnb)

        [eslint-plugin-vue：](https://link.juejin.cn?target=https%3A%2F%2Feslint.vuejs.org%2F) 使用 `ESLint` 检查 `.vue文件` 的 `<template>` 和 `<script>`

        [eslint-config-prettier：](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fprettier%2Feslint-config-prettier) 禁用所有与格式相关的 `ESlint` 规则，解决 `Prettier` 与 `ESlint` 规则冲突，确保将其放在 `extends` 队列最后，这样它将覆盖其他配置

        [eslint-plugin-prettier：](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fprettier%2Feslint-plugin-prettier) 基于 `prettier` 代码风格的 `eslint` 规则

        ```sh
        npm install -D eslint eslint-plugin-import eslint-import-resolver-webpack babel-eslint eslint-config-airbnb-base eslint-plugin-vue@next eslint-plugin-prettier eslint-config-prettier
        
        
        npm install -D eslint eslint-plugin-import 
        eslint-plugin-vue@next vue-eslint-parser 
        eslint-config-prettier eslint-plugin-prettier
        // eslint-config-airbnb-base 
        ```

2. 生成配置文件

   1. 在项目根目录运行`npm init @eslint/config`，此时会出现一系列配置需要你选择

      1. How would you like to use ESLint?

         > **选第三个 To check syntax, find problems, and enforce code style**

      2. What type of modules does your project use?

         > 项目非配置代码都是采用的 ES6 模块系统导入导出，**选择 JavaScript modules**

      3. Which framework does your project use?

         > 根据实际需要选择，本文这里**选择都不要**

      4. Does your project use TypeScript?

         > 因为是**TypeScript**项目，选是

      5. Where does your code run?

         > **Browser 和 Node 环境都选上**

      6. How would you like to define a style for your project?

         > 选择 **Use a popular style guide** ，即使用社区已经制定好的代码风格，我们去遵守就行。

      7. Which style guide do you want to follow?

         > **选择 Airbnb 风格**，都是社区总结出来的最佳实践。

      8. What format do you want your config file to be in?

         > **选择 JavaScript** ，即生成的配置文件是 js 文件，配置更加灵活。

      9. Would you like to install them now with npm?

         > 选择**YES**

         在根目录生成一个`.eslintrc.js`

         这样按下`ctrl+s`时自动修改格式

         ```js
         module.exports = {
           root: true,
           env: {
             browser: true,
             es2021: true,
             node: true,
           },
           extends: [
             'plugin:vue/vue3-recommended',
             'standard-with-typescript',
             // 'airbnb-base',
             '@antfu',
             'plugin:prettier/recommended', // eslint-plugin-prettier，即eslint使用pretter规则来格式化代码
             'prettier', // eslint-config-prettier, 必须放在最后
           ],
           overrides: [],
           ignorePatterns: ['.eslintrc.js', 'vite.config.ts', 'env.d.ts'],
           parser: 'vue-eslint-parser', // 解析 vue
           parserOptions: {
             ecmaVersion: 'latest', // 2020
             parser: '@typescript-eslint/parser', // 解析 ts
             project: ['./tsconfig.json', './tsconfig.node.json'], // 新增 指定 typescript
             extraFileExtensions: ['.vue'], // 新增 vue 解析
             tsconfigRootDir: __dirname, // 新增 指定 tsconfig 根目录
           },
           plugins: ['vue', '@typescript-eslint'],
           rules: {
             indent: 0,
             '@typescript-eslint/indent': 0,
             '@typescript-eslint/explicit-module-boundary-types': 'off',
             '@typescript-eslint/explicit-function-return-type': 'off',
             '@typescript-eslint/no-unused-vars': 'off',
             eqeqeq: [2, 'always'], // 要求使用 === 和 !==
             // "semi": [2, "never"],//语句强制分号结尾
             '@typescript-eslint/no-explicit-any': 'off', // FIXME
             'vue/multi-word-component-names': 'off', // FIXME vue 组件模板名称
             'no-console': 'off', // 关闭 console 报错
           },
         }
         ```

         `.eslintignore`

         ```text
         /build/**
         /node_modules/**
         /dist/**
         /docs/**
         ```

         

3. 配置项 `.vscode/settings.json`

   - 待校验的文件类型属于 `eslint.probe`，且 `ESlint` 配置文件中**没有引入**相应的插件，那么 probe（探测） 失败

     - 例如开发` Vue` ，需要在 `"eslint.probe"`  中添加 `["html", "vue"]`，在项目中安装 `eslint-plugin-vue, eslint-plugin-html` ，这样才会在 `.vue` 单文件中开启 `ESlint` 检测

       ```json
       // .vscode/settings.json
       {
           "eslint.run": "onSave",
           "editor.codeActionsOnSave": {
           "source.organizeImports": true,
           "source.fixAll.eslint": true
             },
           "eslint.format.enable": true,
           "eslint.options": {
               //指定vscode的eslint所处理的文件的后缀
               "extensions": [".js", ".ts", ".tsx"]
             },
           "eslint.probe": [
               "javascript",
               "typescript",
               "html",
               "vue",
               "markdown"
             ],
       }
       ```

   - 禁掉 `ESLint` 中与 `Prettier` 冲突的规则，然后用 `Prettier` 做格式化， `ESLint` 做代码校验

     1. 项目中安装

        - `eslint-config-prettier` : 关闭了 `ESLint` 中可能与 `Prettier` 冲突的规则 。这个配置只能关闭规则，所以只有和其他配置一起使用才有意义

        - `eslint-plugin-prettier` : 以 `ESlint` 规则的方式运行 `Prettier`

          该插件增加了 `prettier/prettier` 规则， 该规则执行 `prettier` 并将错误信息上报 `eslint`。简而言之，将 `prettier` 融合到 `eslint` 中，担起代码风格检查的功能

          ```sh
          npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier
          
          // .eslintrc.json 使用 prettier 插件提供的配置
          // 一步加入全组配置：config/plugin/rules
          {
            "extends": [
                'plugin:prettier/recommended', // eslint-plugin-prettier，即eslint使用pretter规则来格式化代码
                  'prettier', // eslint-config-prettier, 必须放在最后
            ]
          }
          
          // or
          {
            extends: [
              ..., // 其他
              //  @typescript-eslint/eslint-plugin，这个插件中存在一些与 Prettier 冲突的规则  
              "plugin:@typescript-eslint/recommended", // 引入相关插件  
              "prettier", // 禁用 ESLint 中与 Prettier 冲突的规则
              "prettier/@typescript-eslint" // 禁用插件中与 Prettier 冲突的规则
            ]
            plugins: ["prettier"], // eslint-plugin-prettier
            rules: {
              "prettier/prettier": "error" // 开启规则
             // 注意：使用 eslint-plugin-prettier 和 --fix 时开启 `arrow-body-style` & `prefer-arrow-callback` 可能会导致 [issue](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fprettier%2Feslint-plugin-prettier%23arrow-body-style-and-prefer-arrow-callback-issue)，因此建议关闭这两条规则。
             "arrow-body-style": "off", 
              "prefer-arrow-callback": "off"
            }
          }
          
          // vscode 设置
          {
            "editor.formatOnSave": true,
            "editor.defaultFormatter": "esbenp.prettier-vscode",
            "editor.codeActionsOnSave": {
              "source.fixAll.eslint": true
            }
          }
          ```

4. 使用

   `npx eslint --ext .vue,.js,.jsx,.ts,.tsx src --fix `

   - `package.json` 中添加脚本

     ```js
     "scripts": {
         "eslint": "eslint . --ext .vue,.js,.ts,.jsx,.tsx",
         "eslint:fix": "eslint . --ext .vue,.js,.ts,.jsx,.tsx --fix"
       },
     ```

   - 禁用某条语句的代码检查 `// eslint-disable-next-line`

   - `/* eslint-disable no-eval */` 放在 `.js` 文件中的任何代码之前，这将禁用整个文件的 `no-eval`

#### `Vue3+TypeScript`

https://eslint.vuejs.org/

`ESlint` 配置文件`.eslintrc.js`没有对 `Vue`文件做解析，只对 `TS`文件进行了解析配置

1. 安装 `Vue` 解析依赖包

   ```sh
   npm install eslint-plugin-vue vue-eslint-parser --save-dev
   
   1 删除 node_modules 
   2 重新安装 npm install
   3 安装 vue-eslint-typescript 的官方包
   npm install @vue/eslint-config-typescript --save-dev
   https://www.npmjs.com/package/@vue/eslint-config-typescript
   4 添加eslint配置： 原来的都不要了，先留两个
   extends: [
       //vue 的规则
       'plugin:vue/vue3-essential',
       // vue ts 的规则
       '@vue/eslint-config-typescript'
   ],
   5 启动成功
   ```

2. 在`.eslintrc.js` 中指定 `parserOptions.project` 和 `parserOptions.extraFileExtensions`

   ```js
   "parser": "vue-eslint-parser", /* 解析 .vue 文件 */
   "parserOptions":{"parser":"@typescript-eslint/parser"},
   project: ['./tsconfig.json'],
   extraFileExtensions: ['.vue'],
   tsconfigRootDir: __dirname,
   ```

   ```js
   module.exports = {
     root: true,
     env: {
       browser: true,
       es2021: true,
       node: true,
     },
     extends: [
       'plugin:vue/vue3-recommended',
       'standard-with-typescript',
       // 'airbnb-base',
       // '@antfu',
       'plugin:prettier/recommended', // eslint-plugin-prettier，即eslint使用pretter规则来格式化代码
       'prettier', // eslint-config-prettier, 必须放在最后
     ],
     overrides: [],
     ignorePatterns: ['.eslintrc.js', 'env.d.ts'],
     parser: 'vue-eslint-parser', // 解析 vue
     parserOptions: {
       ecmaVersion: 'latest', // 2020
       parser: '@typescript-eslint/parser', // 解析 ts
       project: ['./tsconfig.json', './tsconfig.node.json'], // 新增 指定 typescript
       extraFileExtensions: ['.vue'], // 新增 vue 解析
       tsconfigRootDir: __dirname, // 新增 指定 tsconfig 根目录
     },
     plugins: ['vue', '@typescript-eslint'],
     rules: {
       indent: 0,
       '@typescript-eslint/indent': 0,
       '@typescript-eslint/explicit-module-boundary-types': 'off',
       '@typescript-eslint/explicit-function-return-type': 'off',
       '@typescript-eslint/no-unused-vars': 'off',
       eqeqeq: [2, 'always'], // 要求使用 === 和 !==
       // "semi": [2, "never"],//语句强制分号结尾
       '@typescript-eslint/no-explicit-any': 'off', // FIXME
       'vue/multi-word-component-names': 'off', // FIXME vue组件模板名称
     },
   }
   ```

3. 修改`tsconfig.json`在 `tsconfig.app.json` 中指定 `include`和`exclude`

   ```json
   {
     // "files": [],
     "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
     "exclude": ["node_modules"],
     "compilerOptions": {
       "strictNullChecks": true
     }
     // ,
     // "references": [
     //   {
     //     "path": "./tsconfig.node.json"
     //   },
     //   {
     //     "path": "./tsconfig.app.json"
     //   }
     // ]
   }
   ```

   ```json
   "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
   "exclude": ["node_modules"]
   ```

4. 修改`tsconfig.node.json`

   ```json
   // "extends": "@tsconfig/node18/tsconfig.json",
     "extends": "./tsconfig.json",
   ```

#### Vite 添加 ESLint 支持

- 安装一个插件 [vite-plugin-eslint](https://www.npmjs.com/package/vite-plugin-eslint)，在 vite.config.ts 中进行使用

  ```sh
  npm install vite-plugin-eslint --save-dev
  ```

- 配置

  ```ts
  // vite.config.ts
  import eslint from 'vite-plugin-eslint' // 新增
   
  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [vue(), eslint()], // 新增 eslint()
  })
  ```

- 运行 `npm run dev`


## 基础集成

### 集成 Sass

CSS 预处理器

- 安装依赖包

  ```sh
  # Vite 提供了对 sass 的内置支持，但要安装 sass 的预处理器
  npm install sass -D
  ```

- 配置

  ```ts
  // vite.config.ts
  // 1️⃣ scss.additionalData 仅附加到 SCSS 内容前面。如果您没有在项目中加载(main中引入)任何 .scss 文件（或 <style lang="scss"> 块），则没有地方可以插入它。
  // 2️⃣ 用 scss.additionalData 加载 CSS 变量是一种不好的做法。CSS 变量是运行时属性。 scss.additionalData 通常用于编译时 SCSS 变量
  // 1 variables.scss, _functions.scss _colors.scss
  // 2 index.scss 中, @forward './variables';
  // 3 main.ts  import '@/assets/styles/scss/index.scss'
  // 基础样式用 base.scss
  css: {
      preprocessorOptions: {
        scss: {
          //由于sass-loader的版本不同，不同的版本对应的关键字：  
          //sass-loader v8-中，为 “ data ”  
          //sass-loader v8中，为 “ prependData ”  
          //sass-loader v10+中，为 “ additionalData ”
          // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
          additionalData: `
            @use '@/assets/styles/scss/variables.scss' as *;
            @use '@/assets/styles/scss/globalVar.scss' as *;
            `,
        },
      },
  }
  ```

- `maint.ts` 中加载

  ```ts
  import '@/assets/styles/scss/index.scss'
  // index.scss
  // @forward './variables';
  ```

- 使用

  ```vue
  // AboutView.vue
  <template>
    <div class="box">use sass</div>
  </template>
  
  <style lang="scss" scoped>
  @media (width >= 1024px) {
    .box {
      color: $d-color-mdred;
    }
  }
  </style>
  ```

### 集成 UnoCSS

文档：https://unocss.dev/

#### 安装 UnoCSS

1. 安装依赖包

   ```sh
   npm install -D unocss
   ```

2. 引入插件

   ```ts
   // vite.config.ts
   import { defineConfig } from 'vite'
   import UnoCSS from 'unocss/vite'
   
   export default defineConfig({
     plugins: [
       UnoCSS({}),
     ],
   })
   ```

3. 配置文件

   ```ts
   // uno.config.ts
   // presets rules variants shortcuts theme transformers
   import { defineConfig, presetUno } from 'unocss'
   
   export default defineConfig({
       presets: [
           presetUno(),
         ],
   })
   ```

   完整一些的配置文件

   ```ts
   // uno.config.ts
   // presets rules variants shortcuts theme transformers
   import {
     defineConfig,
     presetAttributify,
     presetIcons,
     presetTypography,
     presetUno,
     presetWebFonts,
     transformerDirectives,
     transformerVariantGroup,
   } from 'unocss'
   
   export default defineConfig({
     presets: [
       presetUno(),
       presetAttributify(),
       presetIcons({
         scale: 1.2,
       }),
       presetTypography(),
       presetWebFonts({
         fonts: {
           sans: 'DM Sans',
           serif: 'DM Serif Display',
           mono: 'DM Mono',
         },
       }),
     ],
     transformers: [transformerDirectives(), transformerVariantGroup()],
   })
   ```

4. 导入样式

   ```ts
   // main.ts
   import 'virtual:uno.css'
   ```

#### ESLint 中集成 UnoCSS

https://github.com/antfu/eslint-config

1. 安装

   ```sh
   npm install -D eslint @antfu/eslint-config
   ```

2. 配置`.eslintrc`

   ```
   {
     "extends": "@antfu"
   }
   ```

3. `package json`写入

   ```json
   {
     "scripts": {
       "lint": "eslint .",
       "lint:fix": "eslint . --fix"
     }
   }
   ```

4. `.vscode/settings.json`

   ```json
   {
     "prettier.enable": false,
     "editor.formatOnSave": false,
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true,
       "source.organizeImports": false
     },
     "eslint.validate": [
       "javascript",
       "typescript",
       "vue",
       "html",
       "markdown",
       "json",
       "jsonc",
       "yaml"
     ]
   }
   ```

#### 重置浏览器样式

1. 安装

   ```sh
   npm install @unocss/reset --save-dev
   ```

2. `main.js` 中添加以下任意一个重置样式表

   ```ts
   # 来源: https://necolas.github.io/normalize.css/
   import '@unocss/reset/normalize.css'
   
   # 来源: https://github.com/csstools/sanitize.css#usage
   import '@unocss/reset/sanitize/sanitize.css'
   import '@unocss/reset/sanitize/assets.css'
   
   # 来源: https://meyerweb.com/eric/tools/css/reset/index.html
   import '@unocss/reset/eric-meyer.css'
   
   # Tailwind
   import '@unocss/reset/tailwind.css'
   
   # Tailwind compat	
   import '@unocss/reset/tailwind-compat.css'
   ```


#### 使用

1. 多添加一些预设

   ```ts
   // uno.config.ts
   import {
     defineConfig,
     presetAttributify,
     presetIcons,
     presetTypography,
     presetUno,
     presetWebFonts,
     transformerDirectives,
     transformerVariantGroup,
   } from 'unocss'
   
   export default defineConfig({
     presets: [
       presetUno(),
       presetAttributify(),
       presetIcons({
         scale: 1.2,
       }),
       presetTypography(),
       presetWebFonts({
         fonts: {
           sans: 'DM Sans',
           serif: 'DM Serif Display',
           mono: 'DM Mono',
         },
       }),
     ],
     transformers: [transformerDirectives(), transformerVariantGroup()],
   })
   ```

2. 用`@apply` 改一下 `<style scoped>`

   ```css
   .logo {
     @apply h-6em p-1.5em
   }
   .logo {
     @apply hover:drop-shadow-[0_0_2em_#646cffaa]
   }
   .logo.vue {
     @apply hover:drop-shadow-[0_0_2em_#42b883aa]
   }
   ```



#### 自定义预设

1. 编写预设

   ```ts
   // custom-preset.ts
   // shortcuts rules theme presets  variants transformers preflights
   import { Preset } from 'unocss'
   
   export default function myPreset(options: {}): Preset {
     return {
       name: 'custom-preset',
       shortcuts: [
           {
             btn: 'py-2 px-4 font-semibold rounded-lg shadow-md',
           },
           // dynamic shortcuts
           [/^btn-(.*)$/, ([, c]) => `bg-${c}-400 text-${c}-100 py-2 px-4 rounded-lg`],
         ],
       rules: [
         [/^m-([\.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })],
         [/^w-(\d+)$/, ([, d]: any) => ({ width: `${d / 4}rem` })],
         [/^h-(\d+)$/, ([, d]: any) => ({ height: `${d / 4}rem` })],
       ],
       theme: {
         breakpoints: {
           sm: '640px',
           md: '768px',
           lg: '1024px',
           xl: '1280px',
           '2xl': '1536px',
         },
       },
       variants: [
         // ...
       ],
       // 它支持您在根配置中拥有的大多数配置
     }
   }
   ```
   
2. 引入预设

   ```ts
   // unocss.config.ts
   import { defineConfig } from 'unocss'
   import customPreset from './custom-preset'
   
   export default defineConfig({
     presets: [
       customPreset({})
     ]
   })
   ```

#### Rem to px

- 安装依赖包

  ```sh
  npm install @unocss/preset-rem-to-px -D
  ```

- 配置

  ```ts
  // uno.config.ts
  import { defineConfig } from 'unocss'
  import presetRemToPx from '@unocss/preset-rem-to-px'
  
  export default defineConfig({
    presets: [
      presetRemToPx()
    ]
  })
  ```


### 按需加载

- 安装依赖包

  ```sh
  npm install unplugin-vue-components --save-dev # 按需加载组件
  npm install unplugin-auto-import --save-dev # 按需加载 Api
  ```

- 配置 `vite.config.ts`

  ```ts
  import Components from 'unplugin-vue-components/vite'
  import AutoImport from 'unplugin-auto-import/vite'
  
  plugins: [
      Components({ dts: true }),
      AutoImport({ imports: ["vue", "vue-router", "pinia"], dts: true }),
    ]
  ```

- 使用


### 使用 SVG

- **第一种方法：** 直接把 `SVG` 代码复制到组件中使用，`TheWelcome.vue`
- **第二种方法：** 通过 [vite-svg-loader](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fjpkleemans%2Fvite-svg-loader) 实现
- **第三种方法：** 用`vite-plugin-svg-icons` 依赖包，实现自定义组件

#### 用 vite-svg-loader

通过 [vite-svg-loader](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fjpkleemans%2Fvite-svg-loader) 实现

- 安装 `npm i vite-svg-loader -D`

- 配置

  ```ts
  // vite.config.ts
  import SvgLoader from 'vite-svg-loader'
  
  export default defineConfig({
    plugins: [SvgLoader()]
  })
  ```

- 使用

  ```ts
  // Demo.vue
  <script setup lang="ts">
  import MyIcon from '@/assets/example.svg?component';
  </script>
  
  <template>
    <MyIcon />
  </template>
  ```


#### 用 vite-plugin-svg-icons ✨

##### 1 安装依赖包

- 安装依赖包

  ```sh
  npm install vite-plugin-svg-icons -D
  ```

##### 2 配置

- vite.config.ts

  ```ts
  import { defineConfig } from "vite"
  import vue from "@vitejs/plugin-vue"
  import path from "path"
  import { createSvgIconsPlugin } from "vite-plugin-svg-icons"
  
  export default defineConfig({
    resolve: {
      alias: [
        {
          find: "@",
          replacement: path.resolve(__dirname, "src")
        }
      ]
    },
    plugins: [
      vue(),
      ...,
      // 注册所有的 svg 文件生成 svg 精灵图
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/icons/svg")], // icon 存放的目录
        symbolId: "icon-[name]", // symbol 的 id
        inject: "body-last", // 插入的位置
        customDomId: "__svg__icons__dom__" // svg 的 id
      })
    ]
  })
  ```

- tsconfig.json

  ```json
  {
    "compilerOptions": {
      "types": ["vite-plugin-svg-icons/client"] // 不需要好像也可以
    }
  }
  ```

##### 3 引入注册脚本

- 在 `main.ts` 中引入注册脚本 `import "virtual:svg-icons-register"`

- 如果报以下错误有可能是幽灵依赖没有安装成功，可以手动安装一下 `fast-glob` 包 

  ![image-20230426112210491](https://oss.danielhub.top/md_pic/image-20230426112210491.png)

- 安装命令 `npm install fast-glob -D`

##### 4 封装 SvgIcon 组件

- 在 `components` 下创建 `SvgIcon` 组件

  ```vue
  // @/components/SvgIcon/index.vue
  <script setup lang="ts">
  import { computed } from 'vue'
  import { isExternal } from '@/utils/methods'
  
  const props = defineProps<{ iconName: string; className?: string }>()
  // 是否是带协议的图片链接
  const isExt = computed(() => isExternal(props.iconName ?? ''))
  // 拼接成 symbolId 在 loader 配置中指定了 symbolId 格式 icon-图标名称
  const svgName = computed(() => `#icon-${props.iconName}`)
  // 添加类名 props.className 外部传入自定义类名
  const svgClass = computed(() =>
    props.className !== null ? `svg-icon ${props.className}` : 'svg-icon'
  )
  // 如果 iconName 是带协议的图标链接 则通过 style css属性方式渲染
  const styleExternalIcon = computed(() => ({
    mask: `url(${props.iconName}) no-repeat 50% 50%`,
    '-webkit-mask': `url(${props.iconName}) no-repeat 50% 50%`,
  }))
  </script>
  
  <template>
    <!-- 如果 iconName 是带协议的图标链接 则通过 style 属性方式渲染 -->
    <div
      v-if="isExt"
      class="svg-icon svg-external-icon"
      :style="styleExternalIcon"
      v-bind="$attrs"
    ></div>
    <!-- SVG icon 通过名称使用 -->
    <svg v-else :class="svgClass" aria-hidden="true" v-bind="$attrs">
      <use :xlink:href="svgName" />
    </svg>
  </template>
  
  <style lang="scss" scoped>
  .svg-icon {
    overflow: hidden;
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentcolor;
  }
  
  .svg-external-icon {
    display: inline-block;
    background-color: currentcolor;
    mask-size: cover !important;
  }
  </style>
  ```

- `isExternal` 工具函数

  ```ts
  // @/utils/methods.ts
  export const isExternal = function (path: string): boolean {
    return /^(https?:|mailto:|tel:)/.test(path)
  }
  ```

- 封装成插件

  - 封装插件

    ```ts
    // @/plugins/icons.ts
    import { App } from "vue"
    import SvgIcon from "@/components/SvgIcon/index.vue"
    
    export default (app: App) => {
      // 全局注册svg-icon组件
      app.component("svg-icon", SvgIcon)
    }
    ```

  - 引入插件

    ```ts
    // main.ts
    import initSvgIcon from "@/plugins/icons" 
    app.use(initSvgIcon)
    ```

##### 5 使用

- 使用

  ```vue
  // AboutView.vue
  <template>
    <div>
      <!-- icon-name svg 图标名称 class-name 额外的自定义类名 @click绑定事件 -->
      <svg-icon icon-name="bug"></svg-icon>
      <svg-icon icon-name="404" class-name="custom-class"></svg-icon>
    </div>
  </template>
  <script setup lang="ts">
  
  </script>
  <style lang="scss">
  .custom-class {
    font-size: 200px;
    color: green;
  }
  </style>
  ```

##### 6 SVG 压缩

压缩 `SVG` 文件 并移除 `SVG` 默认填充颜色

1. 安装依赖包

   ```sh
   npm install svgo -D
   ```

2. `svgo` 配置

   - 在 `utils` 文件夹下创建  `svgo.config.js`

     ```ts
     module.exports = {
       plugins: [
         "preset-default", // 默认插件配置
         {
           name: "removeAttrs",
           params: {
             attrs: "(fill|stroke)"
           }
         }
       ]
     }
     ```

   - 在` package.json` 中添加脚本

     ```json
      "scripts": {
         "svgo": "svgo -f src/icons/svg --config=src/utils/svgo.config.js"
       },
     ```

3. 压缩

   - 执行 `npm run svgo` 进行压缩

     ![svgo](https://oss.danielhub.top/md_pic/911b7cf524e2485fa57c73692aae2826~tplv-k3u1fbpfcp-zoom-in-crop-mark_4536_0_0_0.webp)

### 集成 `Axios`

1. 安装

   ```sh
   npm install axios -D
   ```

2. 简单使用

   ```ts
   import axios from "axios";
   axios.get('/user', {
       params: {
         ID: 12345
       }
     })
     .then( response => {})
   ```

#### 封装 Axios

- 目录

  ```
  vue-lite
  └── src					# 源码目录
  	└── api				# 接口 API
  	    ├── module	     # 各模块请求
  	    │   ├── demo.ts  
  	    │   └── user.ts
  	    ├── index.ts     # 导出各模块请求
  	    └── request.ts   # 封装 axios
  ```

1. `request.ts`

   ```ts
   import axios from 'axios'
   
   // vue-cli 用 process.env.VUE_APP_DEMO_API
   // vite 用 import.meta..env.VUE_APP_DEMO_API
   // 'https://api.zhengdr.com/api/v1/'
   axios.defaults.baseURL = import.meta.env.VUE_APP_DEMO_API
   axios.defaults.baseURL = ''
   
   // request 拦截器
   axios.interceptors.request.use(
     (config) => {
       return config
     },
     async (error) => {
       return await Promise.reject(error)
     }
   )
   
   // response 拦截器
   axios.interceptors.response.use(
     (response) => {
       return response
     },
     async (error: any) => {
       // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
       if (error.response) {
         if (error.response.status === 404) {
           // ElNotification.error({
           // 	title: '请求错误',
           // 	message: "Status:404，正在请求不存在的服务器记录！"
           // });
         }
       }
       return await Promise.reject(error.response)
     }
   )
   
   const http = {
     /** get 请求
      * @param  {接口地址} url
      * @param  {请求参数} params
      * @param  {参数} config
      */
     async get(url, params = {}, config = {}) {
       return await new Promise((resolve, reject) => {
         axios({
           method: 'get',
           url,
           params,
           ...config,
         })
           .then((response) => {
             resolve(response.data)
           })
           .catch((error) => {
             reject(error)
           })
       })
     },
   
     /** post 请求
      * @param  {接口地址} url
      * @param  {请求参数} data
      * @param  {参数} config
      */
     async post(url, data = {}, config = {}) {
       return await new Promise((resolve, reject) => {
         axios({
           method: 'post',
           url,
           data,
           ...config,
         })
           .then((response) => {
             resolve(response.data)
           })
           .catch((error) => {
             reject(error)
           })
       })
     },
   
     /** put 请求
      * @param  {接口地址} url
      * @param  {请求参数} data
      * @param  {参数} config
      */
     async put(url, data = {}, config = {}) {
       return await new Promise((resolve, reject) => {
         axios({
           method: 'put',
           url,
           data,
           ...config,
         })
           .then((response) => {
             resolve(response.data)
           })
           .catch((error) => {
             reject(error)
           })
       })
     },
   
     /** patch 请求
      * @param  {接口地址} url
      * @param  {请求参数} data
      * @param  {参数} config
      */
     async patch(url, data = {}, config = {}) {
       return await new Promise((resolve, reject) => {
         axios({
           method: 'patch',
           url,
           data,
           ...config,
         })
           .then((response) => {
             resolve(response.data)
           })
           .catch((error) => {
             reject(error)
           })
       })
     },
   
     /** delete 请求
      * @param  {接口地址} url
      * @param  {请求参数} data
      * @param  {参数} config
      */
     async delete(url, data = {}, config = {}) {
       return await new Promise((resolve, reject) => {
         axios({
           method: 'delete',
           url,
           data,
           ...config,
         })
           .then((response) => {
             resolve(response.data)
           })
           .catch((error) => {
             reject(error)
           })
       })
     },
   
     /** jsonp 请求
      * @param  {接口地址} url
      * @param  {JSONP回调函数名称} name
      */
     async jsonp(url, name = 'jsonp') {
       return await new Promise((resolve) => {
         const script = document.createElement('script')
         const _id = `jsonp${Math.ceil(Math.random() * 1000000)}`
         script.id = _id
         script.type = 'text/javascript'
         script.src = url
         window[name] = (response) => {
           resolve(response)
           document.getElementsByTagName('head')[0].removeChild(script)
           try {
             // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
             delete window[name]
           } catch (e) {
             window[name] = undefined
           }
         }
         document.getElementsByTagName('head')[0].appendChild(script)
       })
     },
   }
   export default http
   ```

2. `demo.ts`

   ```ts
   import http from '../request'
   
   export default {
     get: {
       url: `${import.meta.env.VUE_APP_DEMO_API}/demo/ver`,
       name: 'Get 方法演示',
       async get(params = {}) {
         return await http.get(this.url, params)
       },
     },
     post: {
       url: `/demo/post`,
       name: 'Post 方法演示',
       async post(data = {}) {
         return await http.post(this.url, data, {})
       },
     },
     findPageWrap: {
       url: `https://api.zhengdr.com/api/v1//certificate/findPageWrap`,
       name: '获取证书列表',
       async post(
         data = {
           pageNum: 1,
           pageSize: 20,
           params: {},
         }
       ) {
         return await http.post(this.url, data)
       },
     },
   }
   ```

   ```ts
   import http from '../request'
   
   export const get = {
     url: `${import.meta.env.VUE_APP_DEMO_API}/demo/ver`,
     name: 'Get 方法演示',
     async get(params = {}) {
       return await http.get(this.url, params)
     },
   }
   
   export const post = {
     url: `/demo/post`,
     name: 'Post 方法演示',
     async post(data = {}) {
       return await http.post(this.url, data, {})
     },
   }
   
   export const findPageWrap = {
     url: `https://api.zhengdr.com/api/v1//certificate/findPageWrap`,
     name: '获取证书列表',
     async post(
       data = {
         pageNum: 1,
         pageSize: 20,
         params: {},
       }
     ) {
       return await http.post(this.url, data)
     },
   }
   ```

3. `index.ts`

   ```ts
   import demo from './module/demo'
   
   // import user from "./module/user"; // 默认导出
   // import * as user from "./module/user"; // 常量导出
   
   export default {
     demo,
   }
   ```

4. 使用

   - 直接使用

     ```vue
     // Demo.vue
     <script lang="ts">
     import api from '@/api'
     methods: {
         async listProduct() {
           let res = await api.demo.post();
           console.log("🚀 ~ file: HomePage.vue:180 ~ listProduct ~ res2:", res);
           this.portfolioData = res.data
         },
       },
     </script>
     ```

   - 作为全局属性使用

     ```ts
     import api from './api'
     app.config.globalProperties.$api = api // 挂载所有模块的请求
     ```

     ```vue
     <script lang="ts" setup>
     import { getCurrentInstance } from 'vue'
     
     const { $api } = getCurrentInstance()?.appContext.config.globalProperties
     async function fetchData() {
       const res = await $api.demo.findPageWrap.post()
       console.log('🚀 ~ file: AboutView.vue:7 ~ fetchData ~ res:', res)
     }
     </script>
     ```
