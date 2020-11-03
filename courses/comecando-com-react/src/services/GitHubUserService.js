import axios from 'axios';

const endpointGitHubUser = 'https://api.github.com/users/';

const GitHubUserService = {
    getByUserName: (userName) => axios.get(`${endpointGitHubUser}${userName}`),
    getReposByUserName: (userName) => axios.get(`${endpointGitHubUser}${userName}/repos`),
}

export default GitHubUserService;