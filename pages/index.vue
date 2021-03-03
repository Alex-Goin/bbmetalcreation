<template>
  <div>
    <Top :id="0" />
    <div id="head">
      <HeadInfos
        :title="infos.title"
        :description="infos.description"
        :actions="infos.actions"
        :id="1"
      />
    </div>
    <div id="info_design">
      <Infos :title="infos_design.title" :infos="infos_design.infos" :id="2" />
    </div>
    <div id="info_urbain">
      <Infos :title="infos_urbain.title" :infos="infos_urbain.infos" :id="3" />
    </div>
    <div id="info_metal">
      <Infos :title="infos_metal.title" :infos="infos_metal.infos" :id="4" />
    </div>
    <div id="foot">
      <Footer :id="5" />
    </div>
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
#head {
  background: url('~/assets/img/welder.jpg');
}
#foot {
  background: url('~/assets/img/footer.jpg');
}
#info_design {
  background: url('~/assets/img/design.jpg');
}
#info_urbain {
  background: url('~/assets/img/urbain.jpg');
}
#info_metal {
  background: url('~/assets/img/metal.jpg');
}
</style>
