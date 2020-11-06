import Head from 'next/head'
import { Button } from '@salesforce/design-system-react';
import React from 'react';
import { connect } from 'react-redux'

import * as Variables from 'src/env/variables'

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
            <Head>
              <title>{Variables.applicationName}</title>
              <link rel="icon" href="/favicon.ico" />
              <link rel="stylesheet" type="text/css" href="/salesforce-lightning-design-system.min.css"></link>
            </Head>
  
            <main>
              <Button label="Hello Button" />
            </main>
  
            <footer>
  
            </footer>
      </div>
    )
  }
}
