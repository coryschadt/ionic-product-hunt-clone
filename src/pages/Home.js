import React from 'react'

import SmallHeader from '../components/Header/SmallHeader'
import LargeHeader from '../components/Header/LargeHeader'

import { IonPage, IonContent } from '@ionic/react'

const Home = () =>
  <IonPage>
    <SmallHeader title='Hunt' />
    <IonContent fullscreen>
      <LargeHeader title='Hunt' />
    </IonContent>
  </IonPage>

export default Home
