import { signIn } from 'next-auth/react'
import * as React from 'react'

import { GithubButton } from '~/components/Button'

export function SignInDialogContent() {
  return (
    <div
      data-cy="sign-in-dialog"
      className="flex flex-col items-start space-y-6 p-4 md:p-6"
    >
      <div className="text-primary grid w-full gap-4 sm:grid-cols-2">
        <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-gray-100 p-4 dark:bg-gray-700 dark:bg-opacity-70">
          <svg
            className="h-6 w-6 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
          </svg>
          <p className="text-primary text-base font-semibold">
            Ask me anything
          </p>
        </div>

        <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-gray-100 p-4 dark:bg-gray-700 dark:bg-opacity-70">
          <svg
            className="h-6 w-6 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-primary text-base font-semibold">
            Comment on posts
          </p>
        </div>

        <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-gray-100 p-4 dark:bg-gray-700 dark:bg-opacity-70">
          <svg
            className="h-6 w-6 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-primary text-base font-semibold">
            Like and save links
          </p>
        </div>

        <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-gray-100 p-4 dark:bg-gray-700 dark:bg-opacity-70">
          <svg
            className="h-6 w-6 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-primary text-base font-semibold">More soon...</p>
        </div>
      </div>

      <div className="flex items-stretch justify-items-stretch self-stretch">
        <GithubButton
          onClick={() => signIn('github')}
          style={{ flex: '1' }}
          size="large"
        >
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <span>Sign in with GitHub</span>
        </GithubButton>
      </div>
      <p className="text-quaternary text-left text-xs">
        Delete your account any time. I will only request access to your public
        Github profile information. You won’t be subscribed to anything.
      </p>
    </div>
  )
}
