import { IonGrid, IonRow, IonCol } from "@ionic/react";
import React from "react";
import "../global.css";

interface ContainerProps {}

const Landing: React.FC<ContainerProps> = () => {
  return (
    <div className="landing no-scroll">
      {/* Logo */}
      <div className="landingLogoBG">
        <div className="landingLogo">"Need logo"</div>
      </div>

      {/* Ionic Grid Start */}
      <IonGrid className="textBox ion-text-center">
        {/* App Title */}
        <IonRow>
          <IonCol>
            <div className="landingTitle">Jeweled</div>
          </IonCol>
        </IonRow>
        {/* Sub Title */}
        <IonRow>
          <IonCol>
            <div className="landingSub">The Dating App</div>
          </IonCol>
        </IonRow>
        {/* Description */}
        <IonRow>
          <IonCol>
            <div className="landingDesc">
              Transitioning into a more meaningful relationship
            </div>
          </IonCol>
        </IonRow>
        {/* Sign In */}
        <IonRow>
          <IonCol>
            <div className="signIn borderButton customButton">Sign In</div>
          </IonCol>
        </IonRow>
        {/* Sign Up */}
        <IonRow>
          <IonCol>
            <a href="/register">
              <div className="signUp borderlessButton customButton">
                Sign Up
              </div>
            </a>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default Landing;
