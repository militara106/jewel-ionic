import { IonPage, IonContent } from "@ionic/react";
import React from "react";
import Landing from "../components/Landing";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import "../global.css";

export class Home extends React.Component<any, any> {
  // const Home: React.FC = () => {
  constructor(props: any) {
    super(props);

    this.state = {
      account: "",
      jewel: "",
    };
  }
  render() {
    return (
      <IonPage>
        <IonContent>
          {/*-------------- Landing Page START --------------*/}
          <Landing />
          {/*-------------- Landing Page END --------------*/}
        </IonContent>
      </IonPage>
    );
  }
}

export default Home;
