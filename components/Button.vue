<template>
  <button :class="classList" @click.prevent="btnFunction">
    {{ btnTitle }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    btnTitle: String,
    classList: String,
    btnFunction: Function,
  },
};
</script>

<style lang="scss" scoped>

</style>
