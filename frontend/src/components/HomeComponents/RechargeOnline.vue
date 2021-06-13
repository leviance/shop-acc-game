<template>
  <div class="recharge-online">
    <div class="left">
      <div class="form-title">
        <div
          @click="toggleForm"
          :class="{ active: showChargeForm }"
          class="charge-title"
        >
          <strong>NẠP THẺ</strong>
        </div>
        <div
          @click="toggleForm"
          :class="{ active: showTopChargeForm }"
          class="top-charge-title"
        >
          <strong>TOP NẠP THÁNG 6</strong>
        </div>
      </div>
      <div class="charge-form" v-show="showChargeForm">
        <select name="card-seri" id="card-seri">
          <option value="">Chọn nhà mạng</option>
          <option value="viettel">VIETTEL</option>
          <option value="vinaphone">VINAPHONE</option>
          <option value="mobilephone">MOBILEPHONE</option>
        </select>
        <select name="card-value" id="card-value">
          <option value="">Chọn mệnh giá</option>
          <option value="10000">10.000 VNĐ - (nhận 100%)</option>
          <option value="20000">20.000 VNĐ - (nhận 100%)</option>
          <option value="30000">30.000 VNĐ - (nhận 100%)</option>
          <option value="50000">50.000 VNĐ - (nhận 100%)</option>
          <option value="100000">100.000 VNĐ - (nhận 100%)</option>
          <option value="200000">200.000 VNĐ - (nhận 100%)</option>
          <option value="300000">300.000 VNĐ - (nhận 100%)</option>
          <option value="500000">500.000 VNĐ - (nhận 100%)</option>
          <option value="1000000">1.000.000 VNĐ - (nhận 100%)</option>
        </select>
        <input type="text" />
        <input type="text" />

        <button><strong>NẠP THẺ</strong></button>
        <strong class="charge-notice"
          >Hãy chọn đúng mệnh giá. Sai sẽ mất thẻ</strong
        >
      </div>
      <div class="top-charge-form" v-show="showTopChargeForm">
        <div class="rank">
          <div class="rank-left">
            <i class="fa fa-star" aria-hidden="true"></i>
            <strong>tranthibaonhi</strong>
          </div>
          <div class="rank-right">
            <strong>50,000 <span>VND</span></strong>
          </div>
        </div>
        <div class="rank">
          <div class="rank-left">
            <div class="num-rank"><strong>2</strong></div>
            <strong>tranthibaonhi</strong>
          </div>
          <div class="rank-right">
            <strong>50,000 <span>VND</span></strong>
          </div>
        </div>
        <div class="rank">
          <div class="rank-left">
            <div class="num-rank"><strong>3</strong></div>
            <strong>tranthibaonhi</strong>
          </div>
          <div class="rank-right">
            <strong>50,000 <span>VND</span></strong>
          </div>
        </div>
        <div class="rank">
          <div class="rank-left">
            <div class="num-rank"><strong>4</strong></div>
            <strong>tranthibaonhi</strong>
          </div>
          <div class="rank-right">
            <strong>50,000 <span>VND</span></strong>
          </div>
        </div>
        <div class="rank">
          <div class="rank-left">
            <div class="num-rank"><strong>5</strong></div>
            <strong>tranthibaonhi</strong>
          </div>
          <div class="rank-right">
            <strong>50,000 <span>VND</span></strong>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <img src="@/assets/images/recharge-banner.gif" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showChargeForm: true,
      showTopChargeForm: false,
    };
  },

  methods: {
    toggleForm() {
      this.showChargeForm = !this.showChargeForm;
      this.showTopChargeForm = !this.showTopChargeForm;
    },
  },
};
</script>

<style lang="scss">
.recharge-online {
  background-color: var(--black-one);
  display: flex;
  padding: 10px;
  margin: 60px auto;

  .left {
    width: 30%;
    background-color: var(--black-two);

    .form-title {
      display: flex;
      justify-content: space-around;
      cursor: pointer;

      div {
        font-size: 1.3rem;
        font-weight: 400;
        padding: 10px;
        color: var(--yellow-text);
      }

      .active {
        color: var(--yellow-active) !important;
      }
    }

    .charge-form,
    .top-charge-form {
      padding: 0px 15px;
      display: flex;
      justify-content: space-around;
      flex-direction: column;

      input,
      select {
        padding: 8px;
        font-size: 1rem;
        border-radius: 5px;
        margin-bottom: 12px;
        outline: none;
        background-color: var(--black-one);
        border: 2px solid grey;
        color: #ffffff;

        option {
          font-size: 1rem;
          padding: 8px;
        }
      }

      input:focus,
      select:focus {
        border: 2px solid rgba(245, 158, 11, 1);
      }

      button {
        font-size: 1.5rem;
        background: var(--yellow-btn);
        border-radius: 5px;
        padding: 7px;
        cursor: pointer;
        margin: 10px 0;
        color: rgba(0, 0, 0, 0.8);
      }

      .charge-notice {
        padding-bottom: 20px;
        text-align: center;
        color: rgba(255, 255, 255, 0.8);
      }
    }

    .top-charge-form {
      .rank {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;

        .rank-left {
          display: flex;
          align-items: center;
          .num-rank {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: rgba(20, 184, 166, 1);
            margin-right: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ffffff;
          }
          i {
            padding-right: 10px;
            font-size: 2rem;
            color: var(--red-btn);
            position: relative;
          }
          i:after {
            content: "1";
            color: white;
            position: absolute;
            top: 50%;
            left: 22%;
            transform: translateY(-50%);
            font-size: 1rem;
            font-weight: bold;
          }
          strong {
            color: #ffffff;
          }
        }
        .rank-right {
          padding: 5px 20px;
          background-color: var(--red-btn);
          border-radius: 2px;

          strong {
            font-weight: 700;
            color: #ffffff;
            font-size: 1.2rem;
          }
          span {
            font-size: 0.75rem;
          }
        }
      }
    }
  }
  .right {
    width: 70%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

@media (max-width: 1000px) {
  .recharge-online {
    flex-direction: column-reverse;

    .left,
    .right {
      width: 100%;
    }
  }
}

@media (max-width: 767px) {
}

@media (max-width: 480px) {
  .recharge-online {
    margin: 30px auto !important;
  }
}
</style>
