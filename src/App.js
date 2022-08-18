import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCounter from './components/HooksCounter';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <Counter></Counter> */}
        <HooksCounter></HooksCounter>
      </Provider>
    </div>
  );
}

export default App;
