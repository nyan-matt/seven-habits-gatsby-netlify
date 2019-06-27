import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import Transition from './Transition'
import SideNav from './SideNav'
import MobileNav from './MobileNav';


const Layout = ({ children, location }) => {
  const { title, description } = useSiteMetadata()
  return (
    <Fragment>
      <Helmet bodyAttributes={{
        class: 'body-bg'
      }}>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>
        
        <SideNav />
        {/* <Navbar /> */}
        <MobileNav />
      <Transition location={location}>
         {children}
      </Transition>
    </Fragment>
  )
}

export default Layout
