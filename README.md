# 简易网站导航页面

这是一个用大模型生成的，美观实用的网站导航页面，支持内外网环境自动切换，可以根据配置文件自定义网站分类和样式。
发起这个项目的原因是，刚刚在NAS上装了个Lucky，开了一大堆端口，搞不清楚谁是谁了，就废物利用，把Lucky反向代理的默认规则转到这个静态页面来做导航。

页面预览：

<img src="https://raw.githubusercontent.com/rainow/simple_nav/main/pc-preview.png" height="400" alt="PC端预览">

<img src="https://raw.githubusercontent.com/rainow/simple_nav/main/mobile-preview.png" height="400" alt="移动端预览">

Lucky配置截图：

<img src="https://raw.githubusercontent.com/rainow/simple_nav/main/lucky-config.png" height="400" alt="Lucky内部配置截图">

本项目代码和下面说明的文案都由大模型生成。

## 功能特点

- 从配置文件中读取网站信息并动态生成导航页面
- 支持内外网环境自动切换（根据当前URL判断）
- 按分类分组展示网站，支持自定义分类
- 同一分类内，有序号的网站按序号从小到大排列，无序号的网站按网站名称拼音排序
- 支持自定义网站图标，无图标时自动获取网站favicon
- 支持特殊域名使用特殊样式（可自定义哪些域名为特殊域名）
- 美观的粒子背景效果，自动适配PC和移动设备
- 响应式设计，完美适配不同屏幕尺寸

## 文件结构

- `index.html` - 主页面HTML结构
- `styles.css` - 样式表文件
- `config.js` - 网站配置文件（实际使用的配置，可以复制一份config.sample.js然后再改）
- `config.sample.js` - 示例配置文件（包含常见网站示例）
- `favicon.png` - 网站图标
- `README.md` - 说明文档
- `*-preview.png` - 说明文档使用到的预览图片，项目不需要

## 如何使用

1. 克隆或下载本项目到本地
2. 根据需要修改 `config.js` 文件，添加或修改您的网站信息
3. 在浏览器中打开 `index.html` 文件即可使用导航页面
4. 如果需要部署到服务器，只需将所有文件上传到服务器即可

## 配置说明

在 `config.js` 文件中，使用以下格式配置网站：

\`\`\`javascript
// 网站导航配置
const navConfig = [
  // [name, url, internalUrl, category, order, icon]
  ["网站名称", "外网访问地址", "内网访问地址", "分类名称", 排序序号, "图标URL"],
  // 例如:
  ["GitHub", "https://github.com/", "", "开发工具", 1, "https://github.com/favicon.ico"],
];

// VIP1域名列表 - 使用黄色背景
const vip1Domains = ["example1.com", "example2.com"];

// VIP2域名列表 - 使用绿色背景
const vip2Domains = ["example3.com", "example4.com"];

// 内网判断条件 - 用于判断当前是否在内网环境
const internalNetworkPatterns = ["192.168", "127.0.0.1", "localhost"];
\`\`\`

### 配置项说明

1. **navConfig**: 网站导航配置数组，每个元素包含以下信息：
   - `name`: 网站名称（必填）
   - `url`: 外网访问地址（必填）
   - `internalUrl`: 内网访问地址（可选，如果为空则内网环境也使用外网地址）
   - `category`: 分类名称（可选，默认为"其他"）
   - `order`: 排序序号（可选，同一分类内按序号排序，无序号的按拼音排序）
   - `icon`: 图标URL（可选，如果为空则尝试获取网站favicon）

2. **vip1Domains**: VIP1域名列表，这些域名的网站会使用黄色背景样式

3. **vip2Domains**: VIP2域名列表，这些域名的网站会使用绿色背景样式

4. **internalNetworkPatterns**: 内网判断条件，用于判断当前是否在内网环境。如果当前URL包含这些字符串中的任何一个，则被判定为内网环境，会优先使用内网地址访问网站。

## 自定义样式

如果您想自定义页面样式，可以修改 `styles.css` 文件：

- `.site-card.vip1` - VIP1域名网站的样式
- `.site-card.vip2` - VIP2域名网站的样式
- `.site-card.external` - 其他外网网站的样式
- `.category-title` - 分类标题样式
- `.search-input`, `.search-button` - 搜索框和按钮样式

## 示例配置

项目中包含了一个 `config.sample.js` 文件，其中有常见网站的示例配置，您可以参考这个文件来创建自己的配置。

## 浏览器兼容性

本项目使用了现代Web技术，建议使用以下浏览器的最新版本：
- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

## 许可证

MIT License
