<template>
  <div class="list-game-account">
    <div class="title"><strong>danh mục acc game</strong></div>
    <div class="list-type-account">
      <router-link
        :to="{
          name: 'AccountCategories',
          params: { categoryName: 'lien-minh-huyen-thoai' },
        }"
        class="type-account"
      >
        <div class="wrap-type-account">
          <img
            class="img-type-account"
            src="@/assets/images/acc-game-lmht.gif"
            alt=""
          />
          <p class="name-type-acc"><strong>danh mục acc liên minh</strong></p>
          <p class="num-acc">Số tài khoản: <strong>2,816</strong></p>
          <div class="btn-buy-now">
            <img src="@/assets/images/btn-buy-now.png" alt="" />
          </div>
        </div>
      </router-link>
      <router-link
        :to="{
          name: 'AccountCategories',
          params: { categoryName: 'lien-quan' },
        }"
        class="type-account"
      >
        <div class="wrap-type-account">
          <img
            class="img-type-account"
            src="@/assets/images/acc-game-lienquan.gif"
            alt=""
          />
          <p class="name-type-acc"><strong>danh mục acc liên quân</strong></p>
          <p class="num-acc">Số tài khoản: <strong>2,816</strong></p>
          <div class="btn-buy-now">
            <img src="@/assets/images/btn-buy-now.png" alt="" />
          </div>
        </div>
      </router-link>
      <router-link
        :to="{
          name: 'AccountCategories',
          params: { categoryName: 'toc-chien' },
        }"
        class="type-account"
      >
        <div class="wrap-type-account">
          <img
            class="img-type-account"
            src="@/assets/images/acc-game-tocchien.gif"
            alt=""
          />
          <p class="name-type-acc"><strong>danh mục acc tốc chiến</strong></p>
          <p class="num-acc">Số tài khoản: <strong>2,816</strong></p>
          <div class="btn-buy-now">
            <img src="@/assets/images/btn-buy-now.png" alt="" />
          </div>
        </div>
      </router-link>
      <router-link
        :to="{
          name: 'AccountCategories',
          params: { categoryName: 'freefire' },
        }"
        class="type-account"
      >
        <div class="wrap-type-account">
          <img
            class="img-type-account"
            src="@/assets/images/acc-game-freefire.gif"
            alt=""
          />
          <p class="name-type-acc"><strong>danh mục acc freefire</strong></p>
          <p class="num-acc">Số tài khoản: <strong>2,816</strong></p>
          <div class="btn-buy-now">
            <img src="@/assets/images/btn-buy-now.png" alt="" />
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.list-game-account {
  padding-bottom: 20px;
  margin: 60px auto 30px auto;
  width: 100%;
  background-color: var(--black-three);
  display: flex;
  flex-direction: column;

  .title {
    text-transform: uppercase;
    font-size: 1.9rem;
    text-align: center;
    padding: 30px 0px;
    color: var(--yellow-active);
  }

  .list-type-account {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 10px;
    padding: 0 10px;

    .type-account {
      grid-column: span 3;
      display: flex;
      border: 2px solid var(--yellow-text);
      padding-bottom: 20px;

      .wrap-type-account {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;

        .name-type-acc {
          color: var(--yellow-active);
          text-transform: uppercase;
          margin-bottom: 0;
        }
        .num-acc {
          margin-top: 10px;
          color: #ffffff;
        }
        .img-type-account {
          width: 100%;
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
  }
}

@media (max-width: 1000px) {
  .list-type-account {
    .type-account {
      grid-column: span 6 !important;
    }
  }
}

@media (max-width: 480px) {
  .list-game-account {
    margin: 30px auto 30px auto;
  }
}
</style>
