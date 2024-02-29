import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

import { syncUser } from '~/lib/nextauth/syncUser'

export const authOptions = {
  secret: process.env.SECRET_KEY,
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      await syncUser(profile)
      return true
    },
  },
}

export default NextAuth(authOptions)
