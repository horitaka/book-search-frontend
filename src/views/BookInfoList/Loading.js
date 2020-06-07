import React from 'react';

import Grid from '@material-ui/core/Grid';

import './Loading.css'

function Loading() {
  return (
    <Grid >
      <div className="loader">
        Loading...
      </div>
    </Grid>
  );
}

export default Loading;
