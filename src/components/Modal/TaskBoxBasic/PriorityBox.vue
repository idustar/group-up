/**
* Created by dustar on 2017/7/10.
*/

<template>
  <div class="PriorityBox">
    <div id="priority-title">优先级</div>
    <priority-select :items="items" :owner="mode" @changeP="changeP">
      <div id="priority-info">
        <img id="priority-avatar" :src="items[mode].icon">
        <span id="priority-name" :class="'mode-'+mode">{{items[mode].title}}</span>
      </div>
    </priority-select>
  </div>
</template>

<script>
  import Vital from '@/assets/icons/new_item/priority-vital.png'
  import Emer from '@/assets/icons/new_item/priority-emergent.png'
  import Easy from '@/assets/icons/new_item/priority-easy.png'
  import PrioritySelect from './PrioritySelect.vue'
  export default {
    components: {PrioritySelect},
    name: 'PriorityBox',
    data () {
      return {
        Modes: {
          easy: 0,
          emer: 1,
          vital: 2
        },
        isSet: true,
        Vital,
        Emer,
        Easy,
        items: [],
        mode: 0

      }
    },
    methods: {
      changeP (command) {
        this.mode = parseInt(command)
      }
    },
    created () {
      this.items = [
        {icon: this.Easy, title: '普通'},
        {icon: this.Emer, title: '紧急'},
        {icon: this.Vital, title: '非常紧急'}
      ]
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .priorityBox{
  }
  #priority-title {
    font-size: 12px;

  }
  #priority-info {
    font-size: 14px;
    line-height: 40px;
    display: inline-flex;
    align-items: center;
    flex-direction: row;

  }
  #priority-avatar {
    height: 22px;
    margin-right: 8px;
  }
  .mode-2 {
    color: #FF4949;
  }
  .mode-1 {
    color: #F7BA2A;
  }
  .mode-0 {
    color: #13CE66;
  }

</style>
