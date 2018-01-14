import _ from 'lodash';
import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

class Chart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: props.data,
            color: props.color,
            units: props.units
        }
    }

    average(data) {
        return _.round(_.sum(data)/data.length);
    }

    render() {
        return(
            <div>
            <Sparklines height={ 120 } width={ 180 } data={ this.state.data }>
                <SparklinesLine color={ this.state.color } />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{ this.average(this.state.data) } { this.state.units }</div>
            </div>
        );
    }
}

export default Chart;
