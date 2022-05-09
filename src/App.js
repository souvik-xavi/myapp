import logo from './logo.svg';
import './App.css';
import {MyComponent} from './component/MyComponent';
import {MyFuncComponent} from './component/MyFuncComponent';
import Counter from './component/Counter';
import RefDemo from './component/RefDemo';
import CountCounter from './component/CountCounter'; 
import ViewCounter from './component/ViewCounter';
import RouterDemo from './component/RouterDemo';

function App() {
  return (
    // <div>
    //   <div>
    //     <h2> This content is from App.js</h2>
    //   </div>
    //   <MyComponent name ="Mark"/>
    //   <p>Separating components::</p>
    //   <MyFuncComponent state ="WB"/>
    //   <hr>
    //   </hr>
    //   <Counter />
    // </div>s
    //<RefDemo/>
    <div>
    <RouterDemo/>
    
    </div>
  );
}

export default App;
