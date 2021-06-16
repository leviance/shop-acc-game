<template>
  <div class="account-categories">
    <div class="wrap-categories">
      <div class="title"><strong>danh mục acc liên minh</strong></div>
      <div class="list-account-category">
        <router-link
          :to="{ name: 'ListAccountsPage', params: { typeAccount: data.type } }"
          class="account-type"
          v-for="(data, index) in testData"
          :key="index"
        >
          <div class="wrap-type-account">
            <img
              class="img-type-account"
              :src="require(`@/assets/images/${data.img}`)"
              :alt="data.name"
            />
            <p class="name-type-acc">
              <strong>{{ data.name }}</strong>
            </p>
            <p class="num-acc">
              Số tài khoản: <strong>{{ data.numAcc }}</strong>
            </p>
            <div class="price" v-if="data.price">{{ data.price }}</div>
            <div class="btn-buy-now">
              <img src="@/assets/images/btn-buy-now.png" alt="" />
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pathName: "",
      testData: [
        {
          img: "acc-lmht-tu-chon.gif",
          name: "acc liên minh tự chọn",
          numAcc: "3,900",
          type: "option-account",
          price: null,
        },
        {
          img: "acc-lmht-sieu-re.gif",
          name: "acc liên minh siêu rẻ",
          numAcc: "3,900",
          type: "option-account",
          price: null,
        },
        {
          img: "acc-lmht-vip.gif",
          name: "acc liên minh vip",
          numAcc: "3,900",
          type: "option-account",
          price: null,
        },
        {
          img: "acc-not-rank.gif",
          name: "acc chưa rank mùa nào",
          numAcc: "3,900",
          type: "option-account",
          price: null,
        },
        {
          img: "acc-random-10k.gif",
          name: "acc random 10k",
          numAcc: "3,900",
          type: "option-account",
          price: "10.000đ",
        },
        {
          img: "acc-random-cap-1.gif",
          name: "acc random cấp 1",
          numAcc: "3,900",
          type: "option-account",
          price: "25.000đ",
        },
        {
          img: "acc-random-cap-2.gif",
          name: "acc random cấp 2",
          numAcc: "3,900",
          type: "option-account",
          price: "50.000đ",
        },
        {
          img: "acc-random-cap-3.gif",
          name: "acc random cấp 3",
          numAcc: "3,900",
          type: "option-account",
          price: "100.000đ",
        },
        {
          img: "acc-random-cap-4.gif",
          name: "acc random cấp 4",
          numAcc: "3,900",
          type: "option-account",
          price: "150.000đ",
        },
        {
          img: "acc-random-cap-5.gif",
          name: "acc random cấp 5",
          numAcc: "3,900",
          type: "option-account",
          price: "250.000đ",
        },
      ],
    };
  },

  mounted() {
    this.$store.state.darkMode = false;
    this.pathName = this.$route.params.categoryName;
  },
};
</script>

<style lang="scss">
.account-categories {
  width: 100%;
  min-height: calc(100% - 74px);
  height: auto;
  background-color: white;
  margin-top: 74px;
  padding-top: 1px;
}
.wrap-categories {
  padding-bottom: 20px;
  margin: 30px auto 0px auto;
  max-width: var(--max-width);
  background-color: white;
  display: flex;
  flex-direction: column;

  .title {
    text-transform: uppercase;
    font-size: 1.5rem;
    text-align: center;
    padding: 15px 0px;
    color: var(--black-one);
  }

  .list-account-category {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 20px;
    padding: 0 10px;

    .account-type {
      grid-column: span 3;
      display: flex;
      border: 1px solid var(--black-border);
      padding-bottom: 20px;
      transition: 0.4s;

      .wrap-type-account {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;

        .name-type-acc {
          color: #f2ac00;
          text-transform: uppercase;
          margin-bottom: 0;
        }
        .num-acc {
          margin-top: 10px;
          color: var(--black-one);
        }
        .img-type-account {
          width: 100%;
        }

        .price {
          padding: 5px 10px;
          border: 2px solid var(--red-btn);
          border-radius: 5px;
          color: var(--red-text);
          font-weight: 600;
        }

        .btn-buy-now {
          margin-top: 20px;
          max-width: 135px;
          padding: 0 5px;

          img {
            width: 100%;
          }
        }
      }
    }

    .account-type:hover {
      box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.2);
    }
  }
}

@media (max-width: 1000px) {
  .list-account-category {
    .account-type {
      grid-column: span 6 !important;
    }
  }
}

@media (max-width: 480px) {
  .wrap-categories {
    margin: 30px auto 0px auto;
  }
}
</style>
