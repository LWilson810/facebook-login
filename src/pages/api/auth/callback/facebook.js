import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';

export default NextAuth({
  providers: [
    FacebookProvider({
      clientId: '777565144211400',
      clientSecret: 'b25b284325a674258641e6678a0e68e6',
    }),
  ],
  secret: "v7COYqKpEdnCbd5aISAw9BxjupOLKYCgBVZ2kwusMNs=", 
  callbacks: {
    async signIn(user, account, profile) {
      // Customize the callback behavior when the user successfully signs in with Facebook
      // For example, you can redirect the user to a specific page
      console.log("====================== Facebook Login is successed====================")
      console.log(user)
      console.log(profile);

      return '/dashboard';
    },
  },
});