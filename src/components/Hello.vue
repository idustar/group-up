<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
        <h2>counter</h2>
        <div>
            <el-button @click="getState">按钮</el-button>
            <button @click="async">+</button>
            <span>{{ count }}</span>
            <button @click="sub">-</button>
            <button @click="reset">reset</button>
        </div>
    </div>
</template>

<script>
  import { mapMutations, mapActions, mapState } from 'vuex'

  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        visible: true
      }
    },

    computed: mapState({
      'count': state => state.hello.count
    }),

    methods: {
      ...mapMutations({
        'add': 'hello/INCREASE',
        'sub': 'hello/DOWN',
        'reset': 'hello/RESET'
      }),
      ...mapActions({
        'async': 'asyncIncrease'
      }),
      getState () {
        console.log(this.$store.state)
      }
    }
  }
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
