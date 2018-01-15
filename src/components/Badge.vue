<template>
    <div class="badge">
        <slot></slot>
    </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
    .badge {
        background-color: #33CCCC;
        border-radius: 10px;
        color: #fff;
        display: inline-block;
        font-size: 12px;
        height: 18px;
        line-height: 18px;
        padding: 0 6px;
        text-align: center;
    }
</style>
