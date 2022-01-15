import React from "react";
import { TotalScreen } from "../utilities/commonUtils";

export default function components() {
  const mappAllScreen = () => {
    return TotalScreen.map((screen) =>
      screen.components ? (
        <screen.components
          screenName={screen.screen_name}
          key={screen.screen_name}
          id={screen.screen_name}
        />
      ) : (
        <div key={screen.screen_name}></div>
      )
    );
  };
  return <div className="components_container">{mappAllScreen()}</div>;
}
