<template>
  <div class="list-accounts">
    <div class="wrap-list-accounts">
      <div class="title"><strong>acc liên minh tự chọn</strong></div>
      <div class="list-account-category">
        <router-link
          to="/"
          class="account-block"
          v-for="(data, index) in testData"
          :key="index"
        >
          <div class="wrap-account-block">
            <img
              class="account-image"
              :src="require(`@/assets/images/account-img/${data.img}`)"
              :alt="data.name"
            />
						<div class="account-infor">
							<div><p>Tướng: <b>122</b></p></div>
							<div><p>Trang phục: <b>67</b></p></div>
							<div><p>Rank: <b>Không</b></p></div>
							<div><p>Thông tin: <b>SĐT đổi</b></p></div>
						</div>
						<div class="list-btn">
							<div class="btn-price">310,000 đ</div>
							<div class="btn-detail"><strong>CHI TIẾT</strong></div>
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
          img: "image-43aeb843-f151-4c2e-8912-e468f9dbaabf.jpeg",
          name: "acc liên minh tự chọn",
          numAcc: "3,900",
          price: null,
        },
        {
          img: "image-a8c9477d-57e1-4ee7-8f57-87c1ceee7c5a.jpeg",
          name: "acc liên minh siêu rẻ",
          numAcc: "3,900",
          price: null,
        },
        {
          img: "image-35839b98-3a87-4420-9e09-7c88efbf2404.jpeg",
          name: "acc liên minh vip",
          numAcc: "3,900",
          price: null,
        },
        {
          img: "image-0de2949a-3387-41e1-afb7-8bfe9e39ae02.jpeg",
          name: "acc chưa rank mùa nào",
          numAcc: "3,900",
          price: null,
        },
        {
          img: "image-43aeb843-f151-4c2e-8912-e468f9dbaabf.jpeg",
          name: "acc random 10k",
          numAcc: "3,900",
          price: "10.000đ",
        },
        {
          img: "image-43aeb843-f151-4c2e-8912-e468f9dbaabf.jpeg",
          name: "acc random cấp 1",
          numAcc: "3,900",
          price: "25.000đ",
        },
        {
          img: "image-43aeb843-f151-4c2e-8912-e468f9dbaabf.jpeg",
          name: "acc random cấp 2",
          numAcc: "3,900",
          price: "50.000đ",
        },
        {
          img: "image-43aeb843-f151-4c2e-8912-e468f9dbaabf.jpeg",
          name: "acc random cấp 3",
          numAcc: "3,900",
          price: "100.000đ",
        },
        {
          img: "image-43aeb843-f151-4c2e-8912-e468f9dbaabf.jpeg",
          name: "acc random cấp 4",
          numAcc: "3,900",
          price: "150.000đ",
        },
        {
          img: "image-43aeb843-f151-4c2e-8912-e468f9dbaabf.jpeg",
          name: "acc random cấp 5",
          numAcc: "3,900",
          price: "250.000đ",
        },
      ],
    };
  },

  mounted() {
    this.$store.state.darkMode = false;
    this.pathName = this.$route.params.typeAccount;
  },
};
</script>

<style lang="scss">
.list-accounts {
  width: 100%;
  min-height: calc(100% - 74px);
  height: auto;
  background-color: white;
  margin-top: 74px;
  padding-top: 1px;

  .wrap-list-accounts {
    padding-bottom: 20px;
    margin: 30px auto 0px auto;
    max-width: var(--max-width);
    background-color: white;
    display: flex;
    flex-direction: column;

    .title {
			text-transform: uppercase;
			font-size: 1.5rem;
			text-align: left;
			padding: 15px 10px;
			color: var(--black-one);
    }

    .list-account-category {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-gap: 20px;
        padding: 0 10px;

        .account-block {
        grid-column: span 3;
        display: flex;
        border: 1px solid var(--black-border);
        padding-bottom: 20px;
        transition: 0.4s;

        .wrap-account-block {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;

            .account-image {
            width: 100%;
            }

						.account-infor {
							display: grid;
							grid-template-columns: repeat(12, 1fr);
							width: 100%;
							grid-gap: 10px;
							padding: 10px;

							>div {
								grid-column: span 6;
								text-align: center;

								p {font-size: 0.9rem;}
							}
						}

						.list-btn {
							width: 100%;
							padding: 0 10px;
							display: flex;
							justify-content: space-around;

							.btn-price, .btn-detail {
								padding: 7px 17px;
								border: 1px solid var(--red-text);
								border-radius: 5px;
								font-size: 0.9rem;
							}

							.btn-price { color: var(--red-text);}
							.btn-detail {
								background-color: var(--red-btn);
								color: #ffffff;
								transition: 0.4s;
							}
							.btn-detail:hover { 
								background-color: var(--yellow-active); 
								color: black; 
								border: 1px solid var(--yellow-active);
							}
						}
        	}
        }

        .account-block:hover {
        box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.2);
        }
   		}
    }
}

@media (max-width: 1000px) {
  .list-account-category .account-block {
    grid-column: span 6 !important;

		.btn-price, .btn-detail {
			padding: 12px 22px !important;
		}
  }
}

@media (max-width: 480px) {
	.list-account-category .account-block {
    grid-column: span 12 !important;
  }

  .wrap-list-accounts {
    margin: 30px auto 0px auto;
  }
}
</style>
