module.exports = {
  // 语句末尾添加分号
  semi: true,
  // 每个缩进的空格数
  tabWidth: 2,
  // 是否使用制表符代替空格缩进
  useTabs: false,
  // 单行显示的字符个数
  printWidth: 80,
  // 是否使用单引号而不是双引号
  singleQuote: true,
  // jsx 是否使用单引号而不是双引号
  jsxSingleQuote: false,
  // 多行数据结构添加尾随逗号，如数组，对象，
  trailingComma: "es5",
  // 是否在大括号内的首尾添加空格，'{ foo: bar }'
  bracketSpacing: true,
  // 换行符，‘auto’ 表示保持现状，window 为 crlf，linux/mac 为 lf
  // 'auto' 当团队成员使用不同设备开发时，会因此出现换行符跨平台开发问题
  endOfLine: "auto",
  // 是否将多行元素(HTML、JSX、Vue、Angular)的‘>’单独放在下一行，而不是放在行尾
  bracketSameLine: false,
  // 总是为单个的箭头函数参数添加括号，'(x) => x'
  arrowParens: "always",
  // vue 文件中的 `<script>` 和 `<style>` 标签的内容是否缩进
  vueIndentScriptAndStyle: true,
  // 是否强制每个元素或组件的属性单独一行
  singleAttributePerLine: false,
  // 设置元素或组件的空格敏感性为严格 // https://prettier.io/docs/en/options.html#html-whitespace-sensitivity
  htmlWhitespaceSensitivity: "strict",
};
