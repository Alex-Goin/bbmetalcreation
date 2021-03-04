<template>
	<nav class="navbar has-background-light is-fixed-top py-3" id="top">
		<div class="container">
			<div class="navbar-brand">
				<a class="navbar-item" href="/">
					<span
						class="title has-text-weight-light is-uppercase has-text-dark nav_title"
						>B.B. Metal Creation
					</span>
				</a>

				<a
					role="button is-large"
					class="navbar-burger mx-0 my-0"
					aria-label="menu"
					aria-expanded="false"
					data-target="navbarBasicExample"
					@click="show_nav = !show_nav"
				>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>
			<div
				class="navbar-menu"
				id="navbarBasicExample"
				:class="{ 'is-active': show_nav }"
			>
				<div class="navbar-end">
					<div class="navbar-item">
						<div class="buttons">
							<a href="/" class="button is-info is-medium"
								>Accueil</a
							>

							<a
								href="#prestation-soudure"
								class="button is-info is-medium"
								>Prestation soudure</a
							>

							<a href="/" class="button is-info is-medium"
								>Métallerie</a
							>

							<a href="/" class="button is-info is-medium"
								>Mobilier Acier</a
							>
							<a href="/" class="button is-success is-medium"
								>Contact</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	props: ['id'],
	data() {
		return {
			show_nav: false,
		}
	},
}
</script>

<style>
.nav_title {
	font-family: 'Raleway', sans-serif;
}
</style>
