import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from '../../lib/ssrSafeMapboxgl';
import UndoIcon from '@material-ui/icons/Undo';
import * as turf from '@turf/turf';

import MapPopUp from "./MapPopUp";

import 'mapbox-gl/dist/mapbox-gl.css';

const points = require('./featurecollection.json');
const mapStyles = {
    backgroundColor: 'white',
    height: '100vh',
    width: '100vw',
};

class Map extends React.Component<{}, { points: any, bbox: any, modalOpen: boolean, currentHighlight: any }> {
    popUp: any;
    pointsLayerName: string;
    map: any;
    mapContainer: any;

    constructor(props) {
        super(props);

        this.state = {
            points,
            bbox: turf.bbox(points),
            modalOpen: false,
            currentHighlight: null,
        };

        this.popUp = null;
        this.pointsLayerName = 'points';
    }

    componentDidMount() {
        const {points, bbox} = this.state;
        this.map = new mapboxgl.Map({
            bounds: bbox,
            fitBoundsOptions: {padding: 30},
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v9',
            accessToken: 'pk.eyJ1IjoiZmxvcmlhbmdlcmhhcmR0IiwiYSI6ImNrODFmOTI2ZDBlcnozaG1zaGR1M29hZ3MifQ.ZXKPWVeVAfD_ABvIGbsQnQ',
        });

        this.map.on('load', async () => {
            this.map.addControl(new mapboxgl.NavigationControl({visualizePitch: true}), 'top-right');
            this.map.addControl(new mapboxgl.ScaleControl());
            this.map.addControl(new mapboxgl.FullscreenControl({container: document.getElementById('project-map-container')}));
            this.map.getCanvas().style.cursor = 'auto';
            this.addPoints(points);
            this.addClick(points);
            this.addMouseOver();

        });
    }

    addPoints = points => {
        this.map.addSource(this.pointsLayerName, {
            type: 'geojson',
            data: points,
            //data: 'https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson',
            cluster: true,
            clusterMaxZoom: 14,
            clusterRadius: 50,
        });

        this.map.addLayer({
            id: 'clusters',
            type: 'circle',
            source: this.pointsLayerName,
            paint: {
                'circle-color': {
                    property: 'point_count',
                    type: 'interval',
                    stops: [
                        [0, '#41A337'],
                        [20, '#2D7026'],
                        [100, '#0B5703'],
                    ],
                },
                'circle-radius': {
                    property: 'point_count',
                    type: 'interval',
                    stops: [
                        [0, 16],
                        [20, 30],
                        [100, 40],
                    ],
                },
            },
        });

        this.map.addLayer({
            id: 'cluster-count',
            type: 'symbol',
            source: this.pointsLayerName,
            filter: ['has', 'point_count'],
            layout: {
                'text-field': '{point_count}',
                'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
                'text-size': 12,
            },
        });

        this.map.addLayer({
            id: 'points',
            type: 'circle',
            source: this.pointsLayerName,
            filter: ['!has', 'point_count'],
            paint: {
                'circle-color': '#41A337',
                'circle-radius': 16,
                'circle-stroke-width': 1,
                'circle-stroke-color': '#fff',
            },
        });
    };

    addMouseOver = () => {
        let hoveredStateId = null;
        this.map.on('mouseenter', 'points', event => {
            this.map.getCanvas().style.cursor = 'pointer';
            if (event.features.length > 0) {
                if (hoveredStateId) this.map.setFeatureState({
                    source: this.pointsLayerName,
                    id: hoveredStateId,
                }, {hover: false});
                hoveredStateId = event.features[0].id;
                this.map.setFeatureState({source: this.pointsLayerName, id: hoveredStateId}, {hover: true});
            }
        });

        this.map.on('mouseleave', 'points', () => {
            this.map.getCanvas().style.cursor = 'auto';
            if (hoveredStateId) this.map.setFeatureState({
                source: this.pointsLayerName,
                id: hoveredStateId,
            }, {hover: false});
            hoveredStateId = null;
        });
    };

    addPopup = (component, coordinates) => {
        const placeholder = document.createElement('div');
        ReactDOM.render(component,
            placeholder);

        this.popUp = new mapboxgl.Popup({
            closeButton: true,
            closeOnClick: true,
        })
            .setDOMContent(placeholder)
            .setLngLat(coordinates)
            .addTo(this.map);
    };

    addClick = points => {
        this.map.on('click', 'points', event => {
            const id = event.features[0].id;
            const coordinates = event.features[0].geometry.coordinates.slice();
            while (Math.abs(event.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += event.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            this.addPopup(
                <MapPopUp
                    onClick={() => this.setState({modalOpen: true})}
                    id={id}
                    feature={event.features[0]}/>,
                coordinates,
            );
            this.state.currentHighlight !== null && this.map.setFeatureState({
                source: this.pointsLayerName,
                id: this.state.currentHighlight,
            }, {click: false});
            this.map.setFeatureState({source: this.pointsLayerName, id}, {click: true});
            this.setState({
                currentHighlight: id,
            });
        });

        this.map.on('click', event => {
            // stop propagation of event
            // mapbox draws on canvas, so event.stopPropagation() in
            // this.map.on('click', 'points', event => { ... does not
            // stop the bubblin, so check for if any feature was clicked
            if (this.map.queryRenderedFeatures(event.point).filter(feature => feature.source === this.pointsLayerName).length === 0) {
                points.features.forEach(feature => {
                    this.map.setFeatureState({source: this.pointsLayerName, id: feature.id}, {click: false});
                });
                this.setState({currentHighlight: null});
            }
        })
    };

    fitBounds = event => {
        event.stopPropagation();
        this.map.fitBounds(this.state.bbox, {padding: 30});
    };


    render() {
        const {modalOpen} = this.state;
        return <Fragment>
            {/* MODAL */}
            <div
                style={mapStyles}
                id='project-map-container'
                ref={el => this.mapContainer = el}>

                <UndoIcon
                    onClick={this.fitBounds}/>
            </div>
        </Fragment>
    }
}

export default Map;
