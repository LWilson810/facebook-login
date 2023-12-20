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
        async redirect({url, baseUrl}) {
            console.log("==========Callback function is run==================", url)
          return url.startsWith(baseUrl) ? url : baseUrl;
        },
      },
      // Set the callback URL to match the redirect URI in the Facebook Developer portal
}

export default (req, res) => NextAuth(req, res, options)