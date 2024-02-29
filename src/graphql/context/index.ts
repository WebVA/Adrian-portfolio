import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth'

import { prisma } from '~/lib/prisma'
import { authOptions } from '~/pages/api/auth/[...nextauth]'

import { User, UserRole } from '../types.generated'

export async function isAuthenticated(req, res) {
  const session = await getServerSession(req, res, authOptions)

  return session
}

export async function getViewer(req, res) {
  const session = await isAuthenticated(req, res)

  let viewer = null
  if (session) {
    viewer = await prisma.user.findUnique({
      where: { email: session.user.email },
    })
  }

  return viewer
    ? {
        ...viewer,
        isAdmin: viewer?.role === UserRole.Admin,
      }
    : null
}

export async function getContext(req, res) {
  const viewer = await getViewer(req, res)

  return {
    viewer,
    prisma,
  }
}

export default async function context(ctx) {
  return await getContext(ctx.req, ctx.res)
}

export type Context = {
  prisma: PrismaClient
  viewer: User | null
}
