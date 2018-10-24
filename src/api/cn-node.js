import axios from 'axios'

function getCnNodeList () {
  return axios.get('https://cnodejs.org/api/v1/topics')
}

export { getCnNodeList }
