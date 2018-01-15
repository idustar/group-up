/**
* Created by dustar on 2017/7/10.
*/

<template>
  <div id="home-container">
    <div id="home-header">
      <div id="home-left">
        <div id="project-header" v-if="currentMode === Mode.project || (currentMode === Mode.my && lastMode === Mode.project)">
          <div id="project-icon"><img :src="iconProject"></div>
          <div id="project-name">{{ projectName }}</div>
        </div>
        <div id="index-header" v-else-if="currentMode === Mode.index">
          <div id="index-name">{{ websiteName }}</div>
        </div>
        <div id="project-search">
          <el-input
            placeholder="在个人项目中搜索"
            icon="search"
            v-model="searchBarInput">
          </el-input>
        </div>
        <div id="project-add"><img :src="iconAdd"></div>
      </div>
      <div id="home-right">
        <div class="home-menu">
          <div class="home-menu-item" :class='{currentmenu: currentMenu === "feedback"}'
               @click="currentMenu='feedback'">
            <img :src="iconFeedback">
          </div>
          <div class="home-menu-item" :class='{currentmenu: currentMenu === "my"}'
               @click="currentMode=Mode.my;currentMenu='my'">
            <img :src="iconMy">
          </div>


          <div class="home-menu-item" :class='{currentmenu: currentMenu === "message"}' @click="currentMenu='message'">
            <img :src="iconMessage">
          </div>
          <el-badge v-show="messageCount>0" :value="messageCount" class="item">
          </el-badge>
          <div @click="currentMenu='setting'">
            <img id="avatar" :src="avatarDefault">
          </div>
        </div>
      </div>
    </div>
    <project v-if="currentMode === Mode.project"></project>
    <my v-else-if="currentMode === Mode.my" v-on:leaveMy="leaveMy"></my>
  </div>
</template>

<script>
  import Project from './Project.vue'
  import My from './My.vue'
  import iconProject from '@/assets/icons/nav_bar/project.png'
  import iconProjectOn from '@/assets/icons/nav_bar/project-on.png'
  import iconAdd from '@/assets/icons/nav_bar/add.png'
  import iconFeedback from '@/assets/icons/nav_bar/feedback.png'
  import iconMy from '@/assets/icons/nav_bar/my-profile.png'
  import iconMessage from '@/assets/icons/nav_bar/message.png'
  import avatarDefault from '@/assets/icons/nav_bar/blank-avatar.png'
  export default {
    data () {
      return {
        websiteName: 'GroupUp',
        projectName: 'Default Project',
        Mode: {
          index: 0,
          project: 1,
          my: 2
        },
        currentMode: 1,
        currentMenu: '',
        lastMode: 1,
        searchBarInput: '',
        messageCount: 5,
        iconProject,
        iconProjectOn,
        iconAdd,
        iconFeedback,
        iconMy,
        iconMessage,
        avatarDefault
      }
    },
    created () {
      this.initData()
    },
    mounted () {

    },
    mixins: [],
    components: {
      Project,
      My
    },
    computed: {},
    methods: {
      initData () {
      },
      enterMy () {
        this.lastMode = this.currentMode
        this.currentMode = this.Mode.my
      },
      leaveMy () {
        this.currentMode = this.lastMode
      }
    },
    watch: {
      currentMode: function () {
        this.currentMenu = ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #home-container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  img {
    width: 20px;
    height: 20px;
    margin: 15px 10px 15px 10px;
  }

  #project-add {
    height: 100%;
  }

  #home-left img {

  }

  #project-add img {
    width: 20px;
    height: 20px;
  }

  #home-header {
    padding-left: 30px;
    height: 49px;
    background: #ffffff;
    line-height: 49px;
    font-size: 18px;
    color: #3E5568;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    z-index: 10;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #home-left {
    height: 49px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  #home-left div {
    display: inline-flex;
    margin-right: 8px;
  }

  #home-right {
    height: 49px;
    display: flex;
    flex-direction: row;
    align-items: center;

  }

  #home-right div {
    display: inline-flex;
  }

  #project-search {
    width: 300px;
    padding: 0px 0 0 20px;
  }

  .home-menu {
    text-align: center;
    margin-right: 5px;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .home-menu-item {
    width: 40px;
    height: 49px;
    padding-right: 5px;
    padding-left: 5px;
    line-height: 49px;
  }

  #avatar {
    width: 40px;
    height: 40px;
    margin: 5px 5px 0 5px;
  }

  .item {
    position: relative;
    margin-top: 10px;
    margin-left: -25px;
    margin-right: 10px;
  }

</style>
