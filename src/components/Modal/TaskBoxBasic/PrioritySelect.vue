/**
* Created by dustar on 2017/7/11.
*/

<template>
  <el-dropdown trigger="click" :menu-align="'start'" @command="handleCommand">
    <slot class="el-dropdown-link">
      Error
    </slot>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-for="(item, key) in items" :key="key" :command="key.toString()">
          <span class="item">
            <div :class="owner===key?'active':''" class="user-item"><img class="avatar" :src="item.icon">{{item.title}}</div>
            <div v-if="owner === key"><i class="el-icon-check"></i></div>
          </span>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
    export default {
      name: 'PrioritySelect',
      data () {
        return {
        }
      },
      props: [
        'items',
        'owner'
      ],
      methods: {
        handleCommand (command) {
          this.$emit('changeP', command)
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .item {

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
