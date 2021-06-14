<template>
  <div id="app">
    <div id="nav" :class="{ 'dark-mode': darkMode, 'light-mode': !darkMode }">
      <div class="wrap-nav">
        <div class="nav-left">
          <div class="logo">
            <router-link to="/"
              ><img src="./assets/images/logo.png" alt=""
            /></router-link>
          </div>
          <ul class="menu" :class="{ active: showMenuMobile }">
            <li><router-link to="/">TRANG CHỦ</router-link></li>
            <li>
              <router-link :to="{ name: 'RechargeOnline' }"
                >NẠP THẺ</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'RechargeOnline' }"
                >NẠP ATM/MOMO TẶNG 25% TỰ ĐỘNG 24/24</router-link
              >
            </li>
          </ul>
        </div>
        <div @click="toggleMenuMobile" class="mobile-menu-bar">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div class="nav-right">
          <router-link :to="{ name: 'Login' }">
            <div class="btn-account">
              <strong>ĐĂNG NHẬP</strong>
            </div>
          </router-link>
          <!-- <router-link to="/">
            <div class="btn-account">
              <strong>TÀI KHOẢN</strong>
              <span>Ví: 0 VNĐ</span>
            </div>
          </router-link> -->
          <router-link :to="{ name: 'Register' }">
            <div class="btn-logout"><strong>ĐĂNG KÝ</strong></div>
          </router-link>
          <!-- <router-link to="/">
            <div class="btn-logout"><strong>ĐĂNG XUẤT</strong></div>
          </router-link> -->
        </div>
      </div>
    </div>
    <router-view />
    <footer>
      <div class="wrap-footer">
        <p>
          <strong
            >HỆ THỐNG BÁN ACC TỰ ĐỘNG <br />
            ĐẢM BẢO UY TÍN VÀ CHẤT LƯỢNG.</strong
          >
        </p>
        <p>
          <strong
            >CHÚNG TÔI LUÔN LẤY UY TÍN LÀM HÀNG ĐẦU ĐỐI VỚI KHÁCH HÀNG. HI
            <br />
            VỌNG SẼ ĐƯỢC PHỤC VỤ CÁC BẠN. CẢM ƠN!</strong
          >
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenuMobile: false,
    };
  },

  methods: {
    toggleMenuMobile() {
      this.showMenuMobile = !this.showMenuMobile;
    },
  },

  computed: {
    darkMode() {
      return this.$store.state.darkMode;
    },
  },
};
</script>

<style lang="scss">
*,
*:before,
*:after {
  box-sizing: inherit;
}
:root {
  --yellow-btn: -webkit-linear-gradient(bottom, #ffe900, #f2ac00);
  --yellow-text: #f7c613cf;
  --yellow-active: #f7c613;
  --red-text: #e32a2a;
  --red-btn: #dc2626;
  --max-width: 1152px;
  --black-one: #27272a;
  --black-two: #131318;
  --black-three: rgba(0, 0, 0, 0.78);
  --black-border: rgba(0, 0, 0, 0.2);
}
body,
html,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: "Roboto Condensed", sans-serif;
  box-sizing: border-box;
}

body {
  background-image: url("./assets/images/bg.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

ul {
  padding: 0;
  margin: 0;
  li {
    display: inline-block;
    list-style: none;
    padding: 0;
    margin: 0;
  }
}

a {
  text-decoration: none;
  color: #000000;
}

.dark-mode {
  background-color: #000000;

  .nav-left .menu li a {
    color: var(--red-text);
  }

  .mobile-menu-bar {
    color: var(--yellow-active);
  }

  .nav-right .btn-account,
  .btn-logout {
    background: var(--yellow-btn);
  }
}

.light-mode {
  background-color: #ffffff;

  .nav-left .menu li a {
    color: var(--black-one);
  }

  .nav-right .btn-account,
  .btn-logout {
    border: 1px solid var(--black-border);
  }
}

#nav {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 10px 0;
  border-bottom: 1px solid var(--black-border);

  .wrap-nav {
    max-width: var(--max-width);
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3px 0;
    position: relative;

    .mobile-menu-bar {
      display: none;
    }

    .nav-left {
      display: flex;
      align-items: center;

      .menu {
        li {
          a {
            font-weight: 700;
            font-size: 1.1rem;
            padding: 1rem;
          }
        }
      }
    }

    .nav-right {
      display: flex;

      .btn-account,
      .btn-logout {
        width: 130px;
        height: 40px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        transition: 0.4s;

        span {
          font-size: 0.75rem;
        }
      }

      .btn-account:hover,
      .btn-logout:hover {
        box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.1);
      }

      .btn-account {
        margin-right: 5px;
      }
    }
  }
}

footer {
  width: 100%;
  background-color: #000000;
  color: white;

  .wrap-footer {
    max-width: var(--max-width);
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    p {
      line-height: 30px;
      padding: 0px 40px;
    }
  }
}

@media (max-width: 1000px) {
  .dark-mode {
    .mobile-menu-bar {
      color: var(--yellow-active);
      font-size: 1.5rem;
      padding: 0;
      border: none;
    }
  }

  .light-mode {
    .mobile-menu-bar {
      font-size: 1rem;
      padding: 7px;
      border: 1px solid var(--black-border);
      border-radius: 5px;
    }
  }

  #nav {
    .wrap-nav {
      padding: 3px 15px;
      .mobile-menu-bar {
        display: block !important;
        cursor: pointer;
      }

      .nav-left {
        .active {
          display: flex !important;
        }
        .menu {
          display: none;
          position: absolute;
          flex-direction: column;
          top: 100%;
          left: 0;
          width: 100%;
          background-color: white;
          padding: 10px 0px;
          border-bottom: 1px solid var(--black-border);

          a {
            color: var(--black-two) !important;
            display: block;
            font-size: 1rem !important;
            padding: 5px 25px !important;
          }
        }
      }

      .nav-right {
        position: absolute;
        position: absolute;
        right: 50px;
      }
    }
  }
}

@media (max-width: 767px) {
}

@media (max-width: 480px) {
  .dark-mode .mobile-menu-bar {
    padding: 0;
  }
  .light-mode .mobile-menu-bar {
    padding: 4px 5px;
  }

  .nav-right {
    .btn-account,
    .btn-logout {
      width: 65px !important;
      height: 30px !important;

      strong {
        font-size: 0.75rem !important;
      }
      span {
        display: none !important;
      }
    }
  }
}
</style>
