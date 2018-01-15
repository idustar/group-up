<template>
    <div>
        <modal-attach-head
                type="任务" :icon="icon">
        </modal-attach-head>
        <div>
            <multi-list :list="fileList">
                <template slot="item" scope="scope">
                    <modal-attach-body
                            :executor="scope.props.executor"
                            :avatar="scope.props.avatar">
                        <div class="task-slot">
                            <el-checkbox v-model="scope.props.checked">{{scope.props.title}}</el-checkbox>
                            <div>{{scope.props.state}}</div>
                        </div>
                    </modal-attach-body>
                </template>
            </multi-list>
        </div>
    </div>
</template>

<script>
  import ModalAttachHead from './ModalAttachHead.vue'
  import ModalAttachBody from './ModalAttachBody.vue'
  import MultiList from './MultiList.vue'

  import task from '@/assets/icons/nav_bar/project.png'

  export default {
    data () {
      return {
        icon: task,
        fileList: [{
          executor: 'Simon',
          avatar: task,
          checked: false,
          title: 'first',
          state: '未处理'
        }, {
          executor: ' dustark',
          avatar: task,
          checked: true,
          title: 'second',
          state: '已处理'
        }]
      }
    },
    components: {
      ModalAttachHead,
      ModalAttachBody,
      MultiList
    }
  }
</script>

<style lang="scss" scoped>
    .task-slot {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
</style>
