<template>
  <div class="auto-atm-recharge">
    <div class="title"><strong>nạp tiền atm/momo tự động 24/24</strong></div>
    <div class="red-text">
      Nạp tiền atm/momo tự động 100%, cộng tiền vào tài khoản shop sau 5 - 30
      giây
    </div>
    <div class="guide-block atm-recharge">
      <div class="heading" @click="changeView(1)">
        <div class="left">
          <img src="@/assets/images/atm-recharge.png" alt="" />
          <div class="text">
            <h2>Chuyển khoản qua Vietcombank</h2>
            <p>Chuyển khoản ngân hàng online.</p>
          </div>
        </div>
        <div class="right">
          <div class="view-detail">Chi tiết</div>
        </div>
      </div>
      <div class="detail" v-show="showAtmRecharge">
        <p class="red-text"><strong>THÔNG TIN TÀI KHOẢN NGÂN HÀNG</strong></p>
        <p class="red-text"><strong>CHỦ TÀI KHOẢN: TRẦN VIỆT TÙNG</strong></p>
        <p class="red-text"><strong>VIETCOMBANK: 0451000413951</strong></p>
        <div class="btn-copy copy-small"><span>Sao chép</span></div>
        <div class="border-grey"></div>
        <p>Nội dung chuyển khoản của bạn:</p>
        <div class="transfer-content">
          <div class="code"><b class="red-text">guitien 745508</b></div>
          <div class="btn-copy copy-big"><span>Sao chép</span></div>
        </div>
        <div class="border-grey"></div>
        <div class="btn-transfer-confirm">
          <span><strong>Xác nhận. tôi đã chuyển</strong></span>
        </div>
        <p>
          <b>Lưu ý: </b>Vui lòng ghi đúng nội dung chuyển khoản
          <b class="red-text border-dashed"
            ><b class="red-text">guitien 745508</b></b
          >. Nếu không hệ thống sẽ không thể cộng tiền vào tài khoản của bạn.
        </p>
        <p>
          Nên <b class="red-text">chuyển cùng ngân hàng</b> để nhận được tiền
          nhanh nhất. Nếu chuyển khác ngân hàng bạn chọn hình thức
          <b class="red-text">chuyển tiền nhanh 24/7</b>
        </p>
        <p>
          - Khi đã bấm "Xác nhận, tôi đã chuyển" vui lòng đợi 1 chút hệ thống sẽ
          trả về thông báo cho bạn!
        </p>
      </div>
    </div>
    <div class="guide-block momo-recharge">
      <div class="heading" @click="changeView(2)">
        <div class="left">
          <img src="@/assets/images/momo-recharge.png" alt="" />
          <div class="text">
            <h2>Chuyển khoản qua ví Momo</h2>
            <p>Chuyển khoản trên ứng dụng Momo.</p>
          </div>
        </div>
        <div class="right">
          <div class="view-detail">Chi tiết</div>
        </div>
      </div>
      <div class="detail" v-show="showMomoRecharge">
        <p class="red-text"><strong>THÔNG TIN VÍ ĐIỆN TỬ</strong></p>
        <p class="red-text"><strong>CHỦ TÀI KHOẢN: TRẦN VIỆT TÙNG</strong></p>
        <p class="red-text"><strong>VÍ MOMO: 0398793456</strong></p>
        <div class="btn-copy copy-small"><span>Sao chép</span></div>
        <div class="border-grey"></div>
        <p>Nội dung chuyển khoản của bạn:</p>
        <div class="transfer-content">
          <div class="code"><b class="red-text">guitien 745508</b></div>
          <div class="btn-copy copy-big"><span>Sao chép</span></div>
        </div>
        <div class="border-grey"></div>
        <img src="@/assets/images/momo-transfer.png" alt="" />
        <p>
          Chuyển khoản xong hãy sao chép <b>mã giao dịch</b> vào ô dưới đây rồi
          nhấn <b>Xác nhận, Tôi đã chuyển</b>
        </p>
        <div class="transfer-confirm-block">
          <input type="text" placeholder="Mã giao dịch Momo" />
          <div class="btn-transfer-confirm">
            <span><strong>Xác nhận. tôi đã chuyển</strong></span>
          </div>
        </div>
        <p>
          <b>Lưu ý: </b>Vui lòng ghi đúng nội dung chuyển khoản
          <b class="red-text border-dashed"
            ><b class="red-text">guitien 745508</b></b
          >. Nếu không hệ thống sẽ không thể cộng tiền vào tài khoản của bạn.
        </p>
        <p>
          Nên <b class="red-text">chuyển cùng ngân hàng</b> để nhận được tiền
          nhanh nhất. Nếu chuyển khác ngân hàng bạn chọn hình thức
          <b class="red-text">chuyển tiền nhanh 24/7</b>
        </p>
        <p>
          - Khi đã bấm "Xác nhận, tôi đã chuyển" vui lòng đợi 1 chút hệ thống sẽ
          trả về thông báo cho bạn!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAtmRecharge: false,
      showMomoRecharge: false,
    };
  },

  methods: {
    changeView(num) {
      if (num == 1) {
        this.showMomoRecharge = false;
        this.showAtmRecharge = !this.showAtmRecharge;
      }
      if (num == 2) {
        this.showMomoRecharge = !this.showMomoRecharge;
        this.showAtmRecharge = false;
      }
    },
  },
};
</script>

