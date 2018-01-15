/**
* Created by dustar on 2017/7/10.
*/

<template>
  <div class="RepeatBox">
    <div id="repeat-title">重复</div>
    <repeat-select :mode="mode" :items="repeats" @changeR="changeR">
      <div id="repeat-info">
        <img id="repeat-avatar" :src="repeatIcon">
        <span id="repeat-name" :class="mode !== 0?'':'grey'">{{ repeats[mode] }}</span>
      </div>
    </repeat-select>

  </div>
</template>

<script>
  import repeatIcon from '@/assets/icons/new_item/repeat.png'
  import RepeatSelect from './RepeatSelect.vue'
  export default {
    components: {RepeatSelect},
    name: 'RepeatBox',
    data () {
      return {
        repeatIcon,
        mode: 0,
        repeats: ['不重复', '每天重复', '每周重复', '每月重复', '每年重复']
      }
    },
    methods: {
      changeR (command) {
        this.mode = parseInt(command)
      }
    },
    created () {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .repeatBox{
  }
  #repeat-title {
    font-size: 12px;
    repeat: '';
    isSet: false;

  }
  #repeat-info {
    font-size: 14px;
    line-height: 40px;
    display: inline-flex;
    align-items: center;
    flex-direction: row;

  }
  #repeat-avatar {
    height: 16px;
    margin-right: 8px;
  }
  .grey {
    color: #C0C0C0;
  }
</style>
