---
head:
  - - meta
    - name: keywords
      content: Temu客服联系,Temu开店咨询,Temu问题解答,跨境电商导师,Temu运营指导,Temu技术支持,Temu合作咨询,跨境电商培训,Temu账号问题,Temu店铺优化
  - - meta
    - name: description
      content: 联系Temu跨境电商专业导师！获取一对一开店咨询、运营指导、问题解答服务。抖音号「跨境话你知」、小红书「跨境资讯情报站」、微信EvanZhu1987，为您提供专业的Temu跨境电商技术支持和解惑服务。
prev: false
next: false
---
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>
<div class="card">
    <!-- 圆形头像 -->
    <div class="tou">
      <img
        src="https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo31m9ksnscmg505onisfu7qs6l9opvkvg?imageView2/2/w/540/format/webp|imageMogr2/strip"
        alt="头像"
      />
    </div>
    <div class="content">
      <h3>跨境话你知</h3>
      <p>Temu 开店咨询 · 运营指导 · 技术支持</p>
      <ul class="contact">
        <li>抖音：跨境话你知</li>
        <li>小红书：跨境资讯情报站</li>
        <li>微信：EvanZhu1987</li>
      </ul>
    </div>
    <div class="qr-box">
      <img
        class="qr"
        src="/wechat.jpg"
        alt="微信二维码"
        @error="qrError"
      />
      <span class="qr-txt">扫码加微信</span>
    </div>
  </div>

<style >
  .qr-box {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 12px;
}
.qr {
  width: 140px;
  display: block;
  border-radius: 8px;
}
.qr-txt {
  margin-top: 8px;
  font-size: 13px;
  color: var(--vp-c-text-2);
}
.card {
  margin: 32px auto;
  max-width: 100%;
  background: var(--vp-c-bg-soft);   /* VitePress 内置：自动随黑白切换 */
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  box-shadow: var(--vp-shadow-1);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

ul,li {
  list-style: none;
  margin: 0;
  padding: 0;
}
/* ===== 圆形头像 ===== */
.tou {
  width: 120px;
  height: 120px;
  margin: 0 auto 20px;
  border-radius: 50%;
  overflow: hidden;
  
}
.tou img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* ===== 内容区 ===== */
.content h3 {
  margin: 0 0 8px;
  font-size: 20px;
  color: var(--vp-c-text-1);
}
.content p {
  margin: 0 0 16px;
  font-size: 14px;
  color: var(--vp-c-text-2);
}

.contact {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 14px;
  color: var(--vp-c-text-2);
}
.contact li + li {
  margin-top: 6px;
}
</style>
