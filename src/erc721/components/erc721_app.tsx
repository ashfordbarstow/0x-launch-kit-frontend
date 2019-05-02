import React from 'react';
import { Route, Switch } from 'react-router';

import { ERC721_APP_BASE_PATH } from '../../common/constants';
import { GeneralLayoutContainer } from '../../components/general_layout';
import { MyCollectibles } from '../pages/my_collectibles';

import { ToolbarContainer } from './common/toolbar';

const Toolbar = <ToolbarContainer />;

export const Erc721App = () => (
    <GeneralLayoutContainer toolbar={Toolbar}>
        <Switch>
            <Route exact={true} path={`${ERC721_APP_BASE_PATH}/`} component={MyCollectibles} />
        </Switch>
    </GeneralLayoutContainer>
);
