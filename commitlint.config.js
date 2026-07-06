module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      // 允许 header 以 emoji + 空格开头，emoji 只作为装饰，不纳入 type 捕获
      // 如: "🎉 init(root): 描述" → type="init" scope="root" subject="描述"
      headerPattern: /^(?:\S+\s+)?(\w*)(?:\(([\w$.\-* ]*)\))?!?\s*:\s*(.*)$/,
      headerCorrespondence: ['type', 'scope', 'subject'],
    },
  },
  rules: {
    // @see:https://commitlint.js.org/#/reference-rules
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'subject-case': [0],
    'type-enum': [
      2,
      'always',
      [
        'init',
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
        'wip',
        'workflow',
        'types',
        'release',
      ],
    ],
  },
  prompt: {
    types: [
      { value: '🎉 init', name: '🎉 init: 项目初始化' },
      { value: '✨ feat', name: '✨ feat: 新功能' },
      { value: '🐞 fix', name: '🐞 fix: 修复缺陷' },
      { value: '📃 docs', name: '📃 docs: 更新文档' },
      { value: '🚀 perf', name: '🚀 perf: 提升性能' },
      { value: '🧪 test', name: '🧪 test: 添加测试' },
      { value: '🐳 chore', name: '🐳 chore: 更改构建流程或辅助工具' },
      { value: '🔙 revert', name: '🔙 revert: 代码回滚' },
      { value: '🌈 style', name: '🌈 style: 格式调整（不影响代码运行）' },
      { value: '🔧 build', name: '🔧 build: 依赖相关内容' },
      {
        value: '🦄 refactor',
        name: '🦄 refactor: 代码重构（不新增功能也不修复bug）',
      },
      {
        value: '🐎 ci',
        name: '🐎 ci: CI 配置相关，例如对 k8s/docker 的配置文件修改',
      },
    ],
    scopes: ['root', 'backend', 'frontend', 'components', 'utils'],
    allowCustomScopes: true,
    slipQuestions: ['body', 'footerPrefix', 'footer', 'breaking'], // 跳过 “详细描述” 和底部信息
    messages: {
      type: '📌 请选择提交类型:',
      scope: '🎯 请选择影响范围（可选）:',
      subject: '✏️ 请简要描述更改:',
      body: '🔎 详细描述（可选）:',
      footer: '🔗 关联的 issue 或者 breaking change （可选）:',
      confirmCommit: '✅ 确认提交？:',
    },
  },
};
