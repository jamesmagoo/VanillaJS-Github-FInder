class Github {
    constructor() {
        this.client_id ='406145143eb99a7f1c64';
        this.client_secret ='c972b618f549affee29f4301ba22d38ee878d31b';
        this.repos_count = 5
        this.repos_sort = 'created: asc'
    }

    // Create a GET user method
    async getUser(user) {

        // Get Profile
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        // Get Repos
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        const repo = await repoResponse.json();

        return { profile : profile , repo : repo} ;
    }
}