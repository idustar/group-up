/**
* Created by dustar on 2017/7/10.
*/

<template>
  <div id="my-container">
    <div id="my-header" ref="choosePage">
      <div id="my-header-left" class="my-header-item"></div>
      <div class="change-current-page my-header-item">

        <div class="change-current-page-item" :class='{currentpage: currentPage==="recent"}' @click="currentPage = 'recent'">近期的事</div>
        <div class="change-current-page-item" :class='{currentpage: currentPage==="tasks"}' @click="currentPage = 'tasks'">任务</div>
        <div class="change-current-page-item" :class='{currentpage: currentPage==="calenders"}' @click="currentPage = 'calenders'">日程</div>
        <div class="change-current-page-item" :class='{currentpage: currentPage==="files"}' @click="currentPage = 'files'">文件</div>
        <div class="change-current-page-item" :class='{currentpage: currentPage==="favorites"}' @click="currentPage = 'favorites'">收藏</div>

      </div>
      <div class="my-close my-header-item" @click="leaveMy">
        X
      </div>
    </div>
    <transition name="fade-choose">
      <section v-show="currentPage === 'recent'" class="recent-container">
        <recent>recent</recent>
      </section>
    </transition>
    <transition name="fade-choose">
      <section v-show="currentPage === 'tasks'" class="tasks-container">
        <tasks>tasks</tasks>
      </section>
    </transition>
    <transition name="fade-choose">
      <section v-show="currentPage === 'calenders'" class="calenders-container">
        <myCalenders>myCalenders</myCalenders>
      </section>
    </transition>
    <transition name="fade-choose">
      <section v-show="currentPage === 'files'" class="files-container">
        <files>Files</files>
      </section>
    </transition>
    <transition name="fade-choose">
      <section v-show="currentPage === 'favorites'" class="favorites-container">
        <favorite>Favorites</favorite>
      </section>
    </transition>


  </div>
</template>

<script>
  export default {
    name: 'My',
    data () {
      return {
        currentPage: 'tasks' // 当前页面
      }
    },
    methods: {
      leaveMy () {
        this.$emit('leaveMy')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #my-container {
    height: 578px;
  }

  #my-header {
    height: 48px;
    background: #E7F1F0;
    line-height: 48px;
    font-size: 16px;
    color:#97A4B1;
    border-bottom: #A1BDBF 1px solid;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .my-header-item {

  }


  .change-current-page-item {
    display: inline-block;
    width: 80px;
    line-height: 40px;
    height: 40px;
    border-bottom: 4px transparent;
    padding-top: 4px;
    text-align: center;
  }
  .change-current-page-item :hover {
    border-bottom: 4px #33CCCC solid;

  }
  .currentpage {
    font-weight: bold;
    color: #33CCCC;
    border-bottom: 4px #33CCCC solid;

  }

  .fade-choose-enter-active, .fade-choose-leave-active {
    transition: opacity 1s;
  }
  .fade-choose-leave, .fade-choose-leave-active {
    display: none;
  }
  .fade-choose-enter, .fade-choose-leave-active {
    opacity: 0;
  }
  .slide-fade-enter-active {
    transition: all .5s ease;
  }
  .slide-fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(300px);
    opacity: 0;
  }
  .my-close,#my-header-left {
    width: 30px;
  }
</style>
