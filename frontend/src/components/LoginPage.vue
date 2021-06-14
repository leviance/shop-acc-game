<template>
  <div class="login-page">
    <div class="wrap-login-form">
      <p class="title"><strong>Đăng nhập tài khoản</strong></p>
      <div class="border-b"></div>
      <div class="form">
        <p><strong>Tên tài khoản</strong></p>
        <input type="text" placeholder="Nhập tên tài khoản" />
        <p><strong>Mật khẩu</strong></p>
        <input type="password" placeholder="Nhập mật khẩu" />
      </div>
      <div class="btn-login">Đăng nhập</div>
      <div class="btn-login-facebook">
        <i class="fa fa-facebook-official" aria-hidden="true"></i> Đăng nhập qua
        Facebook
      </div>
      <router-link class="btn-create-new" :to="{ name: 'Register' }">
        <i class="fa fa-user-plus" aria-hidden="true"></i> Tạo tài khoản
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.state.darkMode = false;
  },
};
</script>

<style lang="scss">
.login-page,
.register-page {
  width: 100%;
  height: calc(100% - 74px);
  background-color: white;
  margin-top: 74px;
  display: flex;
  justify-content: center;
  align-items: center;

  .wrap-login-form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid var(--black-one);
    padding: 20px;
    margin: 10px;
    border-radius: 10px;
    max-width: 380px;

    .border-b {
      width: 150px;
      height: 1px;
      background-color: var(--black-three);
    }
    .title {
      font-size: 1.6rem;
      text-transform: uppercase;
      margin: 5px 60px;
    }
    .form {
      width: 100%;

      input {
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        outline: none;
        border: 1px solid var(--black-one);
        background-color: white !important;
      }
      p {
        font-size: 0.9rem;
        margin-bottom: 5px;
      }
    }

    .btn-login,
    .btn-login-facebook,
    .btn-create-new {
      width: 100%;
      padding: 10px 0;
      text-align: center;
      border-radius: 5px;
      cursor: pointer;
      color: white;
      font-size: 1.2rem;
    }
    .btn-login {
      background-color: var(--red-btn);
      margin: 25px 0px 10px 0px;
    }
    .btn-login-facebook {
      background-color: #3b5998;
      margin: 10px 0px;
    }
    .btn-create-new {
      border: 1px solid var(--black-one);
      color: var(--black-two);
    }
    .btn-login-facebook,
    .btn-create-new {
      position: relative;

      i {
        position: absolute;
        top: 50%;
        left: 16px;
        transform: translateY(-50%);
      }
    }
  }
}
</style>
