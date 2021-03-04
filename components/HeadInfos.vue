<template>
	<section class="section">
		<div class="level">
			<div class="level-item">blablabla</div>
			<div class="level-item slides">
				<div v-if="images.length">
					<splide :options="options">
						<splide-slide
							v-for="(image, index) in images"
							:key="index"
						>
							<figure class="image has-ratio">
								<img :src="image.pathLong" />
							</figure>
						</splide-slide>
					</splide>
				</div>
				<div v-else class="has-text-centered">
					<span>Loading...</span>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: ['title', 'description', 'actions'],

	data() {
		return {
			options: {},
			images: [],
		}
	},
	created() {
		this.importAll(require.context('../assets/img/', true, /\.*$/))
	},

	methods: {
		importAll(r) {
			r.keys().forEach((key) =>
				this.images.push({ pathLong: r(key), pathShort: key })
			)
		},
	},
}
</script>

<style scoped>
.section {
	margin-top: 10vh;
	height: 100%;
}
.slides {
	background-color: aqua;
}
</style>
