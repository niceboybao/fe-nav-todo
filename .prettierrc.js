const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.prettier,
  semi: true, // 表达式后加分号
  singleQuote: true, // 单引号
  jsxSingleQuote: true, // jsx单引号
  trailingComma: 'all', // 尾随逗号
  bracketSpacing: true, // 在对象文字中的括号之间打印空格
  jsxBracketSameLine: false, // 多行JSX元素时将>放在最后一行的末尾
  arrowParens: 'always', // 在单独的箭头函数参数周围包括括号
  tabWidth: 2, // 指定每个缩进级别的空格数
  useTabs: false, // 使用制表符而不是空格缩进行
};
