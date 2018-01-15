<template>
    <div>
        <text-edit :title.sync="taskTitle"></text-edit>
        <div class="divider"></div>
        <rich-editor :text.sync="richText"></rich-editor>
        <task-box-basic></task-box-basic>
        <modal-file-list></modal-file-list>
    </div>
</template>

<script>
  import TextEdit from './TextEdit.vue'
  import RichEditor from './RichEditor.vue'
  import ModalFileList from './ModalFileList.vue'
  import TaskBoxBasic from './TaskBoxBasic.vue'

  export default {
    data () {
      return {
        taskTitle: '这是一个标题',
        richText: '<h3>aaa<h1>',
        taskList: [{
          data: 'a'
        }, {
          data: 'b'
        }]
      }
    },
    components: {
      TextEdit,
      RichEditor,
      TaskBoxBasic,
      ModalFileList
    }
  }
</script>

<style lang="scss" scoped>
    .divider {
        width: 100%;
        border-bottom: 1px solid #dedede;
        margin: 13px 0;
    }
</style>
