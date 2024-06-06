import logo from './logo.svg';
import './App.css';
// import State_hooks from './usestate/State_hooks';
// import Effect_hook from './useeffect/Effect_hook';
import Context_hook from './usecontext/Context_hook';
import Header from './usecontext/Header';
import Reference_hook from './useref/Reference_hook';
import Reducer_hook from './usereducer/Reducer_hook';
import Layouteffect_hook from './uselayouteffect/Layouteffect_hook';
import Memo_hook from './usememo/Memo_hook';
import Callback_hook from './usecallback/Callback_hook';

function App() {
  return (
    // <Context_hook>

        <div className="App">
          {/* <State_hooks/> */}
          {/* <Effect_hook/> */}
          <Reference_hook/>
          {/* <Reducer_hook/> */}
          {/* <Layouteffect_hook/> */}
          {/* <Memo_hook/> */}
          {/* <Callback_hook/> */}
      {/* <Header /> */}
    </div>
    // </Context_hook>
  );
}

export default App;
