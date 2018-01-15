/**
* Created by dustar on 2017/7/10.
*/

<template>
  <div class="OwnerBox">
    <div id="owner-title">执行者</div>
    <owner-select :users="users" :owner="owner" @changeOwner="changeOwner">
      <div id="owner-info">
        <img id="owner-avatar" :src="isSet?users[owner].avatar:blankAvatar">
        <span id="owner-name" :class="isSet?'':'grey'">{{isSet?users[owner].name:'未认领'}}</span>
      </div>
    </owner-select>

  </div>
</template>

<script>
  import ownerSelect from './ownerSelect.vue'
  import blankAvatar from '@/assets/icons/nav_bar/blank-avatar.png'
  export default {
    name: 'OwnerBox',
    data () {
      return {
        blankAvatar,
        isSet: false,
        owner: null,
        users: [
          {avatar: blankAvatar, name: '王维'},
          {avatar: blankAvatar, name: '王昌龄'},
          {avatar: blankAvatar, name: '薛英琛'},
          {avatar: blankAvatar, name: '李碧纯'}
        ]
      }
    },
    created () {

    },
    methods: {
      changeOwner (command) {
        command = parseInt(command)
        this.owner = command >= 0 ? command : null
        this.isSet = this.owner !== null
      }
    },
    components: {
      ownerSelect
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .OwnerBox{
  }
  #owner-title {
    font-size: 12px;

  }
  #owner-info {
    font-size: 14px;
    line-height: 40px;
    display: inline-flex;
    align-items: center;
    flex-direction: row;

  }
  #owner-avatar {
    height: 22px;
    margin-right: 8px;
  }
  .grey {
    color: #C0C0C0;
  }
</style>
