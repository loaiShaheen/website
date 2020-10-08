import React from 'react'
import Head from 'next/head';
import HomePage from './home'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <script src="https://kit.fontawesome.com/40e49524bb.js" crossOrigin="anonymous"></script>
        </Head>
        <HomePage />
      </div>
    )
  }
}
