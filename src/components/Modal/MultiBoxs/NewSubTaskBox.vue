/**
* Created by dustar on 2017/7/11.
*/

<template>
    <div class="NewSubTaskBox">
      <img :src="iconAdd">
      <span>添加子任务</span>
    </div>
</template>

<script>
  import iconAdd from '@/assets/icons/new_item/add-subtask.png'
  export default {
    name: 'NewSubTaskBox',
    data () {
      return {
        iconAdd
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .NewSubTaskBox {
    height: 40px;
    line-height: 40px;
    padding-left: 20px;
    font-size: 14px;
    color: #C0C0C0;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  img {
    height: 20px;
    padding-right: 5px;
  }
</style>
