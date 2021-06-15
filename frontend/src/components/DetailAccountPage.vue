<template>
  <div class="detail-account-page">
		<div class="wrarp-detail-account">
			<div class="title"><strong>tài khoản #{{ accountID }}</strong></div>
			<div class="sub-title"><b>danh mục: acc liên minh tự chọn</b></div>
			<div class="action-block">
				<div class="price">
					<div class="pay-card-price">
						<strong>490.000 đ</strong>
						<span>CARD</span>
					</div>
					 - 
					<div class="pay-atm-price">
						<span>ATM</span>
						<strong>392.000 đ</strong>
					</div>
				</div>
				<div class="btn-buy-now"><b>mua ngay</b></div>
			</div>
			<div class="nav-view-detail">
				<div @click="viewAcccountInfor('overview')" :class="{active: overview}"><p><b>tài khoản</b></p></div>
				<div @click="viewAcccountInfor('viewChamps')" :class="{active: viewChamps}"><p><b>tướng [103]</b></p></div>
				<div @click="viewAcccountInfor('viewSkins')" :class="{active: viewSkins}"><p><b>trang phục [61]</b></p></div>
				<div @click="viewAcccountInfor('viewOtherInfor')" :class="{active: viewOtherInfor}"><p><b>thông tin khác</b></p></div>
			</div>
			<div class="detail-content">
				<div v-show="overview" class="overview">
					<div class="recharge-atm-momo"><p><strong>nạp atm/momo tặng 25% tự động 24/24 - <router-link to="/">xem tại đây</router-link></strong></p></div>
					<img src="@/assets/images/account-img/image-bd424bd0-2b8b-46b2-a3f3-556175c0ba8a.jpeg" alt="">
				</div>
				<div v-show="viewChamps" class="view-champs">
					<div class="wrap-champ">
						<img src="@/assets/images/champs/aatrox.jpg" alt="">
						<div class="champ-name">aatrox</div>
					</div>
					<div class="wrap-champ">
						<img src="@/assets/images/champs/Aphelios_0.jpg" alt="">
						<div class="champ-name">aatrox</div>	
					</div>
					<div class="wrap-champ">
						<img src="@/assets/images/champs/RiotX_ChampionList_alistar.jpg" alt="">
						<div class="champ-name">nhaatroxaatrox</div>
					</div>
					<div class="wrap-champ">
						<img src="@/assets/images/champs/RiotX_ChampionList_amumu.jpg" alt="">
						<div class="champ-name">aatrox</div>	
					</div>
					<div class="wrap-champ">
						<img src="@/assets/images/champs/RiotX_ChampionList_anivia.jpg" alt="">
						<div class="champ-name">aatrox</div>
					</div>
					<div class="wrap-champ">
						<img src="@/assets/images/champs/RiotX_ChampionList_ahri.jpg" alt="">
						<div class="champ-name">aatrox</div>	
					</div>
					<div class="wrap-champ">
						<img src="@/assets/images/champs/RiotX_ChampionList_annie.jpg" alt="">
						<div class="champ-name">aatrox</div>
					</div>
					<div class="wrap-champ">
						<img src="@/assets/images/champs/RiotX_ChampionList_aurelionsol.jpg" alt="">
						<div class="champ-name">aatrox</div>
					</div>
					<div class="btn-view-more"><p>xem thêm</p></div>
				</div>
				<div v-show="viewOtherInfor" class="view-other-infor">
					<img src="@/assets/images/account-img/profile1.jpeg" alt="">
					<img src="@/assets/images/account-img/profile2.jpeg" alt="">
					<img src="@/assets/images/account-img/profile3.jpeg" alt="">
					<img src="@/assets/images/account-img/profile4.jpeg" alt="">
					<img src="@/assets/images/account-img/profile5.jpeg" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			accountID: "",
			overview: false,
			viewChamps: true,
			viewSkins: false,
			viewOtherInfor: false,
		}
	},

	methods: {
		viewAcccountInfor(typeInfor) {
			this.overview = this.viewChamps = this.viewSkins = this.viewOtherInfor = false;
			this[typeInfor] = true;
		}
	},

	mounted() {
		this.$store.state.darkMode = false;
		this.accountID = this.$route.params.accountID;
	}
}
</script>

