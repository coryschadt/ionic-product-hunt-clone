import React from 'react'

import SmallHeader from '../components/Header/SmallHeader'
import LargeHeader from '../components/Header/LargeHeader'

import { IonPage, IonContent } from '@ionic/react'

const Submit = () =>
  <IonPage>
    <SmallHeader title='Submit' />
    <IonContent fullscreen>
      <LargeHeader title='Submit' />
    </IonContent>
  </IonPage>

export default Submit
