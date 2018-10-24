<template>
  <div>
    <h1>Server Fetch Data:</h1>
    {{ list }}
  </div>
</template>

<script>
import cnNodeStoreModule from '@/store/cn-node'
export default {
  data () {
    return {}
  },
  asyncData ({ store, route }) {
    store.registerModule('cnNode', cnNodeStoreModule)
    return store.dispatch('cnNode/getList')
  },
  computed: {
    list () {
      return this.$store.state.cnNode.list
    }
  },
  destroyed () {
    this.$store.unregisterModule('cnNode')
  }
}
</script>