<style lang="scss">
.detail-account-page {
	width: 100%;
	min-height: calc(100% - 74px);
	height: auto;
	background-color: white;
	margin-top: 74px;
	padding-top: 1px;

	.wrarp-detail-account {
		padding: 0px 8px 30px 8px;
		margin: 30px auto 0px auto;
		max-width: var(--max-width);
		display: flex;
		flex-direction: column;

		.title {
			text-transform: uppercase;
			font-size: 1.5rem;
			text-align: left;
			padding: 15px 0px 5px 0px;
			color: var(--black-one);
		}

		.sub-title {
			text-transform: uppercase;
			color: var(--red-text);
			font-size: 0.9rem;
		}

		.action-block {
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: var(--black-one);
			border-radius: 5px;
			margin-top: 25px;

			.price {
				display: flex;

				.pay-card-price, .pay-atm-price { 
					padding: 20px 10px 10px 10px;
					font-size: 1.2rem;
					color: var(--yellow-active);
					position: relative;
					
					span{ position: absolute; top: 5px; left: 10px; font-size: 0.8rem;}
				}
			}
			.btn-buy-now {
				background-color: var(--red-btn);
				padding: 10px 15px;
				margin-right: 10px;
				font-size: 1.2rem;
				text-transform: uppercase;
				color: #ffffff;
				border-radius: 5px;
				cursor: pointer;
			}
		}

		.nav-view-detail {
			margin-top: 20px;
			display: flex;
			text-transform: uppercase;
			flex-wrap: wrap;

			.active { background-color: var(--red-text); color: white; }

			>div {
				padding: 0px 30px;
				cursor: pointer;
			}
		}

		.detail-content {
			margin-top: 30px;
			.overview, .view-other-infor {
				.recharge-atm-momo {
					text-transform: uppercase;
					font-size: 1.4rem;
					text-align: center;

					a { color: var(--red-text);}
				}
				padding-bottom: 40px;
				img {width: 100%; margin-bottom: 10px;}
			}

			.view-champs {
				display: grid;
				grid-template-columns: repeat(12, 1fr);
				grid-gap: 10px;
				position: relative;
				padding-bottom: 90px;

				.wrap-champ {
					grid-column: span 2;
					width: 100%;
					overflow: hidden;
					position: relative;

					.champ-name {
						text-transform: uppercase;
						position: absolute;
						bottom: 0;
						left: 0;
						width: 100%;
						color: #ffffff;
						font-style: italic;
						background-color: var(--black-one);
						font-weight: 700;
						text-align: center;
						padding: 10px 0px;
						font-size: 1.2rem;
						transition: 0.4s;
					}

					img {
						transform: scale3d(1.05, 1.05, 1);
						object-fit: cover;
						width: 100%;
						height: 100%;
						transition: 0.4s;
					}
				}

				.btn-view-more {
					position: absolute;
					bottom: 0;
					left: 0;
					width: 100%;
					text-align: center;

					p {
						text-transform: uppercase;
						font-size: 1rem;
						padding: 5px 10px;
						border-radius: 5px;
						border: 1px solid var(--black-one);
						display: inline-block;
						cursor: pointer;
						font-weight: 700;
						color: var(--grey-btn) ;
					}
				}

				.wrap-champ:after {
					content: "";
					position: absolute;
					top: 0px;
					right: 0px;
					width: 11%;
					padding-top: 11%;
					background-color: rgb(255, 255, 255);
					transition: transform 0.5s ease 0s;
					transform: translate(50%, -50%) rotate(45deg);
					transition: 0.4s;
				}

				.wrap-champ:hover {
					img {transform: scale3d(1, 1, 1);}
				}

				.wrap-champ:hover:after{ transform: translate(100%, -100%) rotate(45deg) !important; }
			}
		}
	}
}

@media (max-width: 1000px) {
	.wrarp-detail-account {
		.detail-content {
			.view-champs {
				.wrap-champ {
					grid-column: span 3 !important;
				}
				.champ-name {font-size: 1rem !important;}
			}
		}
	}
}
@media (max-width: 480px) {
	.wrarp-detail-account {
		.action-block {
			.btn-buy-now, .price .pay-card-price, .pay-atm-price {
				font-size: 1rem !important;
			}
		}

		.nav-view-detail {
			flex-direction: column;
			>div{
				padding: 0px 20px !important;
			}
		}

		.detail-content {
			margin-top: 15px !important;
			.recharge-atm-momo {
				font-size: 1.1rem !important;
			}

			.view-champs {
				.wrap-champ {
					grid-column: span 4 !important;

					.champ-name {font-size: 0.8rem !important;}
				}

				.wrap-champ:after { display: none; }
			}
		}
	}
	
}

</style>