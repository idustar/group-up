<template>
    <input type="text" spellcheck="false"
           :class="textClass"
           :value="textData"
           @click="focus"
           @blur="lose"
           @change="changeValue">
</template>

<script>
  export default {
    props: {
      title: String
    },
    data () {
      return {
        blurState: false
      }
    },
    computed: {
      textClass () {
        return 'text-input ' + (this.blurState ? 'text-bg' : '')
      },
      textData () {
        return this.title
      }
    },
    methods: {
      focus () {
        this.blurState = true
      },
      lose () {
        this.blurState = false
      },
      changeValue (e) {
        const value = e.target.value || this.title
        this.$emit('update:title', value)
      }
    }
  }
</script>

<style lang="scss" scoped>
    .text-bg {
        background-color: #EAEAEA !important;
    }

    .text-input {
        border: 0;
        outline: none;
        background-color: #F8F8F8;
        line-height: 32px;
        font-size: 24px;
        width: 100%;
        border-radius: 4px;

        &:hover {
            background-color: #EAEAEA;
        }
    }
</style>
