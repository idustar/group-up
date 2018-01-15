<template>
    <el-dialog
            :visible="visible"
            :lock-scroll="true"
            :show-close="false"
            size="small">
        <span slot="title">
            <modal-header :onClose="closeModal">
                <span slot="title">
                    <slot name="title"></slot>
                </span>
                <div slot="drop-down">
                    <slot name="drop-down"></slot>
                </div>
            </modal-header>
        </span>
        <slot name="content">默认信息</slot>
        <span slot="footer" class="dialog-footer">
            <slot name="footer"></slot>
        </span>
    </el-dialog>
</template>

<script>
  import ModalHeader from './ModalHeader.vue'
  export default {
    data () {
      return {
        visible: true
      }
    },
    components: {
      ModalHeader
    },
    methods: {
      closeModal () {
        this.visible = false
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
