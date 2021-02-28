import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import reportWebVitals from './reportWebVitals';

const initialState = {
  userId: -1,
};

const reducer = (state: any, action: any) => {
  switch (action.state) {
    default:
      return state;
  }
};

const App: React.FC = () => {
  const [contextState, updateContext] = React.useReducer(reducer, initialState);
  const AppContext = React.createContext({ state: initialState, updater: updateContext });
  return (
    <AppContext.Provider
      value={{ state: contextState, updater: updateContext }}
    ></AppContext.Provider>
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
