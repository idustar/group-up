<template>
    <div class="list-item">
        <div class="avatar-wrapper">
            <img :src="avatar" class="avatar"/>
            <div>{{executor}}</div>
        </div>
        <span class="divider"></span>
        <div class="slot">
            <slot></slot>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      executor: String,
      avatar: String
    }
  }
</script>

<style lang="scss" scoped>
    .list-item {
        min-height: 36px;
        height: 100%;
        background-color: #ffffff;
        font-size: 14px;
        display: flex;
        flex-direction: row;
        align-items: center;

        .avatar-wrapper {
            display: flex;
            align-items: center;
            min-width: 157px;

            .avatar {
                $side: 23px;
                width: $side;
                height: $side;
                border-radius: 50%;
                margin-left: 16px;
                margin-right: 10px;
            }
        }
    }

    .divider {
        border-left: 1px solid #dedede;
        min-height: inherit;
    }

    .slot {
        box-sizing: border-box;
        padding: 7px 12px;
        width: 100%;
    }

</style>
