import { Flex, Spacer } from "@chakra-ui/react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SettingsTray from "./views/SettingsTray";
import "./index.css";
import CampaignsView from "./views/CampaignsView";
import PlayView from "./views/PlayView";
import ScenesView from "./views/ScenesView";
import WelcomePage from "./views/WelcomePage";

function App() {
  const [playerCount, setPlayerCount] = useState<number>(0);
  const [campaign, setCampaign] = useState<string>("CORE");
  const [scene, setScene] = useState<number>(0);

  return (
    <BrowserRouter>
      <Flex flex="1" flexDirection="column" height="100vh">
        <SettingsTray
          playerCount={playerCount}
          campaign={campaign}
          scene={scene}
        />
        <Flex flex="1" flexDirection="column">
          <Routes>
            <Route
              path="/"
              element={<WelcomePage setPlayerCount={setPlayerCount} />}
            />
            <Route
              path="/play"
              element={
                <PlayView
                  campaign={campaign}
                  playerCount={playerCount}
                  scene={scene}
                />
              }
            />
            <Route
              path="/campaigns"
              element={<CampaignsView setCampaign={setCampaign} />}
            />
            <Route
              path="/scenes"
              element={<ScenesView setScene={setScene} />}
            />
            <Route
              path="/*"
              element={<WelcomePage setPlayerCount={setPlayerCount} />}
            />
          </Routes>
        </Flex>
        <Spacer />
      </Flex>
    </BrowserRouter>
  );
}

export default App;
