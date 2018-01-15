<template>
    <div id="app">
        <transition name="router-fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
  export default {}
</script>

<style lang="scss">
    html, body, #app {
        height: 100vh;
        min-width: 100%;
    }

    .router-fade-enter-active, .router-fade-leave-active {
        transition: opacity .3s;
    }

    .el-dialog__wrapper {
        .el-dialog--small {
            background: #f7f7f7 !important;
            max-height: 78vh;
            overflow-y: scroll;
        }
    }

    .ql-toolbar {
        background-color: #eeeeee;
    }

    #quill-container {
        height: 200px !important;
    }

    .router-fade-enter, .router-fade-leave-active {
        opacity: 0;
    }

    .el-dialog__wrapper {
        .el-dialog--small {
            background: #F8F8F8;
            max-height: 78vh;
            overflow-y: scroll;
        }
    }

    .el-date-editor > .el-input__inner {
        border: 0 !important;
    }

</style>
