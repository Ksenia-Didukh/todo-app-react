import './styles/index.css';
import './styles/todo-list.css';
import './styles/filters.css';

import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Todos } from './components/Todos';
import { TodosProvider } from './components/TodosContext';

ReactDOM.render(
  <TodosProvider>
    <HashRouter>
      <Routes>
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
        <Route path="/" element={<App />}>
          <Route path="*" element={<h1 className="title">Page not found</h1>} />

          <Route index element={<Todos />} />
          <Route path=":filter" element={<Todos />} />
        </Route>
      </Routes>
    </HashRouter>
  </TodosProvider>,
  document.getElementById('root'),
);
