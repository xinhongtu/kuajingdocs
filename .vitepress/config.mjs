import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Temu跨境电商入门手册",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]   // 路径以 public 为根
  ],
  description: "帮助中国卖家从零到一,实现跨境梦想",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'Temu教程', link: '/docs/qibu' },
      { text: '联系我', link: '/contact' }
    ],
    sidebar: [
  {
    text: '第1章 基础认知篇',
    collapsed: false,
    items: [
      { text: '1.1 消除恐惧：跨境≠外贸高门槛', link: '/docs/qibu'},
      { text: '1.2 0 库存物流：中转仓一步搞定', link: '/docs/ch1/1-2' },
      { text: '1.3 平台规则速览：红线与灰区', link: '/docs/ch1/1-3' }
    ]
  },
  {
    text: '第2章 开店准备篇',
    collapsed: true,
    items: [
      { text: '2.1 注册流程：个人/企业店铺选择', link: '/docs/ch2/2-1' },
      { text: '2.2 资质材料清单：执照·账户·电话卡', link: '/docs/ch2/2-2' },
      { text: '2.3 店铺信息设置：名字·LOGO·退货地址', link: '/docs/ch2/2-3' }
    ]
  },
  {
    text: '第3章 选品上架篇',
    collapsed: true,
    items: [
      { text: '3.1 大数据选品：热搜词+插件', link: '/docs/ch3/3-1' },
      { text: '3.2 货源渠道：1688·拼多多·档口', link: '/docs/ch3/3-2' },
      { text: '3.3 商品发布：标题·主图·SKU 模板', link: '/docs/ch3/3-3' },
      { text: '3.4 定价策略：成本·运费·扣点测算', link: '/docs/ch3/3-4' }
    ]
  },
  {
    text: '第4章 订单履约篇',
    collapsed: true,
    items: [
      { text: '4.1 出单通知：状态与时效要求', link: '/docs/ch4/4-1' },
      { text: '4.2 打包贴单：标准面单+防损技巧', link: '/docs/ch4/4-2' },
      { text: '4.3 中转仓寄送：快递选择+月结账号', link: '/docs/ch4/4-3' },
      { text: '4.4 售后处理：退货·仅退款·二次销售', link: '/docs/ch4/4-4' }
    ]
  },
  {
    text: '第5章 流量转化篇',
    collapsed: true,
    items: [
      { text: '5.1 搜索排名逻辑：销量·评分·关键词', link: '/docs/ch5/5-1' },
      { text: '5.2 营销活动：秒杀·优惠券设置', link: '/docs/ch5/5-2' },
      { text: '5.3 广告投放：OCPX 与自定义计划', link: '/docs/ch5/5-3' },
      { text: '5.4 数据报表：曝光·点击·转化漏斗', link: '/docs/ch5/5-4' }
    ]
  },
  {
    text: '第6章 风险合规篇',
    collapsed: true,
    items: [
      { text: '6.1 知识产权：商标·专利·版权避坑', link: '/docs/ch6/6-1' },
      { text: '6.2 资金合规：私账/公账·税务义务', link: '/docs/ch6/6-2' },
      { text: '6.3 账户安全：防关联·防钓鱼·2FA', link: '/docs/ch6/6-3' }
    ]
  },
  {
    text: '第7章 扩展进阶篇',
    collapsed: true,
    items: [
      { text: '7.1 多店铺布局：品牌店·杂货店打法', link: '/docs/ch7/7-1' },
      { text: '7.2 海外仓入驻：条件·费用·周转率', link: '/docs/ch7/7-2' },
      { text: '7.3 团队搭建：选品·运营·客服分工', link: '/docs/ch7/7-3' }
    ]
  }
],

    socialLinks: [
      { icon: 'xiaohongshu', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
