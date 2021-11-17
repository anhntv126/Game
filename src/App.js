import logo from './logo.svg';
import './App.css';

import SceneManager from './components/ScenceManager';
import config from "./etc/config.json";

function App() {
  return (
    <SceneManager
      scenes={config.scenes}
      initialSceneId={config.initialSceneId}
    />
  );
}

export default App;
