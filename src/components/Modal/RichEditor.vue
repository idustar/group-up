<template>
    <div class="rich-wrapper">
        <div class="icon-wrapper">
            <img :src="intro" alt="" class="icon">
        </div>
        <div class="outer" v-show="editable">
            <vue-editor v-model="richData"
                        :editorToolbar="customToolbar"
                        class="rich-text"></vue-editor>
            <div class="btn-wrapper">
                <el-button type="text" class="cancel-btn" @click="cancel">取消</el-button>
                <el-button type="primary" @click="save">保存</el-button>
            </div>
        </div>
        <div class="show-outer" v-show="!editable"
             v-html="richData" @click="edit"></div>
    </div>
</template>

<script>
  import { VueEditor } from 'vue2-editor'

  import intro from '@/assets/icons/new_item/intro.png'

  export default {
    props: {
      text: String
    },
    data () {
      return {
        customToolbar: [
          ['bold', 'italic', 'underline'],
          [{'list': 'ordered'}, {'list': 'bullet'}],
          [{'header': [1, 2, 3, false]}],
          ['blockquote', 'code-block']
        ],
        richData: this.text,
        intro,
        editable: false
      }
    },
    components: {
      VueEditor
    },
    methods: {
      edit () {
        this.editable = true
      },
      cancel () {
        this.editable = false
        this.richData = this.text
      },
      save () {
        this.editable = false

        this.$emit('update:text', this.richData)
      }
    }
  }
</script>

<style lang="scss" scoped>
    .rich-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 10px;
        border: 1px solid #dedede;
        border-radius: 4px;
        background-color: #ffffff;
    }

    .outer {
        display: flex;
        flex-direction: column;
    }

    .rich-text {
        width: 550px;
    }

    .icon-wrapper {
        display: flex;
        justify-content: flex-start;
        .icon {
            $side: 18px;
            width: $side;
            height: $side;
        }
    }

    .btn-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        margin-top: 10px;

        .cancel-btn {
            color: #808080;
        }
    }

    .show-outer {
        width: 548px;
        &:hover {
            background-color: #EAEAEA;
        }
    }
</style>
