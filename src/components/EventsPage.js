import React from 'react';
import FuturePastHeader from './FuturePastHeader';
import EventPoster from './EventPoster';

const EventsPage = () => (
  <div>
    <FuturePastHeader />
    <div className='container'>
      <EventPoster />
    </div>
  </div>
);

export default EventsPage;
