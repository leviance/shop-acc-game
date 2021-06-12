<template>
	<div id="app">
		<div id="nav">
			<div class="wrap-nav">
				<div class="nav-left">
					<div class="logo"><router-link to="/"><img src="./assets/images/logo.png" alt=""></router-link> </div>
					<ul class="menu">
						<li><router-link to="/">TRANG CHỦ</router-link></li>
						<li><router-link :to="{name: 'RechargeOnline'}">NẠP THẺ</router-link></li>
						<li><router-link :to="{name: 'RechargeOnline'}">NẠP ATM/MOMO TẶNG 25% TỰ ĐỘNG 24/24</router-link></li>
					</ul>
				</div>
				<div class="nav-right">
					<router-link to="/">
						<div class="btn-account">
							<strong>TÀI KHOẢN</strong>
							<span>Ví: 0 VNĐ</span>
						</div>
					</router-link>
					<router-link to="/">
						<div class="btn-logout"><strong>ĐĂNG XUẤT</strong></div>
					</router-link>
				</div>
			</div>
		</div>
		<router-view />
	</div>
</template>

<script>
export default {
	
}
</script>

<style lang="scss">
	:root {
		--yellow-btn: -webkit-linear-gradient(bottom,#ffe900,#f2ac00);
		--yellow-text: #f7c613cf;
		--yellow-active: #f7c613;
		--red-text: #e32a2a;
		--red-btn: #dc2626;
		--max-width: 1152px;
		--black-one: #27272a;
		--black-two: #131318;
	}
	body, html {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		font-family: "Roboto Condensed",sans-serif;
	}

	body {
		background-image: url('./assets/images/bg.png');
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: cover;
	}

	ul {
		li {
			display: inline-block;
			list-style: none;
		}
	}

	a { text-decoration: none; color: #000000}

	#nav {
		background-color: #000000;
		.wrap-nav {
			max-width: var(--max-width);
			margin: auto;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 3px 0;
			
			.nav-left {
				display: flex;
				align-items: center;

				.menu {
					li{ 
						a{ 
							color: var(--red-text);
							font-weight: 700;	
							font-size: 1.1rem;
							padding: 1rem;
						}
					}
				}
			}

			.nav-right {
				display: flex;

				.btn-account, .btn-logout {
					width: 130px;
					height: 40px;
					background: var(--yellow-btn);
					border-radius: 5px;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					box-shadow: 2px -5px 30px rgba(0,0,0, 0.5);
					font-weight: 700;

					span { font-size: 0.75rem; }
				}

				.btn-account {
					margin-right: 5px;
				}
			}
		}
	}
</style>
