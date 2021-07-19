<template>
  <div class="register-page">
    <div class="wrap-login-form">
      <p class="title"><strong>Đăng ký tài khoản</strong></p>
      <div class="border-b"></div>
      <div class="form">
        <p><strong>Tên tài khoản</strong></p>
        <input type="text" placeholder="Nhập tên tài khoản" />
        <p><strong>Số điện thoại</strong></p>
        <input type="number" placeholder="Nhập số điện thoại" />
        <p><strong>Mật khẩu</strong></p>
        <input type="password" placeholder="Nhập mật khẩu" />
        <p><strong>Nhập lại mật khẩu</strong></p>
        <input type="password" placeholder="Nhập lại mật khẩu" />
        <p>
          <strong
            >Lưu ý nhập đúng số điện thoại. Khi quên, mất mật khẩu chúng tôi sẽ
            cung cấp lại mật khẩu cho bạn thông qua số điện thoại</strong
          >
        </p>
      </div>
      <div class="btn-login" @click="sendRegisterReq">Đăng ký</div>
      <router-link class="btn-create-new" :to="{ name: 'Login' }">
        Đăng nhập
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    this.$store.state.darkMode = false;
    axios.post(`${process.env.VUE_APP_URL}/user-register`, {
      name_account: "test",
      phone_number: 123,
      password: 2316371,
    });
  },

  methods: {
    sendRegisterReq() {
      console.log(process.env.VUE_APP_URL);
    },
  },
};
</script>

<style lang="scss"></style>