<style lang="scss">
.auto-atm-recharge {
  .border-dashed {
    border: 1px dashed red;
    padding: 3px 5px;
    border-radius: 3px;
  }
  .guide-block {
    margin-top: 20px;
    padding: 5px 10px;
    border: 1px solid var(--grey-border);

    .heading {
      display: flex;
      justify-content: space-between;
      cursor: pointer;

      .left {
        display: flex;
        justify-content: center;
        align-items: center;

        h2 {
          margin: 5px 10px;
          font-size: 1rem;
        }

        p {
          margin: 5px 10px;
          font-size: 0.9rem;
        }

        img {
          width: 40px;
          height: 40px;
        }
      }

      .right {
        display: flex;
        justify-content: center;
        align-items: center;
        .view-detail {
          font-size: 0.8rem;
          font-weight: 700;
          background-color: #db2777;
          color: white;
          padding: 3px 7px;
          border-radius: 3px;
        }
      }
    }

    .detail {
      p {
        margin: 10px 0px;
      }
      .btn-copy {
        span {
          background-color: var(--grey-text);
          color: #ffffff;
          font-weight: 700;
          border-radius: 3px;
          cursor: pointer;
          text-align: center;
        }
      }
      .copy-small {
        span {
          font-size: 0.8rem;
          padding: 3px 5px;
        }
      }
      .copy-big {
        span {
          padding: 5px 10px;
        }
      }
      .border-grey {
        width: 100%;
        border-bottom: 1px solid var(--grey-border);
        margin: 20px 0px;
      }
      .transfer-content {
        display: flex;
        align-items: center;
        .code {
          padding: 5px 10px;
          border: 1px var(--red-btn);
          border-style: dashed;
          border-radius: 5px;
          margin-right: 10px;
        }
      }
      .transfer-confirm-block {
        display: flex;
        margin: 15px 0px;
        input {
          outline: none;
          border-radius: 3px;
          border: 1px solid var(--grey-text);
          margin-right: 10px;
          font-size: 0.9rem;
          padding-left: 10px;
        }
      }
      .btn-transfer-confirm {
        text-transform: uppercase;
        span {
          color: #ffffff;
          padding: 8px 10px;
          display: inline-block;
          background-color: #0ea5e9;
          font-size: 0.9rem;
          cursor: pointer;
          border-radius: 3px;
        }
      }
    }
  }
}
</style>
