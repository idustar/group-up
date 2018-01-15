<template>
    <div class="header">
        <img :src="icon" alt="..." class="icon">
        <div>关联的{{type}}</div>
    </div>

</template>

<script>
  export default {
    props: {
      type: String,
      icon: String
    }
  }
</script>

<style lang="scss" scoped>
    .header {
        $ev-height: 14px;
        display: flex;
        flex-direction: row;
        font-size: $ev-height;
        line-height: $ev-height;
        margin-top: 13px;
        margin-bottom: 8px;

        .icon {
            $side: $ev-height;
            width: $side;
            height: $side;
            margin-left: 20px;
            margin-right: 7px;
        }
    }
</style>
