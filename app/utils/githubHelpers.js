import axios from 'axios'

const params = {
    client_id: '',
    client_secret: '',
    query() {
        return `?client_id=${this.client_id}&client_secret=${this.client_secret}`
    }
}

const getUserInfo = (username) => axios.get(`https://api.github.com/users/${username}${params.query()}`)

const helpers = {
    getPlayersInfo(players) {
        return axios.all(players.map(getUserInfo))
            .then((info) => {
                return info.map((user) => user.data)
            })
    }
}

export default helpers