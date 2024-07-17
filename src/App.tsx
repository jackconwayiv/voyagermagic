import { Flex, Spacer } from "@chakra-ui/react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { initialGameState } from "./data/initialGameState";
import { GameState } from "./data/types";
import "./index.css";
import CampaignsView from "./views/CampaignsView";
import PlayView from "./views/PlayView";
import ScenesView from "./views/ScenesView";
import SettingsTray from "./views/SettingsTray";
import WelcomePage from "./views/WelcomePage";

function App() {
  const [gameState, setGameState] = useState<GameState>(initialGameState);

  if (gameState)
    return (
      <BrowserRouter>
        <Flex flex="1" flexDirection="column" height="100vh">
          <SettingsTray gameState={gameState} setGameState={setGameState} />
          <Flex flex="1" flexDirection="column">
            <Routes>
              <Route
                path="/"
                // element={
                //   <WelcomePage
                //     gameState={gameState}
                //     setGameState={setGameState}
                //   />
                // }
                element={
                  <ScenesView
                    gameState={gameState}
                    setGameState={setGameState}
                  />
                }
              />
              <Route
                path="/play"
                element={
                  <PlayView gameState={gameState} setGameState={setGameState} />
                }
              />
              <Route
                path="/campaigns"
                element={
                  <CampaignsView
                    gameState={gameState}
                    setGameState={setGameState}
                  />
                }
              />
              <Route
                path="/scenes"
                element={
                  <ScenesView
                    gameState={gameState}
                    setGameState={setGameState}
                  />
                }
              />
              <Route
                path="/*"
                element={
                  <WelcomePage
                    gameState={gameState}
                    setGameState={setGameState}
                  />
                }
              />
            </Routes>
          </Flex>
          <Spacer />
        </Flex>
      </BrowserRouter>
    );
}

export default App;
