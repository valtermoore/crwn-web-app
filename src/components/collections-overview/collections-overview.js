import React from 'react';
import { connect } from 'react-redux';

import CollectionPreview from '../collection-preview/CollectionPreview';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import '../../style/collections-overview.scss';


const CollectionsOverview = (props) => {

    return (
        <div className="collections-overview">
            {
                props.collections.map(collection => (
                    <CollectionPreview
                        key={collection.id}
                        title={collection.title}
                        items={collection.items}
                    />
                ))
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    collections: selectCollectionsForPreview(state)
})

export default connect(mapStateToProps)(CollectionsOverview);
