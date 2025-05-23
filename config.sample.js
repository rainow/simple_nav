// 网站导航配置文件示例
// 格式: [name, url, internalUrl, category, order, icon]
// name: 网站名称
// url: 外网访问地址
// internalUrl: 内网访问地址（如果没有，可以留空）
// category: 分类（如果没有指定，默认为"其他"）
// order: 排序序号（同一分类内，序号小的排在前面；没有序号的按拼音排序）
// icon: 图标URL（如果没有，会尝试获取网站的favicon）

const navConfig = [
  // 搜索引擎
  ["Google", "https://www.google.com/", "", "搜索引擎", 1, "https://www.google.com/favicon.ico"],
  ["百度", "https://www.baidu.com/", "", "搜索引擎", 2, "https://www.baidu.com/favicon.ico"],
  ["必应", "https://www.bing.com/", "", "搜索引擎", 3, "https://www.bing.com/favicon.ico"],
  ["搜狗", "https://www.sogou.com/", "", "搜索引擎", 5, "https://www.sogou.com/favicon.ico"],
  
  // 社交媒体
  ["微博", "https://weibo.com/", "", "社交媒体", 1, "https://weibo.com/favicon.ico"],
  ["Twitter", "https://twitter.com/", "", "社交媒体", 2, "https://twitter.com/favicon.ico"],
  ["Facebook", "https://www.facebook.com/", "", "社交媒体", 3, "https://www.facebook.com/favicon.ico"],
  ["LinkedIn", "https://www.linkedin.com/", "", "社交媒体", 4, "https://www.linkedin.com/favicon.ico"],
  ["Instagram", "https://www.instagram.com/", "", "社交媒体", 5, "https://www.instagram.com/favicon.ico"],
 
  // 视频网站
  ["哔哩哔哩", "https://www.bilibili.com/", "", "视频网站", 2, "https://www.bilibili.com/favicon.ico"],
  ["爱奇艺", "https://www.iqiyi.com/", "", "视频网站", 3, "https://www.iqiyi.com/favicon.ico"],
  ["腾讯视频", "https://v.qq.com/", "", "视频网站", 4, "https://v.qq.com/favicon.ico"],
   
  // 购物网站
  ["淘宝", "https://www.taobao.com/", "", "购物网站", 1, "https://www.taobao.com/favicon.ico"],
  ["京东", "https://www.jd.com/", "", "购物网站", 2, "https://www.jd.com/favicon.ico"],
  ["亚马逊", "https://www.amazon.cn/", "", "购物网站", 3, "https://www.amazon.cn/favicon.ico"],
  ["拼多多", "https://www.pinduoduo.com/", "", "购物网站", 4, "https://www.pinduoduo.com/favicon.ico"],
  ["天猫", "https://www.tmall.com/", "", "购物网站", 5, "https://www.tmall.com/favicon.ico"],
  
  // 工具网站
  ["GitHub", "https://github.com/", "", "工具网站", 1, "https://github.com/favicon.ico"],
  ["Stack Overflow", "https://stackoverflow.com/", "", "工具网站", 2, "https://stackoverflow.com/favicon.ico"],
  ["Notion", "https://www.notion.so/", "", "工具网站", 3, "https://www.notion.so/favicon.ico"],
  ["Trello", "https://trello.com/", "", "工具网站", 4, "https://trello.com/favicon.ico"],
  ["Slack", "https://slack.com/", "", "工具网站", 5, "https://slack.com/favicon.ico"],
  ["Microsoft 365", "https://www.office.com/", "", "工具网站", 6, "https://www.office.com/favicon.ico"],
  ["Google Drive", "https://drive.google.com/", "", "工具网站", 7, "https://drive.google.com/favicon.ico"]
];

// VIP1域名列表 - 使用黄色背景
const vip1Domains = ["google.com", "github.com"];

// VIP2域名列表 - 使用绿色背景
const vip2Domains = ["baidu.com", "bilibili.com"];

// 内网判断条件 - 用于判断当前是否在内网环境
const internalNetworkPatterns = ["192.168", "10.0.0", "172.16", "127.0.0.1", "localhost"];