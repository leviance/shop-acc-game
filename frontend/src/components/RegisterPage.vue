<template>
  <div class="register-page">
    <div class="wrap-login-form">
      <p class="title"><strong>Đăng ký tài khoản</strong></p>
      <div class="border-b"></div>
      <div class="form">
        <p><strong>Tên tài khoản</strong></p>
        <input
          v-model="name_account"
          type="text"
          placeholder="Nhập tên tài khoản"
        />
        <p v-if="error.name_account" class="error-message">
          <strong>{{ error.name_account }}</strong>
        </p>
        <p><strong>Số điện thoại</strong></p>
        <input
          v-model="phone_number"
          type="number"
          placeholder="Nhập số điện thoại"
        />
        <p v-if="error.phone_number" class="error-message">
          <strong>{{ error.phone_number }}</strong>
        </p>
        <p><strong>Mật khẩu</strong></p>
        <input v-model="password" type="password" placeholder="Nhập mật khẩu" />
        <p v-if="error.password" class="error-message">
          <strong>{{ error.password }}</strong>
        </p>
        <p><strong>Nhập lại mật khẩu</strong></p>
        <input
          v-model="re_password"
          type="password"
          placeholder="Nhập lại mật khẩu"
        />
        <p v-if="error.re_password" class="error-message">
          <strong>{{ error.re_password }}</strong>
        </p>
        <p>
          <strong
            >Lưu ý nhập đúng số điện thoại. Khi quên, mất mật khẩu chúng tôi sẽ
            cung cấp lại mật khẩu cho bạn thông qua số điện thoại</strong
          >
        </p>
      </div>
      <div class="btn-login" @click="send_register_req">Đăng ký</div>
      <router-link class="btn-create-new" :to="{ name: 'Login' }">
        Đăng nhập
      </router-link>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  data() {
    return {
      name_account: null,
      phone_number: null,
      password: null,
      re_password: null,

      error: {
        name_account: null,
        phone_number: null,
        password: null,
        re_password: null,
      },
    };
  },

  async mounted() {
    this.$store.state.darkMode = false;
    this.$store.commit("get_user_data");

    let _this = this;
    setTimeout(() => {
      if (_this.$store.state.user_data.username) _this.$router.push("/");
    }, 0);
  },

  methods: {
    send_register_req() {
      let name_account = this.name_account;
      let phone_number = this.phone_number;
      let password = this.password;
      let re_password = this.re_password;
      let _this = this;

      this.remove_error();

      if (password !== re_password) {
        this.set_error("re_password", "Nhập lại mật khẩu không chính xác");
        return;
      }

      Vue.axios
        .post(`${process.env.VUE_APP_URL}/user-register`, {
          name_account: name_account,
          phone_number: phone_number,
          password: password,
        })
        .then((res) => {
          _this.remove_error();
          confirm(res.data);
          this.$router.push("/login");
        })
        .catch(function (errors) {
          if (errors.response) {
            console.log(errors.response.data);
            _this.set_error(
              errors.response.data[0].param,
              errors.response.data[0].msg
            );
          }
        });
    },

    set_error(field, error) {
      this.error[field] = error;
    },

    remove_error() {
      Object.keys(this.error).forEach((field) => {
        this.error[field] = null;
      });
    },
  },
};
</script>

<style lang="scss"></style>
