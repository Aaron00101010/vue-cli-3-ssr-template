<template>
  <div>
    <h1>Server Fetch Data:</h1>
    {{ list }}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      list: {}
    }
  },
  asyncData (store, route) {
    axios.get('https://cnodejs.org/api/v1/topics', (resp) => {
      this.list = resp.data
    })
  }
}
</script>
