# IT-Tools 项目分析报告

## 1. 项目概述

`IT-Tools` 是一个开源的、专为开发人员和IT从业者设计的在线工具集合网站。该项目旨在提供一个统一的、便捷的平台，集成了大量日常开发和运维工作中可能会用到的实用工具，从格式转换、密码学计算到网络工具等，应有尽有。项目前端基于 Vue 3 和 Vite 构建，具有良好的性能和用户体验。

用户可以通过官方网站 [it-tools.tech](https://it-tools.tech) 直接使用，也支持使用 Docker 进行私有化部署，方便在内网环境中使用。

## 2. 技术栈

项目采用了现代前端技术栈，主要包括：

*   **框架**: [Vue 3](https://vuejs.org/) (使用了 `<script setup>` 语法)
*   **构建工具**: [Vite](https://vitejs.dev/)
*   **语言**: [TypeScript](https://www.typescriptlang.org/)
*   **包管理器**: [pnpm](https://pnpm.io/)
*   **UI 组件库**: 项目使用了自定义的UI组件（位于 `src/ui`），并结合了 [Naive UI](https://www.naiveui.com/)
*   **状态管理**: [Pinia](https://pinia.vuejs.org/) (`src/stores`)
*   **路由**: [Vue Router](https://router.vuejs.org/)
*   **国际化**: [Vue I18n](https://vue-i18n.intlify.dev/) (`locales` 和 `src/modules/i18n`)
*   **测试**: [Vitest](https://vitest.dev/) 用于单元测试

## 3. 项目结构分析

项目的目录结构清晰，职责分明：

*   `src/`: 核心代码目录。
    *   `main.ts`: 应用入口文件。
    *   `App.vue`: 根组件。
    *   `components/`: 全局可复用的基础组件。
    *   `tools/`: **项目的核心功能目录**。每个子目录代表一个独立的工具，包含了该工具的 `.vue` 组件、逻辑 (`index.ts`) 以及可能的其他模块。
    *   `tools/index.ts`: 该文件是所有工具的注册中心，它导入所有工具并按类别进行组织和导出。
    *   `ui/`: 自定义的、样式化的UI组件，如按钮、卡片、输入框等。
    *   `stores/`: Pinia状态管理。
    *   `pages/`: 页面级组件 (如首页、关于页)。
    *   `layouts/`: 页面布局组件。
    *   `plugins/`: Vite插件配置。
    *   `assets/`: 静态资源文件。
*   `locales/`: 存放不同语言的国际化翻译文件 (`.yml`)。
*   `public/`: 公共静态资源，会被直接复制到输出目录的根目录。
*   `scripts/`: 存放一些用于开发的Node.js脚本，例如创建新工具的脚手架脚本 `create-tool.mjs`。
*   `README.md`: 提供了详细的项目介绍、部署指南和贡献方法。

## 4. 功能列表

该项目提供了极其丰富的工具集，根据 `src/tools/index.ts` 文件和目录结构，可以大致归类为以下几类：

<details>
<summary><b>🔄 转换器 (Converters)</b></summary>

- Base64 字符串/文件转换
- 整数进制转换 (Integer Base Converter)
- 颜色转换 (Color Converter)
- 大小写转换 (Case Converter)
- Cron表达式生成器
- 日期时间转换
- Docker Run命令转Docker Compose
- JSON 与 CSV/TOML/XML/YAML 互转
- 列表转换 (List Converter)
- Markdown 转 HTML
- 罗马数字转换
- 温度转换
- 文本与二进制/Unicode/北约字母互转
- URL 编码/解码
- ...等等

</details>

<details>
<summary><b>✨ 生成器 (Generators)</b></summary>

- Basic Auth Header 生成器
- Bcrypt 哈希生成
- Bip39 助记词生成
- HMAC 生成器
- MAC 地址生成器
- 密码/Token生成器
- 二维码 (QR Code) 生成器
- RSA 密钥对生成器
- ULID/UUID 生成器
- Wi-Fi 二维码生成器
- ...等等

</details>

<details>
<summary><b>📝 文本处理 (Text Tools)</b></summary>

- 文本比较 (Text Diff)
- JSON/XML/SQL 美化与格式化
- JSON 压缩
- JSON 查看器
- Lorem Ipsum 生成器
- 字符串 URL Slugify
- 字符串混淆
- 文本统计
- 正则表达式测试器
- ...等等

</details>

<details>
<summary><b>🔒 加密与安全 (Security & Crypto)</b></summary>

- Bcrypt 哈希计算与验证
- 加密/解密工具 (AES, DES, etc.)
- HMAC 生成
- JWT 解析器
- OTP (一次性密码) 生成与验证
- 密码强度分析
- PDF 签名检查
- RSA 密钥对生成
- ...等等

</details>

<details>
<summary><b>🌐 网络工具 (Network Tools)</b></summary>

- 设备信息查看
- IPv4 地址转换
- IPv4 子网计算器
- IPv4 地址段展开
- IPv6 ULA 生成器
- MAC 地址查询
- HTTP 状态码查询
- URL 解析器
- User-Agent 解析器
- ...等等

</details>

<details>
<summary><b>🔧 其他实用工具 (Utilities)</b></summary>

- ASCII 文本绘制
- 相机录制
- Chmod 计算器
- 计时器 (Chronometer)
- ETA (预计到达时间) 计算器
- IBAN 校验与解析
- 键盘按键码信息 (Keycode Info)
- 数学表达式计算器
- 百分比计算器
- ...等等

</details>

## 5. 如何贡献

`README.md` 文件中提供了清晰的贡献指南。

1.  **环境准备**:
    *   安装 [VSCode](https://code.visualstudio.com/)
    *   安装推荐的插件：`Volar`, `TypeScript Vue Plugin`, `ESLint`, `i18n Ally`。
    *   使用 `pnpm install` 安装依赖。

2.  **开发**:
    *   运行 `pnpm dev` 启动本地开发服务器。

3.  **添加新工具**:
    *   项目提供了一个非常方便的脚手架命令来创建新工具的模板文件：
        ```sh
        pnpm run script:create:tool your-new-tool-name
        ```
    *   该命令会在 `src/tools` 目录下创建新工具的文件夹和基础文件，并自动在 `src/tools/index.ts` 中完成导入。
    *   开发者只需在新创建的文件中专注于工具逻辑的开发，并在 `src/tools/index.ts` 中将其归入正确的分类。

## 6. 总结

`IT-Tools` 是一个设计精良、功能强大且极具实用价值的开源项目。它不仅为开发者提供了一个“一站式”的工具箱，其优秀的项目结构和代码规范也使其成为一个非常好的 Vue 3 + Vite 项目学习范例。无论是作为日常使用者，还是作为代码贡献者，参与此项目都将是一次很棒的体验。
