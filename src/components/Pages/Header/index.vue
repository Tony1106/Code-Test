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
              <li class="menu-item">About Frankie</li>
              <li class="menu-item">About Frankie</li>
            </ul>
          </div>
          <avatar url="https://appfollow.io/assets/2/img/team/no-avatar.png" size="medium"></avatar>
          <span>
            <i class="material-icons">arrow_drop_down</i>
          </span>
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
      }
    }
  }
}
</style>>

