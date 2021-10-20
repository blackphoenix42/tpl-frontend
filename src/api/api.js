import axios from 'axios'

export default axios.create({
    baseURL: 'https://tpl-matchmaking.herokuapp.com/'
})