import NextHead from 'next/head'
import { DefaultSeo } from 'next-seo'
import config from '@lib/seo.json'

export default function Cart2() {
  return (
    <>
      <DefaultSeo {...config} />
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" key="site-manifest" />
      </NextHead>
    </>
  )
}
