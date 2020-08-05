import { IonContent, IonPage, IonGrid, IonRow, IonCol } from "@ionic/react";
import React from "react";
// import ExploreContainer from "../components/ExploreContainer";
import "../global.css";

const Home: React.FC = () => {
  return (
    // <IonPage>
    //   <IonHeader>
    //     <IonToolbar>
    //       <IonTitle>Blank</IonTitle>
    //     </IonToolbar>
    //   </IonHeader>
    //   <IonContent>
    //     <IonHeader collapse="condense">
    //       <IonToolbar>
    //         <IonTitle size="large">Blank</IonTitle>
    //       </IonToolbar>
    //     </IonHeader>
    //     <ExploreContainer />
    //   </IonContent>
    // </IonPage>

    <IonPage>
      <IonContent className="landing no-scroll">
        {/* BG Picture */}
        <div className="bg"></div>
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
                <div className="signUp borderlessButton customButton">
                  Sign Up
                </div>
              </IonCol>
            </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
