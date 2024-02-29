import Link from 'next/link'
import { signIn } from 'next-auth/react'
import * as React from 'react'
import { Settings } from 'react-feather'

import { Avatar } from '~/components/Avatar'
import { GhostButton } from '~/components/Button'
import { LoadingSpinner } from '~/components/LoadingSpinner'
import { useViewerQuery } from '~/graphql/types.generated'

import { GlobalNavigationContext } from '../Providers'

function Container(props) {
  return (
    <div
      data-cy="sign-in-button"
      className="sticky bottom-0 z-10 flex items-center justify-between p-2 space-x-3 bg-white border-t filter-blur border-gray-150 bg-opacity-80 dark:border-gray-800 dark:bg-gray-900 dark:bg-opacity-60"
      {...props}
    />
  )
}

export function UserFooter() {
  const { data, loading, error } = useViewerQuery()
  const { setIsOpen } = React.useContext(GlobalNavigationContext)

  function signInButton() {
    return (
      <GhostButton onClick={() => signIn('github')} style={{ width: '100%' }}>
        Sign in
      </GhostButton>
    )
  }

  if (loading) {
    return (
      <Container>
        <div className="flex items-center justify-center w-full py-1">
          <LoadingSpinner />
        </div>
      </Container>
    )
  }

  if (error) {
    return <Container>{signInButton()}</Container>
  }

  if (data?.viewer) {
    return (
      <Container>
        <Link
          href={`/u/${data.viewer.username}`}
          onClick={() => setIsOpen(false)}
          className="flex items-center flex-none gap-2"
        >
          <Avatar
            user={data.viewer}
            src={data.viewer.avatar}
            width={24}
            height={24}
            layout="fixed"
            className="rounded-full"
          />
          <span className="text-gray-700 dark:text-gray-300">
            {data.viewer.name.length > 13
              ? data.viewer.name.slice(0, 13) + ' ...'
              : data.viewer.name}
          </span>
        </Link>
        <GhostButton
          aria-label="Manage settings"
          onClick={() => setIsOpen(false)}
          size="small-square"
          href="/settings"
        >
          <Settings size={16} />
        </GhostButton>
      </Container>
    )
  }

  return <Container>{signInButton()}</Container>
}
