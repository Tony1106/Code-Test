<template>
  <div class="container flex-row">
    <div class="flex-row space-between">
      <div class="logo">
        <img src="@/assets/logo.png" alt />
      </div>
      <div class="content-right">
        <div class="flex-row">
          <div :class="['menu', {'show': isShowMenu}]">
            <ul class="flex-row menu-wrapper">
              <li class="menu-item">
                <a href="#">About Frankie</a>
              </li>
              <li class="menu-item">
                <a href="#">Services</a>
              </li>
            </ul>
          </div>
          <div class="burger" @click="toogleMenu">
            <i class="material-icons">menu</i>
          </div>
          <div class="avatar">
            <avatar url="https://appfollow.io/assets/2/img/team/no-avatar.png" size="medium"></avatar>
            <button>
              <i class="material-icons">arrow_drop_down</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/Images/Avatar";
export default {
  name: "Header",
  data() {
    return {
      isShowMenu: false
    };
  },
  methods: {
    toogleMenu() {
      console.log(this.isShowMenu);

      this.isShowMenu = !this.isShowMenu;
    }
  },
  components: {
    Avatar
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 100px;
  position: relative;
  z-index: 1000;
  @include sm {
    height: 50px;
  }
  .logo {
    img {
      height: 50px;
      @include md {
        height: 30px;
      }
      @include sm {
        height: 20px;
      }
    }
  }
  .content-right {
    .menu {
      padding-right: 70px;
      @include sm {
        position: absolute;
        padding: 20px 0;
        top: 50px;
        left: 0;
        z-index: 999;
        width: 100%;
        background: #fb7474;
        transform: translateY(-200px);
        transition: 0.3s;
      }
      .menu-wrapper {
        @include sm {
          flex-direction: column;
        }
        .menu-item {
          padding-right: 30px;
          @include sm {
            padding-bottom: 10px;
            padding-right: 0;
          }
          a {
            color: black;
            font-weight: 500;
            &:hover {
              color: $color-primary;
              @include sm {
                color: white;
              }
            }
          }
        }
      }
    }
    .show {
      transform: translateY(0);
    }
    .burger {
      display: none;
      @include sm {
        display: block;
        padding-right: 20px;
        cursor: pointer;
        @include flex-center;
      }
      &:hover {
        color: $color-primary;
      }
    }
    .avatar {
      @include flex-center;
      button {
        background: transparent;
        border: none;
        cursor: pointer;
        &:focus {
          outline: none;
        }
      }
    }
  }
}
</style>>

