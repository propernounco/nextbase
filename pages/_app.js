import React from 'react';
import App, { Container } from 'next/app';
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-WTQ33M7'
}

class ProperApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount(){   
    TagManager.initialize(tagManagerArgs)
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default ProperApp;