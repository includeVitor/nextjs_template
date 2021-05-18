import React from 'react'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '@store/index'
import { ThemeProvider } from '@theme'

const Noop = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <>{children}</>
)

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const Layout = (Component as any).Layout || Noop

  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <Layout pageProps={pageProps}>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Provider>
    </>
  )
}
