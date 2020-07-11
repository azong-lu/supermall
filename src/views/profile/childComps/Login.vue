<template>
  <div class="login">
    <div class="user-pic">
      <img src="~assets/img/profile/avatar.svg" alt="" class="user-pic-img">
    </div>
    <div class="user-info">
      <p>登录/注册</p>
      <div class="phone-num">
        <img alt="" class="icon-phone" src="~assets/img/profile/phone.svg" />
        <p>暂未绑定手机号</p>
      </div>
    </div>
    <div class="profile-arrow-right">
      <span> > </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",

};
</script>

<style scoped>
.login {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 90px;
  padding: 0 20px;
  background-color: #ff8198;
}

.user-pic {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: white;
}

.user-pic .user-pic-img {
  display: block;
  width: 60px;
  height: 60px;
}

.user-info {
  font-size: 16px;
  margin-left: 20px;
  color: white;
}

.user-info p:last-child {
  margin-left: 3px;
}

.user-info .phone-num {
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-top: 8px;
}

.icon-phone {
  display: inline-block;
  width: 16px;
  height: 16px;
}

.profile-arrow-right {
  position: absolute;
  right: 10px;
  font-size: 20px;
  color: white;
}

.profile-arrow-right img {
  display: inline-block;
  width: 20px;
  height: 20px;
}
</style>
