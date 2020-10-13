import React from 'react'

import SmallHeader from '../components/Header/SmallHeader'
import LargeHeader from '../components/Header/LargeHeader'

import { IonPage, IonContent } from '@ionic/react'

const Profile = () =>
  <IonPage>
    <SmallHeader title='Profile' />
    <IonContent fullscreen>
      <LargeHeader title='Profile' />
    </IonContent>
  </IonPage>

export default Profile
