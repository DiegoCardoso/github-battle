import axios from 'axios'

const params = {
    client_id: '',
    client_secret: '',
    query() {
        return `?client_id=${this.client_id}&client_secret=${this.client_secret}`
    }
}

const getUserInfo = (username) => axios.get(`https://api.github.com/users/${username}${params.query()}`)

const getUserRepos = (username) => axios.get(`https://api.github.com/users/${username}/repos${params.query()}&per_page=100`)

const getUserTotalStars = (repos) => {
    return repos.data.reduce((agr, current) => {
        return agr + current.stargazers_count
    }, 0);
}

const getPlayersData = (player) => {
    return getUserRepos(player.login)
        .then(getUserTotalStars)
        .then((totalStars) => {
            return {
                followers: player.followers,
                totalStars: totalStars
            }
        })
}

const calculateScores = (players) => {
    return players.map((player) => player.followers * 3 + player.totalStars)
}

const helpers = {
    getPlayersInfo(players) {
        return axios.all(players.map(getUserInfo))
            .then((info) => {
                return info.map((user) => user.data)
            })
    },
    
    battle(playersInfo) {
        const playersData = playersInfo.map(getPlayersData);
        
        return axios.all(playersData)
            .then(calculateScores)
            .catch(err => console.warn('Error in getPlayersInfo:', err));
    }
}

export default helpers