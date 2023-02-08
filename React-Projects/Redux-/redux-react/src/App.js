
import {Provider} from 'react-redux';
import './App.css';
import EggContainer from './components/EggContainer';
import HookChickenContainer from './components/HookChickenContainer.js';
import HookEggCotainer from './components/HookEggCotainer';
// import HookUserContainer from './components/HookUserContainer';
import store from './redux/store';

function App() {
  return (
    <div className="App">
     <Provider store={store}>
      <EggContainer/>
      <HookEggCotainer/>
      <HookChickenContainer/>
      {/* <HookUserContainer/> */}
     </Provider>
    </div>
  );
}

export default App;
