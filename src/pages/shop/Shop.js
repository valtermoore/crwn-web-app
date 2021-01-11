import React from 'react';

import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection/Collection';

const ShopPage = (props) => {

    return (
        <div className="shop-page">
            <Route exact path={`${props.match.path}`} component={CollectionsOverview} />
            <Route exact path={`${props.match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )

};


export default ShopPage;