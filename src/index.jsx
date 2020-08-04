import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/Cadastro/Video';
import CadastroCategoria from './pages/Cadastro/Categoria';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} exact/>
      <Route component={() => <div>404</div>} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)