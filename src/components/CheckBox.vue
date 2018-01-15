<template>
    <img :src="imgUrl" alt="..." @click="handleClick">
</template>

<script>
  import state from '@/assets/icons/index/state.png'
  import stateComplete from '@/assets/icons/index/state-complete.png'
  import stateDisable from '@/assets/icons/index/state-disable.png'

  export default {
    props: {
      disabled: Boolean,
      checked: Boolean
    },
    data () {
      return {
        disable: this.disabled,
        check: this.checked
      }
    },
    computed: {
      imgUrl () {
        if (!this.disable) {
          return this.check ? stateComplete : state
        } else {
          return stateDisable
        }
      }
    },
    methods: {
      handleClick () {
        if (!this.disable) {
          this.check = !this.check
        }
      }
    }
  }
</script>
