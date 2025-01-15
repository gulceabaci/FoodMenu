import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SidebarProvider } from './Context/SideBarContext';
import { MealProvider } from './Context/MealContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SidebarProvider>
    <MealProvider>
      <App />
    </MealProvider>
  </SidebarProvider>
);