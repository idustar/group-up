/**
* Created by dustar on 2017/7/10.
*/

<template>
  <div class="DeadlineBox">
    <div id="deadline-title">截止时间</div>

    <deadline-select :value2="date">
      <!--<div id="deadline-info">-->
        <img id="deadline-avatar" :src="iconCalendar">
        <!--<span id="deadline-name" :class="isSet?'':'grey'">{{ isSet?date:'点击设置' }}</span>-->
      <!--</div>-->
    </deadline-select>
  </div>
</template>

<script>
  import iconCalendar from '@/assets/icons/nav_bar/calendar.png'
  import DeadlineSelect from './DeadlineSelect.vue'
  export default {
    components: {DeadlineSelect},
    name: 'DeadlineBox',
    data () {
      return {
        iconCalendar,
        date: '',
        isSet: false
      }
    },
    created () {
      this.date = '07/22 18:00:00'
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .deadlineBox{
  }
  #deadline-title {
    font-size: 12px;

  }
  #deadline-info {
    font-size: 14px;
    line-height: 40px;
    display: inline-flex;
    align-items: center;
    flex-direction: row;

  }
  #deadline-avatar {
    height: 20px;
    margin-right: 8px;
  }
  .grey {
    color: #C0C0C0;
  }
</style>
