# AI Vue 项目

基于 Vue 3 + Vite 构建的 AI 应用前端项目。

## 技术栈

- **框架**: Vue 3 (Composition API)
- **构建工具**: Vite 8
- **UI 组件库**: Element Plus
- **状态管理**: Pinia
- **路由**: Vue Router
- **图表库**: ECharts
- **富文本编辑器**: WangEditor
- **HTTP 客户端**: Axios
- **样式**: SCSS

## 项目结构

```
src/
├── api/                 # API 接口定义
│   ├── admin.js         # 后台管理接口
│   └── frontend.js      # 前端用户接口
├── assets/              # 静态资源
│   ├── images/          # 图片资源
│   └── vue.svg          # Vue Logo
├── components/          # 公共组件
│   ├── ArticleDialog.vue    # 文章对话框
│   ├── AuthLayout.vue       # 认证页面布局
│   ├── BackendLayout.vue    # 后台布局
│   ├── FrontendLayout.vue   # 前端布局
│   ├── HelloWorld.vue       # 示例组件
│   ├── MarkdownRenderer.vue # Markdown 渲染器
│   ├── Navbar.vue           # 导航栏
│   ├── PageHead.vue         # 页面头部
│   ├── RichTextEditor.vue   # 富文本编辑器
│   ├── Sidebar.vue          # 侧边栏
│   └── TableSearch.vue      # 表格搜索
├── config/              # 配置文件
│   └── index.js         # 全局配置
├── router/              # 路由配置
│   └── index.js         # 路由定义
├── stores/              # Pinia 状态管理
│   └── admin.js         # 后台状态
├── utils/               # 工具函数
│   └── request.js       # HTTP 请求封装
├── views/               # 页面视图
│   ├── articleDetail.vue    # 文章详情
│   ├── consultation.vue     # 咨询页面
│   ├── consultations.vue    # 咨询列表
│   ├── dashboard.vue        # 仪表盘
│   ├── emotionDiary.vue     # 情感日记
│   ├── emotional.vue        # 情感分析
│   ├── frontendKnoledge.vue # 前端知识库
│   ├── home.vue             # 首页
│   ├── knowledge.vue        # 知识库管理
│   ├── login.vue            # 登录页
│   └── register.vue         # 注册页
├── App.vue              # 根组件
├── main.js              # 入口文件
└── style.css            # 全局样式
```

## 功能模块

### 认证模块
- 用户登录
- 用户注册

### 仪表盘
- 数据可视化展示
- 统计图表

### 情感分析
- 情感日记记录
- 情感状态分析

### 咨询服务
- 在线咨询功能
- 咨询历史记录

### 知识库
- 知识文章管理
- 富文本编辑
- Markdown 渲染

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 生产构建

```bash
npm run build
```

### 预览构建结果

```bash
npm run preview
```

## 配置说明

项目配置文件位于 `src/config/index.js`，包含 API 基础路径等配置项。

## 开发规范

- 使用 Vue 3 Composition API
- 组件命名采用 PascalCase
- 样式使用 SCSS
- 路由命名采用 kebab-case
- API 接口统一管理在 `src/api/` 目录

## License

MIT