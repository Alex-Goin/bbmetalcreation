<template>
	<div>
		<Top />
		<HeadInfos
			:title="infos.title"
			:description="infos.description"
			:actions="infos.actions"
		/>
		<!-- 		<Infos :title="infos_design.title" :infos="infos_design.infos" />

		<Infos :title="infos_urbain.title" :infos="infos_urbain.infos" />

		<Infos :title="infos_metal.title" :infos="infos_metal.infos" /> -->

		<!-- 	<Footer /> -->
	</div>
</template>

<script>
export default {
	computed: {
		infos() {
			return this.$store.state.header
		},
		infos_design() {
			return this.$store.state.informations.design
		},
		infos_urbain() {
			return this.$store.state.informations.urbain
		},
		infos_metal() {
			return this.$store.state.informations.metal
		},
	},
}
</script>

<style>
</style>
