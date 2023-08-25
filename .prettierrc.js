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
  // ignorePath: '.prettierignore',
  // eslintIntegration: false, // 不让prettier使用eslint的代码格式进行校验
  // tslintIntegration: false, // 不让prettier使用tslint的代码格式进行校验
}
