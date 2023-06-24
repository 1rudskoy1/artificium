import './scss/index.scss';
import './scss/media.scss';
import './index.html';
import {Router} from './core/routes/Router';
import {AuthPage} from './pages/AuthPage';
new Router('body', {
  auth: AuthPage,
});