import Head from 'next/head'

import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from '@/lib/constants'

// TODO: Set the actual Favicon to be used.
const Meta = () => (
  <Head>
    <title>{SITE_TITLE}</title>
    <meta name='description' content={SITE_DESCRIPTION} />
    <meta property='og:url' content={SITE_URL} />
    <meta property='og:type' content='website' />
    <meta property='og:title' content={SITE_TITLE} />
    <meta property='og:description' content={SITE_DESCRIPTION} />
    <meta property='og:site_name' content={SITE_TITLE} />
    <meta property='og:image' content='' />
    <meta name='msapplication-TileColor' content='#000' />
    <meta name='msapplication-config' content='/favicon/browserconfig.xml' />
    <meta name='theme-color' content='#000' />
    <link
      rel='apple-touch-icon'
      sizes='180x180'
      href='/favicon/apple-touch-icon.png'
    />
    <link
      rel='icon'
      type='image/png'
      sizes='32x32'
      href='/favicon/favicon-32x32.png'
    />
    <link
      rel='icon'
      type='image/png'
      sizes='16x16'
      href='/favicon/favicon-16x16.png'
    />
    <link rel='manifest' href='/favicon/site.webmanifest' />
    <link rel='mask-icon' href='/favicon/safari-pinned-tab.svg' color='#000' />
    <link rel='shortcut icon' href='/favicon/favicon.ico' />
    <link rel='alternate' type='application/rss+xml' href='/feed.xml' />
  </Head>
)

export default Meta
