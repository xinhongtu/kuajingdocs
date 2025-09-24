import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  //生成url文件供百度api提交使用
  // async buildEnd(siteConfig) {
  //   const baseURL = 'https://kuajingdocs.com' // ✅ 替换为你的实际域名
  //   const urls = []

  //   for (const page of siteConfig.pages) {
  //     // 跳过非公开页面（如 404）
  //     if (page.includes('404')) continue

  //     // 将 .md 转为 .html，并拼成完整 URL
  //     const url = `${baseURL}/${page}`
  //       .replace(/\.md$/, '.html')
  //       .replace(/\/index\.html$/, '/') // 首页优化
  //     urls.push(url)
  //   }

  //   const outPath = path.join(siteConfig.outDir, 'urls.txt')
  //   fs.writeFileSync(outPath, urls.join('\n'), 'utf-8')
  //   console.log(`✅ 已生成 urls.txt，共 ${urls.length} 条链接`)
  // },
 
   sitemap: {
    hostname: 'https://kuajingdoc.com'
  },
  title: "Temu跨境电商入门手册",
  // 语言
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],  // 路径以 public 为根
    ['meta', { name: 'keywords', content: 'Temu,跨境电商,0库存,一件代发,实操教程,亚马逊到Temu,跨境货源,合规,跨境物流,POD' }],
    ['meta', { name: 'baidu-site-verification', content: 'codeva-KB4Tsc1TcO' }],
    ['meta', { name: 'msvalidate.01', content: '3BCF94B10FAD93322860B7BB8B29A595' }],
    ['script',{},`var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?6bc004e417883adc5c3a678cddcc748a";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();`]
  ],
  themeConfig: {
     search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'Temu教程', link: '/art/1/qibu' },
      { text: '联系我', link: '/contact' }
    ],
    sidebar: [
      {
        text: '第1章 基础认知篇',
        collapsed: false,
        items: [
          { text: '1.1 消除恐惧：跨境≠外贸高门槛', link: '/art/1/qibu' },
          { text: '1.2 启动资金真相：从 0 到出单要花的每一分钱', link: '/art/1/2' },
          { text: '1.3 合规比盈利更值得关注:Temu 红线全解析', link: '/art/1/3' }
        ]
      },
      {
        text: '第2章 开店实操篇',
        collapsed: true,
        items: [
          { text: '2.1 商家入驻 - 店铺注册申请', link: '/art/2/1' },
          { text: '2.2 确定包邮区域', link: '/art/2/2' },
          { text: '2.3 仓库地址管理', link: '/art/2/3' },
          { text: '2.4 创建运费模板', link: '/art/2/4' }
        ]
      },
      {
        text: '第3章 商品上架篇',
        collapsed: true,
        items: [
          { text: '3.1 合规中心商品标签实拍', link: '/art/ch3/3-1' },
          { text: '3.2 价格申报常见问题', link: '/art/ch3/3-2' },
          { text: '3.3 商品图片提示', link: '/art/ch3/3-3' },
          { text: '3.4 商品详情违规情况', link: '/art/ch3/3-4' },
          { text: '3.5 商品说明上传', link: '/art/ch3/3-5' },
          { text: '3.6 商品资质上传', link: '/art/ch3/3-6' },
          { text: '3.7 商品库存维护', link: '/art/ch3/3-7' }
        ]
      },
      {
        text: '第4章 订单发货篇',
        collapsed: true,
        items: [
          { text: '4.1 在线下单发货', link: '/art/ch4/4-1' },
          { text: '4.2 查看订单管理', link: '/art/ch4/4-2' },
          { text: '4.3 创建发货仓库', link: '/art/ch4/4-3' },
          { text: '4.4 订单管理', link: '/art/ch4/4-4' }
        ]
      },
      {
        text: '第5章 运营技巧篇',
        collapsed: true,
        items: [
          { text: '5.1 搬运或者采集', link: '/art/ch5/5-1' },
          { text: '5.2 POD模式', link: '/art/ch5/5-2' },
          { text: '5.3 差异化的思考', link: '/art/ch5/5-3' },
        ]
      },
      {
        text: '第6章 货源篇',
        collapsed: true,
        items: [
          { text: '6.1 帮你解决货源问题', link: '/art/ch6/6-1' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'xiaohongshu', link: 'https://www.xiaohongshu.com/user/profile/62f2e3fc000000001f0170d5' }
    ]
  }
})
