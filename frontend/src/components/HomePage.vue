<template>
  <div class="homepage-content">
    <div class="notice-box" v-show="showNoticeBox">
      <div class="notice-box-wrap">
        <p class="notice-title"><strong>Thông báo</strong></p>
        <div class="notice-content">
          <p>
            <strong
              >-Ra mắt tính năng Nạp Atm/Momo tự động 24/24 , cộng tiền chỉ sau
              5s , được + thêm 25% ( VD: Nạp 100k = 125k $ Shop)</strong
            >
          </p>
          <p><strong>***</strong></p>
          <p><strong>GIẢM GIÁ 50% CÁC VÒNG QUAY SIÊU HOT</strong></p>
          <p>
            <strong>FANPAGE HỖ TRỢ &amp; TỔ CHỨC EVENT ( </strong
            ><a href="https://www.facebook.com/profile1.account.tab.id100009/"
              ><strong>Ấn vào đây</strong></a
            ><strong> )</strong>
          </p>
        </div>
        <button @click="closeNoticeBox" class="btn-close">
          <strong>Đóng</strong>
        </button>
        <div @click="closeNoticeBox" class="close-icon">
          <i class="fa fa-times" aria-hidden="true"></i>
        </div>
      </div>
      <div @click="closeNoticeBox" class="black-ground"></div>
    </div>
    <section>
      <RechargeOnline />
      <ListGameAccount />
      <div class="hot-mini-game">
        <div class="title"><strong>mini game siêu hot</strong></div>
      </div>
    </section>
  </div>
</template>

<script>
import RechargeOnline from "./HomeComponents/RechargeOnline";
import ListGameAccount from "./HomeComponents/ListGameAccount";

import axios from "axios";

export default {
  components: { RechargeOnline, ListGameAccount },

  data() {
    return {
      showNoticeBox: true,
    };
  },

  methods: {
    closeNoticeBox() {
      this.showNoticeBox = false;
    },
  },

  mounted() {
    this.$store.state.darkMode = true;

    axios
      .get(`${process.env.VUE_APP_URL}/get-home-page-user-data`)
      .then((response) => {
        console.log(response);
      });
  },
};
</script>

<style lang="scss">
.homepage-content {
  padding-top: 1px;
  margin-top: 53px;
}

.notice-box {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .black-ground {
    width: 100%;
    height: 100%;
    background-color: var(--black-three);
    position: absolute;
    z-index: 1;
  }

  .notice-box-wrap {
    max-width: 512px;
    background-color: #ffffff;
    margin: 0 10px;
    border-radius: 5px;
    position: relative;
    z-index: 100;

    .close-icon {
      position: absolute;
      top: 18px;
      right: 15px;
      cursor: pointer;
      width: 20px;
      height: 20px;
      background-color: var(--black-one);
      text-align: center;
      color: white;
      border-radius: 3px;
      line-height: 20px;
    }

    p.notice-title {
      font-size: 1.2rem;
      text-align: center;
      color: var(--red-text);
      text-transform: uppercase;
    }

    .notice-content {
      padding: 0 25px;
      border: 1px solid rgba(0, 0, 0, 0.38);
    }

    .btn-close {
      float: right;
      margin: 15px;
      background-color: white;
      border: 2px solid rgba(3, 105, 161, 0.7);
      border-radius: 5px;
      padding: 8px 20px;
      cursor: pointer;
      color: rgba(3, 105, 161, 0.7);
      transition: 0.4s;
    }

    .btn-close:hover {
      background-color: rgba(3, 105, 161, 0.7);
      color: #ffffff;
    }
  }
}

section {
  max-width: var(--max-width);
  margin: 0px auto;

  .hot-mini-game {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--black-three);
    margin-bottom: 60px;

    .title {
      text-transform: uppercase;
      font-size: 1.9rem;
      text-align: center;
      padding: 30px 0px;
      color: var(--yellow-active);
    }
  }
}

@media (max-width: 480px) {
  footer {
    .wrap-footer {
      p {
        line-height: 20px;
        font-size: 0.9rem;
      }
    }
  }
}
</style>
