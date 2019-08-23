<template>
  <div class="container">
    <div class="flex-row space-between">
      <div class="logo">
        <img src="@/assets/logo.png" alt />
      </div>
      <div class="content-right">
        <div class="flex-row">
          <div class="menu">
            <ul class="flex-row">
              <li class="menu-item">
                <a href="#">About Frankie</a>
              </li>
              <li class="menu-item">
                <a href="#">Services</a>
              </li>
            </ul>
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
  components: {
    Avatar
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 100px;
  .logo {
    img {
      height: 50px;
    }
  }
  .content-right {
    .menu {
      padding-right: 70px;
      .menu-item {
        padding-right: 30px;
        a {
          color: black;
          transition: 0.3s;
          font-weight: 500;
          &:hover {
            color: $color-primary;
          }
        }
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

