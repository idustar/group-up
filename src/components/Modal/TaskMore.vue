<template>
    <div>
        <div class="drop-header">任务名称</div>
        <el-dropdown-item v-for="(item, index) in imgData" :key="index">
            <img :src="item.src" alt="..." class="item-icon">
            <span>{{ item.text }}</span>
        </el-dropdown-item>
    </div>
</template>

<script>
  import copy from '@/assets/icons/drop_down_menu/copy.png'
  import copyLink from '@/assets/icons/drop_down_menu/copy-link.png'

  export default {
    data () {
      return {
        imgData: [{
          src: copy,
          text: '复制任务'
        }, {
          src: copyLink,
          text: '复制任务链接'
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>
    .drop-header {
        height: 38px;
        box-sizing: border-box;
        font-size: 16px;
        font-weight: bold;
        border-bottom: 1px solid #C0C0C0;
        text-align: center;
        padding-top: 8px;
    }

    .item-icon {
        $l: 14px;
        width: $l;
        height: $l;
        vertical-align: middle;
    }

    .dropdown-item {
        height: 14px;
    }
</style>
