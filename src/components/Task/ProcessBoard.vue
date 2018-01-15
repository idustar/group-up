<template>
    <div class="process-board">
        <header class="process-head">
            <div class="left">
                <span class="state">{{processName}}</span>
                <badge>12</badge>
            </div>
            <i class="el-icon-more"></i>
        </header>
        <draggable v-model="list" class="drag-wrapper" :options="dragOptions">
            <task-card v-for="task, index in list" :key="index"
                       :title="task"></task-card>
        </draggable>
        <footer class="process-foot">
            <img :src="addIcon" alt="..." class="icon">
            <span class="text">添加任务</span>
        </footer>
    </div>
</template>

<script>
  import Draggable from 'vuedraggable'

  import addIcon from '@/assets/icons/nav_bar/add.png'
  import TaskCard from './TaskCard.vue'
  import Badge from '../Badge.vue'

  export default {
    props: {
      processName: String,
      taskList: Array
    },
    data () {
      return {
        addIcon,
        list: this.taskList
      }
    },
    components: {
      TaskCard,
      Badge,
      Draggable
    },
    computed: {
      dragOptions () {
        return {
          group: 'task',
          ghostClass: 'ghost'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
    .ghost {
        opacity: .5;
        background: #C8EBFB;
    }

    .process-board {
        width: 290px;
        height: calc(100vh - 117px);
        background-color: #E7F1F0;
        margin-right: 20px;
        box-sizing: border-box;
        border-bottom: 5px solid #33CCCC;
        border-radius: 4px;
        overflow-y: scroll;

        &:first-child {
            margin-left: 15px;
        }

        .process-head {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 13px 15px 13px 25px;
            font-size: 16px;
            color: #888888;

            .left {
                display: flex;
                flex-direction: row;
                align-items: center;

                .state {
                    margin-right: 6px;
                }
            }

            & > i {
                cursor: pointer;
            }
        }

        .drag-wrapper {
            min-height: 20px;
        }

        .process-foot {
            display: flex;
            flex-direction: row;
            margin: 10px 15px 15px 25px;
            cursor: pointer;

            .icon {
                $size: 18px;
                width: $size;
                height: $size;
                margin-right: 5px;
            }

            .text {
                font-size: 14px;
                color: #33CCCC;
            }
        }
    }
</style>
