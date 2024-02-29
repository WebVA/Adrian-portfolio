/*

Whenever a user signs in or out, sync their data to our database.
If the user is new, we will create their user record. Otherwise,
we use these moments to refresh their Twitter data like avatar,
name, and description

*/

import { prisma } from '~/lib/prisma'

interface AuthUser {
  id: string
  login: string
  name: string
  email: string
  avatar_url: string
  bio: string
  location: string
}

export async function syncUser(authUser: AuthUser) {
  try {
    await prisma.user.upsert({
      where: {
        email: authUser.email,
      },
      update: {
        email: authUser.email,
        description: authUser.bio,
        location: authUser.location,
        name: authUser.name || authUser.login,
        avatar: authUser.avatar_url,
      },
      create: {
        description: authUser.bio,
        location: authUser.location,
        name: authUser.name || authUser.login,
        avatar: authUser.avatar_url,
        username: authUser.login,
        email: authUser.email,
      },
    })
  } catch (error) {
    console.error(error)
  }
}
