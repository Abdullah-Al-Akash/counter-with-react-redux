import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCounter from './components/HooksCounter';
import DynamicCounter from './components/DynamicCounter';
import VariableCounter from './components/variableCounter';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <Counter></Counter> */}
        <HooksCounter></HooksCounter>
        <DynamicCounter></DynamicCounter>
        <VariableCounter></VariableCounter>
        <VariableCounter dynamic></VariableCounter>
      </Provider>
    </div>
  );
}

export default App;
