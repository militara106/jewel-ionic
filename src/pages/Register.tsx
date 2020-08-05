import { IonPage, IonContent } from "@ionic/react";
import React from "react";
import "../global.css";

export class Register extends React.Component<any, any> {
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
          <div>Test SignUp</div>
        </IonContent>
      </IonPage>
    );
  }
}

export default Register;
