<template>
    <div class="border">
        <div>
            <p style="font-size: 20px; font-weight: 800;">抖音账号:跨境话你知</p>
            <p style="font-size: 20px; font-weight: 800;">小红书账号:跨境资讯情报站</p>
            <p> 10 年跨境实战经验，亲历国内电商 -> 跨境电商全平台变迁</p>
            <p>精通供应链、合规、资金通道，擅长用自动化代码替代重复人力</p>
        </div>
        <div>
            <img src="/wechat.jpg" alt="微信图">
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

</script>

<style scoped>
.border {
    border-top: 1px solid rgba(20, 20, 20, .1);
    margin-top: 20px;
    margin-bottom: 20px;
    padding-top: 10px;
    display: flex;
    align-items: center;      /* 垂直居中 */
    justify-content: space-between;
}

/* styles */
svg {
    width: 50px;
    height: 50px;
}

img {
    width: 200px;
}
p{
    margin-bottom: 6px;
}
</style>