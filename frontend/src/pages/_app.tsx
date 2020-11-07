import React from 'react'
import App from 'next/app'
import { IconSettings } from '@salesforce/design-system-react'

import Wrapper from 'src/components/accessibility/Wrapper'
import { wrapper } from 'src/store/store'
import { Toasts } from 'src/components/Toasts'
import { Modal } from 'src/components/Modal';

export class CreateCVApp extends App {

  render() {
    const { Component, pageProps } = this.props;
    return (
      <IconSettings iconPath="/icons">
        <Wrapper >
          <Component {...pageProps} />
          <Toasts />
          <Modal />
        </Wrapper>
      </IconSettings>
    )
  }
}

export default wrapper.withRedux(CreateCVApp)