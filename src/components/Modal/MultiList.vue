<template>
    <div>
        <div v-for="item, index in list"
             :class="'multi-list-item ' + (isHead(index) ? 'head-item ': '') + (isTail(index) ? 'tail-item': '')">
            <slot name="item"
                  :props="item"
                  :index="index"
            ></slot>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      list: Array
    },
    methods: {
      isHead (index) {
        return index === 0
      },
      isTail (index) {
        return index === this.list.length - 1
      }
    }
  }
</script>

<style lang="scss" scoped>
    $radius: 4px;
    .multi-list-item {
        border-width: 1px 1px 0 1px;
        border-style: solid;
        border-color: #dedede;
    }

    .head-item {
        border-top-left-radius: $radius;
        border-top-right-radius: $radius;
    }

    .tail-item {
        border-bottom-left-radius: $radius;
        border-bottom-right-radius: $radius;
        border-bottom-width: 1px;
    }
</style>
