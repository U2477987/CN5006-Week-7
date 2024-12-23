import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the new API
import './index.css';
import App from './App'; 
import FacebookEmojiCounter from './Facebookemoji';
import ToggleMode from './ToggleModeComponent'

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root
root.render(
  <React.Fragment>
    <FacebookEmojiCounter type="Like" />
    <FacebookEmojiCounter type="Love" />
    <ToggleMode/>
  </React.Fragment>
);
