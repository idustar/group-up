<template>
    <div class="card">
        <div class="transition"></div>
        <div class="head">
            <div>
                <check-box :checked="checked" :disabled="disabled"
                           class="check"></check-box>
                <span>{{title}}</span>
            </div>
            <img src="" alt="..." class="avatar">
        </div>
        <div class="body">
            <badge class="normal-tag">4月28日截止</badge>
            <div class="icon">
                <i class="el-icon-document"></i>
                <span>0/2</span>
            </div>
        </div>
    </div>
</template>

<script>
  import CheckBox from '../CheckBox.vue'
  import Badge from '../Badge.vue'

  export default {
    props: {
      title: String
    },
    data () {
      return {
        checked: false,
        disabled: false
      }
    },
    components: {
      CheckBox,
      Badge
    }
  }
</script>

<style lang="scss" scoped>
    .card {
        box-sizing: border-box;
        position: relative;
        min-height: 40px;
        margin: 10px 8px;
        cursor: pointer;

        .transition {
            position: absolute;
            width: 5px;
            transition: width 0.2s;
            height: 100%;
            background-color: #FF4949;
            border-radius: 5px 0 0 5px;
        }

        &:hover .transition {
            width: 8px;
        }

        .head {
            background-color: #fff;
            height: 40px;
            font-size: 15px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding-left: 12px;
            padding-right: 10px;
            border-radius: 5px 5px 0 0;

            .check {
                $size: 22px;
                width: $size;
                height: $size;
                vertical-align: text-bottom;
                cursor: pointer;
            }

            .avatar {
                $size: 25px;
                width: $size;
                height: $size;
                border-radius: 50%;
            }
        }

        .body {
            background-color: #3E5568;
            display: flex;
            flex-direction: row;
            align-items: center;
            flex-wrap: wrap;
            padding: 9px 35px 11px 40px;
            border-radius: 0 0 5px 5px;

            & > * {
                margin-right: 8px;
            }

            .icon {
                color: #fff;
                font-weight: lighter;
                font-size: 14px;
            }

            .normal-tag {
                background-color: #E7F1F0;
                color: #3E5568;
            }

            .emer-tag {
                background-color: #FF4949;
                color: #fff;
            }
        }
    }

    .red-border {
        border-left: 5px solid #FF4949;
    }

    .yellow-border {
        border-left: 5px solid #F7BA2A;
    }
</style>
