import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    onClick: PropTypes.func,
    id: PropTypes.number,
    feature: PropTypes.object,
};

const MapPopUp = ({
                      id,
                      feature,
                      onClick,
                  }) => {
    return <span
        className='map-pop-up-custom-mapgoxgl-pop-up'>
    <p>{`Punkt ID: ${id}`}</p>

  </span>
};

MapPopUp.propTypes = propTypes;
export default MapPopUp;
