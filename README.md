# Awesome DESIGN.md

将 DESIGN.md 复制到你的项目中，告诉 AI 代理"按照这个风格构建页面"，即可获得像素级精准且风格匹配的 UI。


## 什么是 DESIGN.md？

[DESIGN.md](https://stitch.withgoogle.com/docs/design-md/overview/) 是 Google Stitch 提出的一个新概念。它是一种纯文本设计系统文档，AI 代理可以读取它来生成风格一致的 UI。

它只是一个 Markdown 文件。无需 Figma 导出，无需 JSON 模式，无需特殊工具。将它放入项目根目录，任何 AI 编码代理或 Google Stitch 都能立即理解你的 UI 应该呈现的样子。Markdown 是 LLM 最擅长阅读的格式，因此无需解析或配置。

| 文件 | 谁来阅读 | 定义什么 |
|------|----------|----------|
| `AGENTS.md` | 编码代理 | 如何构建项目 |
| `DESIGN.md` | 设计代理 | 项目的外观和感觉 |

**本仓库提供了从真实网站提取的即用型 DESIGN.md 文件。**



## 每个 DESIGN.md 包含什么内容？

每个文件遵循 [Stitch DESIGN.md 格式](https://stitch.withgoogle.com/docs/design-md/format/)，并包含扩展章节：

| # | 章节 | 捕获内容 |
|---|------|----------|
| 1 | 视觉主题与氛围 | 情绪、密度、设计哲学 |
| 2 | 调色板与角色 | 语义名称 + 十六进制值 + 功能角色 |
| 3 | 排版规则 | 字体族、完整层级表 |
| 4 | 组件样式 | 按钮、卡片、输入框、导航及各状态 |
| 5 | 布局原则 | 间距系统、网格、留白哲学 |
| 6 | 深度与层级 | 阴影系统、表面层级 |
| 7 | 设计准则 | 设计护栏与反模式 |
| 8 | 响应式行为 | 断点、触摸目标、折叠策略 |
| 9 | 代理提示指南 | 快速颜色参考、即用型提示词 |

每个站点包含：

| 文件 | 用途 |
|------|------|
| `DESIGN.md` | 设计系统（代理读取的内容） |
| `preview.html` | 视觉目录，展示色板、字体层级、按钮、卡片 |
| `preview-dark.html` | 相同目录的深色表面版本 |

### 如何使用


1. 将某个站点的 `DESIGN.md` 复制到你的项目根目录
2. 告诉你的 AI 代理使用它。


## 在线预览

本项目提供在线预览页面，方便你浏览所有设计规范：

- **首页导航** ([index.html](index.html)) - 按分类浏览所有品牌设计规范
- **预览页面** ([preview.html](preview.html)) - 查看每个品牌的详细设计展示

本地运行：

```bash
# 使用 Python 启动本地服务器
python -m http.server 8080

# 或使用 Node.js
npx serve .
```

然后访问 `http://localhost:8080` 即可查看。


## 请求生成 DESIGN.md

[使用此模板提交 GitHub Issue](https://github.com/VoltAgent/awesome-design-md/issues/new?template=design-md-request.yml)，为某个网站请求生成 DESIGN.md。


## 合集

### AI 与机器学习

- [**Claude**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/claude/) - Anthropic 的 AI 助手。温暖赤陶色调，简洁编辑式布局
- [**Cohere**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/cohere/) - 企业级 AI 平台。活力渐变，数据丰富的仪表盘美学
- [**ElevenLabs**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/elevenlabs/) - AI 语音平台。深色电影感 UI，音频波形美学
- [**Minimax**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/minimax/) - AI 模型提供商。大胆深色界面，霓虹点缀
- [**Mistral AI**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/mistral.ai/) - 开源权重 LLM 提供商。法式工程极简主义，紫色调
- [**Ollama**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/ollama/) - 本地运行 LLM。终端优先，单色简约
- [**OpenCode AI**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/opencode.ai/) - AI 编码平台。开发者中心深色主题
- [**Replicate**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/replicate/) - 通过 API 运行 ML 模型。纯净白色画布，代码优先
- [**RunwayML**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/runwayml/) - AI 视频生成。电影感深色 UI，媒体丰富布局
- [**Together AI**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/together.ai/) - 开源 AI 基础设施。技术感，蓝图风格设计
- [**VoltAgent**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/voltagent/) - AI 代理框架。虚空黑画布，翡翠绿点缀，终端原生
- [**xAI**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/x.ai/) - 马斯克的 AI 实验室。极简单色，未来主义极简

### 开发者工具与平台

- [**Cursor**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/cursor/) - AI 优先代码编辑器。流畅深色界面，渐变点缀
- [**Expo**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/expo/) - React Native 平台。深色主题，紧凑字距，代码中心
- [**Linear**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/linear.app/) - 工程师项目管理。极致极简，精准，紫色点缀
- [**Lovable**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/lovable/) - AI 全栈构建器。趣味渐变，友好开发者美学
- [**Mintlify**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/mintlify/) - 文档平台。简洁，绿色点缀，阅读优化
- [**PostHog**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/posthog/) - 产品分析。趣味刺猬品牌，开发者友好深色 UI
- [**Raycast**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/raycast/) - 效率启动器。流畅深色外壳，活力渐变点缀
- [**Resend**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/resend/) - 开发者邮件 API。极简深色主题，等宽字体点缀
- [**Sentry**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/sentry/) - 错误监控。深色仪表盘，数据密集，粉紫点缀
- [**Supabase**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/supabase/) - 开源 Firebase 替代品。深色翡翠主题，代码优先
- [**Superhuman**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/superhuman/) - 快速邮件客户端。高端深色 UI，键盘优先，紫色光晕
- [**Vercel**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/vercel/) - 前端部署平台。黑白精准，Geist 字体
- [**Warp**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/warp/) - 现代终端。深色 IDE 风界面，块状命令 UI
- [**Zapier**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/zapier/) - 自动化平台。温暖橙色，友好插画驱动

### 基础设施与云服务

- [**ClickHouse**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/clickhouse/) - 高速分析数据库。黄色点缀，技术文档风格
- [**Composio**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/composio/) - 工具集成平台。现代深色，多彩集成图标
- [**HashiCorp**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/hashicorp/) - 基础设施自动化。企业级整洁，黑白配色
- [**MongoDB**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/mongodb/) - 文档数据库。绿叶品牌，开发者文档焦点
- [**Sanity**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/sanity/) - 无头 CMS。红色点缀，内容优先编辑式布局
- [**Stripe**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/stripe/) - 支付基础设施。标志性紫色渐变，weight-300 优雅

### 设计与效率

- [**Airtable**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/airtable/) - 电子表格-数据库混合体。多彩友好，结构化数据美学
- [**Cal.com**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/cal/) - 开源日程安排。简洁中性 UI，开发者导向简约
- [**Clay**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/clay/) - 创意机构。有机形态，柔和渐变，艺术指导布局
- [**Figma**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/figma/) - 协作设计工具。活力多彩，趣味而专业
- [**Framer**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/framer/) - 网站构建器。大胆黑蓝，动效优先，设计导向
- [**Intercom**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/intercom/) - 客户消息。友好蓝色调，对话式 UI 模式
- [**Miro**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/miro/) - 可视化协作。明亮黄色点缀，无限画布美学
- [**Notion**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/notion/) - 一站式工作空间。温暖极简，衬线标题，柔和表面
- [**Pinterest**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/pinterest/) - 视觉发现平台。红色点缀，瀑布流网格，图片优先
- [**Webflow**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/webflow/) - 可视化网页构建器。蓝色点缀，精致营销站点美学

### 金融科技与加密货币

- [**Coinbase**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/coinbase/) - 加密货币交易所。简洁蓝色标识，信任导向，机构感
- [**Kraken**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/kraken/) - 加密货币交易平台。紫色点缀深色 UI，数据密集仪表盘
- [**Revolut**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/revolut/) - 数字银行。流畅深色界面，渐变卡片，金融科技精准
- [**Wise**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/wise/) - 国际汇款。明亮绿色点缀，友好清晰

### 企业与消费

- [**Airbnb**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/airbnb/) - 旅行市场。温暖珊瑚色点缀，摄影驱动，圆润 UI
- [**Apple**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/apple/) - 消费电子。高端留白，SF Pro 字体，电影感影像
- [**IBM**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/ibm/) - 企业技术。Carbon 设计系统，结构化蓝色调
- [**NVIDIA**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/nvidia/) - GPU 计算。绿黑能量，技术力量美学
- [**SpaceX**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/spacex/) - 航天技术。极简黑白，全出血影像，未来感
- [**Spotify**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/spotify/) - 音乐流媒体。深色上活力绿色，大胆字体，专辑封面驱动
- [**Uber**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/uber/) - 出行平台。大胆黑白，紧凑字体，都市能量

### 汽车品牌

- [**BMW**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/bmw/) - 豪华汽车。深色高端表面，精准德系工程美学
- [**Ferrari**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/ferrari/) - 豪华汽车。明暗对比黑白编辑风，法拉利红配极致稀疏
- [**Lamborghini**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/lamborghini/) - 豪华汽车。纯黑教堂感，金色点缀，LamboType 定制新 grotesk 体
- [**Renault**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/renault/) - 法国汽车。鲜明极光渐变，NouvelR 专有字体，零圆角按钮
- [**Tesla**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/tesla/) - 电动汽车。极致减法，电影感全视口摄影，Universal Sans 字体



## 贡献

请参阅 [CONTRIBUTING.md](CONTRIBUTING.md) 了解指南。

- **改进现有文件**：修正错误颜色、缺失令牌、薄弱描述
- **报告问题**：告诉我们哪里看起来不对

在提交 PR 之前，请先[提交 Issue](https://github.com/VoltAgent/awesome-design-md/issues) 讨论你的想法并获取维护者的反馈。


## 许可证

MIT 许可证 - 详见 [LICENSE](LICENSE)

本仓库是从公开网站提取的设计系统文档的精选合集。所有 DESIGN.md 文件按"原样"提供，不作任何担保。提取的设计令牌代表公开可见的 CSS 值。我们不声称拥有任何网站视觉标识的所有权。这些文档旨在帮助 AI 代理生成风格一致的 UI。
