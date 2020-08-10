import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/Cadastro/Video';
import CadastroCategoria from './pages/Cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path={['/', '/home']} component={Home} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route component={() => <div>404</div>} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
