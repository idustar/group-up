/**
* Created by dustar on 2017/7/11.
*/

<template>
  <div id="deadline">

    <div class="block">
      <!--<slot>-->
        <!--Error-->
      <!--</slot>-->
      <el-date-picker
        v-model="value2"
        type="date"
        :editable="true"
        placeholder="选择日期"
        align="left"
        size="small"
        format="MM月dd日"
        :picker-options="pickerOptions1">
      </el-date-picker>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'DeadlineSelect',
      data () {
        return {
          pickerOptions1: {
            shortcuts: [{
              text: '今天',
              onClick (picker) {
                picker.$emit('pick', new Date())
              }
            }, {
              text: '昨天',
              onClick (picker) {
                const date = new Date()
                date.setTime(date.getTime() - 3600 * 1000 * 24)
                picker.$emit('pick', date)
              }
            }, {
              text: '一周前',
              onClick (picker) {
                const date = new Date()
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
                picker.$emit('pick', date)
              }
            }]
          },
          value1: ''
        }
      },
      props: [
        'value2'
      ]
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.block {
  padding-top: 5px;
}
</style>
