/**
* Created by dustar on 2017/7/11.
*/

<template>
  <el-dropdown trigger="click" :menu-align="'start'" @command="handleCommand">
    <slot class="el-dropdown-link">
      Error
    </slot>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item disabled>可认领用户列表</el-dropdown-item>
        <el-dropdown-item :command="'-1'">
          <span class="user">
            <div :class="owner===null?'active':''" class="user-item"><img class="avatar" :src="blankAvatar">未认领</div>
            <div v-if="owner === null"><i class="el-icon-check"></i></div>
          </span>
        </el-dropdown-item>
        <el-dropdown-item v-for="(user, key) in users" :key="key" :command="key.toString()">
          <span class="user">
            <div :class="owner===key?'active':''" class="user-item"><img class="avatar" :src="user.avatar">{{user.name}}</div>
            <div v-if="owner === key"><i class="el-icon-check"></i></div>
          </span>
        </el-dropdown-item>
      </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
  import blankAvatar from '@/assets/icons/nav_bar/blank-avatar.png'
  export default {
    name: 'OwnerSelect',
    data () {
      return {
        name: 'hi',
        blankAvatar
      }
    },
    props: [
      'users',
      'owner'
    ],
    methods: {
      handleCommand (command) {
        this.$emit('changeOwner', command)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .user {

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .user-item {
    color: #475669;
    display: flex;
    align-items: center;
  }
  .active {
    color:#33CCCC;
  }
  .avatar {
    height: 20px;
    padding-right: 10px;
  }
  i {
    color: #13CE66;
  }
</style>
