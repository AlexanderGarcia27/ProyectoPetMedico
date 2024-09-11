import { useState } from 'react';
import Login from './components/login';
import './App.css';

function App() {
  return (
    <div className="h-screen w-screen flex justify-center items-center text-center">
      <div className="max-w-3xl w-full px-3">
        <Login />
      </div>
    </div>
  );
}

export default App;
