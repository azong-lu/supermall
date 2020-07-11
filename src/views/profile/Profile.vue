<template>
  <div class="profile">
    <nav-bar class="profile-nav">
      <div slot="center">
        个人中心
      </div>
    </nav-bar>
    <scroll class="scroll-height">
      <login />
      <money />
      <div class="line"></div>
      <profile-list />
    </scroll>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import Scroll from "components/common/scroll/Scroll";


  import Login from "./childComps/Login";
  import Money from "./childComps/Money";
  import profileList from "./childComps/profileList";
  export default {
    name: "Profile",
    components:{
      NavBar,
      Scroll,
      Login,
      Money,
      profileList
    }
  }
</script>

<style scoped>
  .profile-nav{
    background: var(--color-tint);
    color: white;
  }
  .profile {
    width: 100%;
    height: 100%;
  }
  .line {
    width: 100%;
    height: 10px;
    background-color: #eeeeee;
  }

  .scroll-height {
    position: absolute;
    top: 43px;
    right: 0;
    bottom: 50px;
    left: 0;
    overflow: hidden;
  }
</style>
