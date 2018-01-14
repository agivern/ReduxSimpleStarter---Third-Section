import React, { Component } from 'react';

class GoogleMap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: props.lat,
            lng: props.lng
        }
    }

    componentDidMount() {
        console.log(this.state);
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.state.lat,
                lng: this.state.lng
            }
        })
    }

    render() {
        return (
            <div ref="map" />
        );
    }

}

export default GoogleMap;
