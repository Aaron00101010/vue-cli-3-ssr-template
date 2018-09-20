<template>
  <div>
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  },
  created () {
    /* eslint no-new: 0 */
    new Promise((resolve, reject) => {
      this.msg = 'here is hello 😄'
      resolve()
    })
  }
}
</script>
