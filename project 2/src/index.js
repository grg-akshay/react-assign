import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import AppContainer from './containers/AppContainer';
import * as serviceWorker from './serviceWorker';
import './styles/index.css';


const store=configureStore();

const jsx=(
    <Provider store={store} >
        <AppContainer />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));

serviceWorker.unregister();