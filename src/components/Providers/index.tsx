import { ApolloProvider } from '@apollo/client'
import { NextPageContext } from 'next'
import { SessionProvider } from 'next-auth/react'
import * as React from 'react'

import { useApollo } from '~/lib/apollo'

import { FathomProvider } from './Fathom'
import { SEO } from './SEO'
import { Toast } from './Toaster'

interface PageProps extends NextPageContext {
  session: any
}
interface Props {
  children?: any
  pageProps: PageProps
}

const globalNavigationContext = {
  isOpen: false,
  setIsOpen: (val: boolean) => {},
}

export const GlobalNavigationContext = React.createContext(
  globalNavigationContext
)

export function Providers({ children, pageProps }: Props) {
  const apolloClient = useApollo(pageProps)

  const initialState = {
    isOpen: false,
    setIsOpen,
  }

  const [state, setState] = React.useState(initialState)

  function setIsOpen(isOpen) {
    return setState({ ...state, isOpen })
  }

  return (
    <>
      <SEO />
      <FathomProvider />
      <Toast />

      <SessionProvider session={pageProps.session}>
        <ApolloProvider client={apolloClient}>
          <GlobalNavigationContext.Provider value={state}>
            {children}
          </GlobalNavigationContext.Provider>
        </ApolloProvider>
      </SessionProvider>
    </>
  )
}
