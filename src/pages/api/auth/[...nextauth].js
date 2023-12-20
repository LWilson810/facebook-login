import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';

const options = {
    providers: [
        FacebookProvider({
          clientId: "777565144211400",
          clientSecret: "b25b284325a674258641e6678a0e68e6"
        }),
    ],
    secret: "v7COYqKpEdnCbd5aISAw9BxjupOLKYCgBVZ2kwusMNs=", 
    callbacks: {
        async signIn(user, account, profile) {
      return true
    },
    async redirect(url, baseUrl) {
      return baseUrl
    },
    async session(session, user) {
      return session
    },
    async jwt(token, user, account, profile, isNewUser) {
      return token
    }
      },
      // Set the callback URL to match the redirect URI in the Facebook Developer portal
}

export default (req, res) => NextAuth(req, res, options)
