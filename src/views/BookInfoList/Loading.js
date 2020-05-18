import React from 'react';

import Container from '../../components/common/Container'
import './Loading.css'

function Loading() {
  return (
    <Container direction={'row'} justifyContent={'center'} alignItems={'center'}>
      <div className="loader">
        Loading...
      </div>
    </Container>
  );
}

export default Loading;
