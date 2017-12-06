module.exports = {
  facebook: {
    loginURL: 'https://www.facebook.com/v2.8/dialog/oauth',
    accessTokenURL: 'https://graph.facebook.com/v2.8/oauth/access_token',
    clientId: '160567791347154',
    clientSecret: process.env.FACEBOOK_SECRET_KEY,
    scope: 'email',
    getLoginURL() {
      return `${this.loginURL}?client_id=${this.clientId}&scope=${this.scope}&redirect_uri=http://localhost:3000/`;
    }
  }
};
