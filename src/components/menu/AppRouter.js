import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from 'react-router-dom';


import { Ejercicios } from './Ejercicios';

import { CounterApp } from '../01-useState/CounterApp';
import { FormWithCustomHook } from '../02-useEffect/FormWithCustomHook';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';
import { RealExampleRef } from '../04-useRef/RealExampleRef';
import { Layout } from '../05-useLayoutEffect/Layout';
import { Memorize } from '../06-memos/Memorize';
import { Padre } from '../07-tarea-memo/Padre';
import { TodoApp } from '../08-useReducer/TodoApp';
import { MainApp } from '../09-useContext/MainApp';


/*
import { HookApp } from './HookApp';
import { CounterApp } from './components/01-useState/CounterApp';
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
import { SimpleForm } from './components/02-useEffect/SimpleForm';
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
import { RealExampleRef } from './components/04-useRef/RealExampleRef';
import { Layout } from './components/05-useLayoutEffect/Layout';
import { Memorize } from './components/06-memos/Memorize';
import { MemoHook } from './components/06-memos/MemoHook';
import { CallbackHook } from './components/06-memos/CallbackHook';
import { Padre } from './components/07-tarea-memo/Padre';
import { TodoApp } from './components/08-useReducer/TodoApp';
*/




export const AppRouter = () => {
    return (
        <Router>
            <div>
                
                <Ejercicios />

                <br></br>

                        <Switch>






                                <Route exact path="/counterApp" component={ CounterApp } />
                                <Route exact path="/simpleForm" component={ FormWithCustomHook } />
                                <Route exact path="/MultipleCustomHooks" component={ MultipleCustomHooks } />
                                <Route exact path="/RealExampleRef" component={ RealExampleRef } />
                                <Route exact path="/Layout" component={ Layout } />
                                <Route exact path="/Memorize" component={ Memorize } />
                                <Route exact path="/Padre" component={ Padre } />
                                <Route exact path="/TodoApp" component={ TodoApp } />
                                <Route exact path="/MainApp" component={ MainApp } />

                                <Redirect exact to="/" component={ CounterApp }/>


                                


                        </Switch>


            </div>
        </Router>
    )
}
