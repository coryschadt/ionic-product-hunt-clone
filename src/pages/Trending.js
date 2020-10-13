import React from 'react'

import SmallHeader from '../components/Header/SmallHeader'
import LargeHeader from '../components/Header/LargeHeader'

import { IonPage, IonContent } from '@ionic/react'

const Trending = () =>
  <IonPage>
    <SmallHeader title='Trending' />
    <IonContent fullscreen>
      <LargeHeader title='Trending' />
    </IonContent>
  </IonPage>

export default Trending
