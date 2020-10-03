import * as React from 'react';
import PDFViewer from '../../../pdf/PDFViewer/PDFViewer'
import styles from './CreateCV.css'
import Summary from '../../Summary';
import Skills from '../../Skills'
import MetaData from '../../MetaData';
import Hobbies from '../../Hobbies';

import MainContext from '../../../../CreateCVApp';

export default class CreateCV extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="ui" style={styles.ui}>
          <MetaData context={MainContext} />
          <Summary />
          <Skills context={MainContext} />
          <Hobbies context={MainContext} />
        </div>
        <PDFViewer context={MainContext} />
      </div>
    )
  }
}