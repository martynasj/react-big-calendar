import React, { PropTypes } from 'react';
import BigCalendar from 'react-big-calendar';
import events from '../events';
import enabledHours from '../enabledHours';

let Basic = React.createClass({
  render(){
    return (
      <BigCalendar
        {...this.props}
        events={events}
        defaultDate={new Date(2015, 3, 1)}
        enabledHours={enabledHours}
      />
    )
  }
});

export default Basic;
