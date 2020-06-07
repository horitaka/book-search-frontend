import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import { prefectureList } from './prefectureList'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function LibrarySearch({ searchLibrary, onKeywordChanged }) {
  const defaultPrefecture = '東京都'
  const [prefecture, setPrefecture] = useState(defaultPrefecture)
  const classes = useStyles();

  let prefectureOptions = prefectureList.map(prefecture => {
    return ({
      value: prefecture,
      label: prefecture,
    })
  })

  const onKeywordChangedDebounced = debounce(onKeywordChanged, 500);

  useEffect(() => {
    searchLibrary(defaultPrefecture)
  }, [searchLibrary]);

  const handlePrefSelected = (event) => {
    const prefecture = event.target.value;
    setPrefecture(prefecture)
    searchLibrary(prefecture)
  }

  const handleKeywordChange = (event) => {
    onKeywordChangedDebounced(event.target.value);
  }

  return (
    <Grid container direction="row" justify="space-between" alignItems="center" item>
      <Grid item xs={5}>
        <FormControl fullWidth className={classes.formControl}>
          <InputLabel htmlFor="input-label">都道府県</InputLabel>
          <Select
            native
            value={prefecture}
            onChange={handlePrefSelected}
            inputProps={{
              name: 'prefecture',
              id: 'input-label',
            }}
          >
            {prefectureOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={5}>
        <TextField id="search-input" label="図書館を検索..." fullWidth onChange={handleKeywordChange} />
      </Grid>
    </Grid>
  )
}

LibrarySearch.propTypes = {
  searchLibrary: PropTypes.func.isRequired,
  onKeywordChanged: PropTypes.func.isRequired,
}


export default LibrarySearch;
