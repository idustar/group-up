<template>
  <div id="comment-box">
    <el-input id="comment-input" size="large" v-model="input" placeholder="@提及他人，按Enter键快速发布" @focus="showPanel" @blur="hidePanel"></el-input>
    <div id="comment-panel" v-show="isShowPanel">
      <span class="tip" v-if="userCount>0">将有{{userCount}}个人接收通知</span>
      <span class="tip blank" v-else>没有人会收到通知</span>
      <el-button type="text" @click="cancel" icon="close"> 清 空</el-button>
      <el-button id="submit" type="primary" @click="comment" icon="check"> 发 布</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        input: '1',
        isShowPanel: false,
        userCount: 0
      }
    },
    props: [
    ],
    methods: {
      showPanel () {
        this.isShowPanel = true
      },
      hidePanel () {
        setTimeout(() => {
          this.isShowPanel = false
        }, 100)
      },
      comment () {
        this.input = ''
      },
      cancel () {
        this.input = ''
      }
    }
  }
</script>

<style scoped>
  #comment-box {
    margin-left: -20px;
    margin-right: -20px;
    flex: 1;
    background: white;
    border-top: 1px solid #dedede;
    padding-bottom: 10px;
    margin-bottom: -15px;
    display:flex;
    flex-direction: column;
    align-items: center;
  }
  #comment-input {
    width: 93%;
    margin-top: 15px;
    /*border:2px blue solid;*/
  }
  #comment-panel {
    margin-top: -3px;
    width: 92.7%;
    background: white;
    height: 40px;
    z-index: 50;

    border: 0.5px #33CCCC solid;
    border-radius: 0 0 4px 4px;
  }

  #submit {
    margin-left: 15px;
    margin-right: 5px;
    margin-top: 2px;
    width: 100px;
  }

  .tip {
    float: left;
    margin: 10px 0 0 10px;
    color: #A1BDBF;
  }
  .blank {
    color: #D8D8D8;
  }

</style>
