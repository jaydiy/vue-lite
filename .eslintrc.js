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
