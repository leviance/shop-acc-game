<template>
  <div class="user-acocunt-page">
    <div class="wrap-account-page">
      <div class="top-avatar" v-show="nav.accountInfor">
        <div class="avatar">
          <img src="@/assets/images/avatar-user.jpg" alt="" />
        </div>
        <p class="username"><strong>Dũng Dương - ( ID: 745508)</strong></p>
      </div>
      <div class="wrap-user-infor">
        <div class="navigation">
          <div class="title"><strong>tài khoản</strong></div>
          <p
            @click="navigateTo('accountInfor')"
            :class="{ active: nav.accountInfor }"
          >
            <i class="fa fa-user-circle" aria-hidden="true"></i> Thông tin tài
            khoản
          </p>
          <p
            @click="navigateTo('changePassword')"
            :class="{ active: nav.changePassword }"
          >
            <i class="fa fa-lock" aria-hidden="true"></i> Đổi mật khẩu
          </p>
          <div class="title"><strong>trò chơi</strong></div>
          <p
            @click="navigateTo('gameHistory')"
            :class="{ active: nav.gameHistory }"
          >
            <i class="fa fa-gamepad" aria-hidden="true"></i> Lịch sử game
          </p>
          <p
            @click="navigateTo('withdrawItem')"
            :class="{ active: nav.withdrawItem }"
          >
            <i class="fa fa-reply-all" aria-hidden="true"></i> Rút vật phẩm
          </p>
          <div class="title"><strong>giao dịch</strong></div>
          <p
            @click="navigateTo('autoRechargeCard')"
            :class="{ active: nav.autoRechargeCard }"
          >
            <i class="fa fa-star" aria-hidden="true"></i> Nạp thẻ cào tự động
          </p>
          <p
            @click="navigateTo('autoRechargeATM')"
            :class="{ active: nav.autoRechargeATM }"
          >
            <i class="fa fa-credit-card-alt" aria-hidden="true"></i> Nạp
            ATM/MOMO tự động
          </p>
          <p
            @click="navigateTo('rechargeHistory')"
            :class="{ active: nav.rechargeHistory }"
          >
            <i class="fa fa-usd" aria-hidden="true"></i> Lịch sử nạp thẻ
          </p>
          <p
            @click="navigateTo('transactionHistory')"
            :class="{ active: nav.transactionHistory }"
          >
            <i class="fa fa-university" aria-hidden="true"></i> Lịch sử giao
            dịch
          </p>
          <p
            @click="navigateTo('accountPurchaseHistory')"
            :class="{ active: nav.accountPurchaseHistory }"
          >
            <i class="fa fa-book" aria-hidden="true"></i> Lịch sử mua nick
          </p>
          <p
            @click="navigateTo('itemPurchaseHistory')"
            :class="{ active: nav.itemPurchaseHistory }"
          >
            <i class="fa fa-cubes" aria-hidden="true"></i> Lịch sử mua vật phẩm
          </p>
        </div>
        <div class="information">
          <AccountInformations v-show="nav.accountInfor" />
          <ChangePassword v-show="nav.changePassword" />
          <GameHistory v-show="nav.gameHistory" />
          <RechargeHistory v-show="nav.rechargeHistory" />
          <TransactionHistory v-show="nav.transactionHistory" />
          <ItemPurchaseHistory v-show="nav.itemPurchaseHistory" />
          <AccountPurchaseHistory v-show="nav.accountPurchaseHistory" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AccountInformations from "@/components/UserAccountComponents/AccountInformations";
import ChangePassword from "@/components/UserAccountComponents/ChangePassword";
import GameHistory from "@/components/UserAccountComponents/GameHistory";
import RechargeHistory from "@/components/UserAccountComponents/RechargeHistory";
import TransactionHistory from "@/components/UserAccountComponents/TransactionHistory";
import ItemPurchaseHistory from "@/components/UserAccountComponents/ItemPurchaseHistory";
import AccountPurchaseHistory from "@/components/UserAccountComponents/AccountPurchaseHistory";

export default {
  components: { AccountInformations, ChangePassword, GameHistory, RechargeHistory, TransactionHistory, ItemPurchaseHistory, AccountPurchaseHistory },

  data() {
    return {
      nav: {
        accountInfor: true,
        changePassword: false,
        gameHistory: false,
        withdrawItem: false,
        autoRechargeCard: false,
        autoRechargeATM: false,
        rechargeHistory: false,
        transactionHistory: false,
        accountPurchaseHistory: false,
        itemPurchaseHistory: false,
      },
    };
  },

  methods: {
    navigateTo(target) {
      Object.keys(this.nav).forEach((item) => {
        this.nav[item] = false;
      });

      this.nav[target] = true;
    },
  },

  mounted() {
    this.$store.state.darkMode = false;
  },
};
</script>

<style lang="scss">
.user-acocunt-page {
  width: 100%;
  min-height: calc(100% - 74px);
  height: auto;
  background-color: white;
  margin-top: 74px;
  padding-top: 1px;

  .wrap-account-page {
    padding: 0px 8px 30px 8px;
    margin: 30px auto 0px auto;
    max-width: var(--max-width);
    display: flex;
    flex-direction: column;

    .top-avatar {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      padding-bottom: 5px;

      .username {
        text-align: center;
        font-size: 1.4rem;
        margin-top: 5px;
      }

      .avatar {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 128px;
          border: 2px solid var(--black-one);
        }
      }
    }

    .top-avatar:after {
      content: "";
      position: absolute;
      width: 20%;
      border-bottom: 1px solid var(--grey-border);
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }

    .wrap-user-infor {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      .navigation,
      .information {
        display: flex;
        flex-direction: column;

        .title {
          text-transform: uppercase;
          font-size: 1.5rem;
          border-left: 4px solid var(--black-one);
          padding: 2px 0px 2px 10px;
          margin: 5px 0px;
        }
      }
      .navigation {
        grid-column: span 3;

        p {
          cursor: pointer;
          font-size: 1rem;
          padding-left: 30px;
          position: relative;
          margin-left: 15px;

          i {
            position: absolute;
            top: 0;
            left: 0;
          }
        }

        .active {
          color: var(--red-text);
        }
      }
      .information {
        grid-column: span 9;

				.table-style {
					width: 100%;

					.wrap-history {
						width: 100%;
						overflow-x: auto;

						table {
							width: 100%;
							min-width : 700px;
							margin-top: 15px;

							th {
								text-transform: uppercase;
							}

							td {
								text-align: left;
							}

							th, td {
								text-align: left;
								padding: 10px 0px;
								font-size: 0.9rem;
								border-bottom: 1px solid #dddddd;
							}
						}
					}

					.description { font-size: 0.9rem; }
				}
      }
    }
  }
}

@media (max-width: 1000px) {
  .user-acocunt-page {
    .wrap-account-page {
      .wrap-user-infor {
        .navigation {
          grid-column: span 5 !important;
        }
        .information {
          grid-column: span 7 !important;
        }
      }
    }
  }
}

@media (max-width: 480px) {
  .user-acocunt-page {
    .wrap-account-page {
      .wrap-user-infor {
        .navigation {
          grid-column: span 12 !important;
        }
        .information {
          grid-column: span 12 !important;
        }
      }
    }
  }
}
</style>
