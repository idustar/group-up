/**
* Created by dustar on 2017/7/10.
*/

<template>
    <div id="TaskBoxBasic">
      <div class="taskBox">
        <owner-box class="taskSubBox rightBorder" id="ownerBox"></owner-box>
        <deadline-box class="taskSubBox rightBorder" id="deadlineBox"></deadline-box>
        <priority-box class="taskSubBox rightBorder" id="priorityBox">priorityBox</priority-box>
        <repeat-box class="taskSubBox" id="repeatBox">repeatBox</repeat-box>
      </div>
    </div>
</template>

<script>
  import OwnerBox from './TaskBoxBasic/OwnerBox.vue'
  import DeadlineBox from './TaskBoxBasic/DeadlineBox.vue'
  import PriorityBox from './TaskBoxBasic/PriorityBox.vue'
  import RepeatBox from './TaskBoxBasic/RepeatBox.vue'
  export default {
    components: {
      RepeatBox,
      PriorityBox,
      DeadlineBox,
      OwnerBox
    },
    name: 'TaskBoxBasic'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .taskBox {
    background: #ffffff;
    flex:1;
    border: 0.5px #dedede solid;
    border-radius: 4px;
    display: flex;
    justify-content: center;
  }
  .taskSubBox {
    flex: 1;
    padding: 10px 18px 0px 18px;
  }
  .rightBorder {
    border-right: 0.5px #dedede solid;
  }

  #repeatBox {
    min-width: 90px;
  }

</style>
