import React from 'react';
import { connect } from 'react-redux';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/Menu-Item';

import '../../style/directory.scss';

const Directory = (props) => {

    return (
        <div className="directory-menu">
            {
               props.sections.map(section => (
                    <MenuItem
                        key={section.id}
                        title={section.title}
                        imageUrl={section.imageUrl}
                        size={section.size}
                        linkUrl={section.linkUrl}
                    />
                ))
            }
        </div>
    )

}

const mapStateToProps = (state) => ({
    sections: selectDirectorySections(state)
})

export default connect(mapStateToProps)(Directory);