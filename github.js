class Github {
    constructor() {
        this.client_id ='406145143eb99a7f1c64';
        this.client_secret ='c972b618f549affee29f4301ba22d38ee878d31b';
    }

    // Create a GET user method
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return { profile : profile } ;
    }
}