import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import reportWebVitals from './reportWebVitals';

const initialState = {
  userId: -1,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'update-structures':
      return { numStructures: action.numStructures, ...action.state };
    case 'update-cps':
      return { cps: action.cps, ...action.state };
    default:
      return state;
  }
};

const saveState = (state: any) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem('state', serializedState);
};

const App: React.FC = () => {
  let i = 0;
  const [contextState, updateContext] = React.useReducer(reducer, initialState);
  const AppContext = React.createContext({ state: contextState, updater: updateContext });
  React.useEffect(() => {
    updateContext(localStorage.getItem('state'));
    if (localStorage.getItem('time') !== null) {
      const duration = new Date().getMilliseconds() - parseInt(localStorage.getItem('time')!, 10);
      if (duration > 10000) {
        document.getElementById('welcome-back')!.style.display = 'block';
        document.getElementById(
          'welcome-back-text',
        )!.innerHTML = `Welcome back, you were offline for ${Math.floor(duration / 1000)} seconds.`;
      }
    }
  }, []);
  setInterval(() => {
    updateContext({ type: 'update-structures', numStructures: contextState.cps * i });
    i += 0.1;
  }, 100);
  setInterval(() => {
    saveState(contextState);
  }, 1000);
  setInterval(() => {
    localStorage.setItem('time', new Date().getMilliseconds().toString());
  }, 1000);
  return (
    <AppContext.Provider value={{ state: contextState, updater: updateContext }}>
      <div id="welcome-back" style={{ display: 'none' }}>
        <span id="welcome-back-text"></span>
      </div>
    </AppContext.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
