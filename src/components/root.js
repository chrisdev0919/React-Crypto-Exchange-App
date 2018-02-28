import React, {Component} from 'react';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router'
import { store, history } from '../redux/store'
import URLS from '../constants/urls'
//Views
import Trading from './trading'
import Wallet from './wallet'
import AddCurrency from './add_currency'
import Analytics from './analytics'


class Root extends Component {

    render() {

        return(
            <Provider store={store()}>
                <ConnectedRouter history={history}>
                    <div>
                        <Route exact path={URLS.Trading} component={Trading} />
                        <Route path={URLS.Wallet} component={Wallet} />
                        <Route path={URLS.AddCurrency} component={AddCurrency} />
                        <Route path={URLS.Analytics} component={Analytics} />
                    </div>
                </ConnectedRouter>
            </Provider>
        )
    }
}

export default Root