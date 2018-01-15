/**
* Created by dustar on 2017/7/11.
*/

<template>
    <div class="SubTasksBox">
      <multi-box :boxs="boxs"></multi-box>
      <multi-box :boxs="boxs1"></multi-box>
    </div>
</template>

<script>
  import MultiBox from './MultiBox.vue'
  export default {
    components: {MultiBox},
    name: 'SubTasksBox',
    data () {
      return {
        boxs: [
          {name: 'task', data: '我是小红花'},
          {name: 'task', data: '金山大道西静路'},
          {name: 'task', data: '爱马仕没'},
          {name: 'task', data: '对讲机的居然夫人天津天津提高警惕阮经天金融界突然'},
          {name: 'task', data: '东京教父'},
          {name: 'new-sub-task', data: ''}
        ],
        boxs1: [

        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
