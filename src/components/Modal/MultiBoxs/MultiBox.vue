/**
* Created by dustar on 2017/7/11.
*/

<template>
    <div class="MultiBox">
      <div v-for="(box, key) in boxs" :key="key" class="box" :class="{'box-top' : key === 0, 'box-bottom' : key === boxs.length-1}">
        <component :is="box.name" :data="box.data">
        </component>
      </div>
    </div>
</template>


<script>
  import task from './SubTaskBox.vue'
  import newSubTask from './NewSubTaskBox.vue'

  export default {
    components: {task, newSubTask},
    name: 'MultiBox',
    data () {
      return {
        len: 0
      }
    },
    props: [
      'boxs'
    ],
    watch: {
      boxs: function (val, oldVal) {
        this.len = this.boxs.length
      }
    },
    created () {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box {
    border: 0.5px #dedede solid;
    border-bottom: 0;
    min-height: 30px;
    flex: 100%;
    border-radius: 0;
    background: white;
  }
  .box-top {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  .box-bottom {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-bottom: 0.5px #dedede solid;
  }
</style>
