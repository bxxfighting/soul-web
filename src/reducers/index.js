import { combineReducers } from 'redux';

import Login from './Login';
import Store from './Store';
import Menu from './Menu';
import Router from './Router';
import Mod from './Mod';
import User from './User';
import Role from './Role';
import Url from './Url';
import TitleBar from './TitleBar';

const reducers = combineReducers(
    {
        login: Login,
        store: Store,
        menu: Menu,
        router: Router,
        mod: Mod,
        user: User,
        role: Role,
        url: Url,
        titleBar: TitleBar,
    },
)

export default reducers;