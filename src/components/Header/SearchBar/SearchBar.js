import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

import * as Colors from '../../../constants/Colors';

const useStyles = makeStyles(theme => createStyles({
  root: {
    // height: "100%",
    // borderRadius: '5px',
    // background: '#ffffff',
  },
  input: {
    background: '#ffffff',
    // border: 'none',
    // '&:focus': {
    //   // border: `1px solid ${theme.palette.secondary.main}`,
    //   border: `1px solid #FF80AB`,
    //   outline: 0,
    // },
  },
  button: {
    // color: 'white',
    // background: `${theme.palette.secondary.main}`,
  }
}));

function SearchBar(props) {
  const { history, searchBook } = props
  const [keyword, setKeyword] = useState('')
  const classes = useStyles();

  const handleKeywordChange = (event) => {
    const keyword = event.target.value;
    setKeyword(keyword)
  }

  const handleSearchClick = (event) => {
    event.preventDefault();
    const keyword = event.target.value
    if (keyword !== '') {
      history.push('/book-search')
      searchBook(keyword)
    }
  }

  return (
    <Grid container item xs={12}>
      <Grid item xs={5}>
        <TextField variant="outlined" className={classes.input} />
      </Grid>
      <Grid container item xs={5}>
        <Button className={classes.button} color='secondary' variant='contained' onClick={handleSearchClick}>
          <SearchIcon />
        </Button>
      </Grid>
    </Grid>
  )
}

{/* <Box flex={'1 0 200px'} maxWidth={'500px'}>
<Container direction={'row'} justifyContent={'center'} alignItems={'center'}>
  <Form>
    <Input
      type="text"
      placeholder="キーワードを入力"
      value={keyword}
      onChange={handleKeywordChange}
    />
    <Button onClick={handleSearchClick}>
      <Img src={searchIcon} alt="検索ボタン" />
    </Button>
  </Form>
</Container>
</Box> */}
SearchBar.propTypes = {
  searchBook: PropTypes.func.isRequired,
}

const Form = styled.form`
  display: flex;
  flex: 1 0 auto;
`
const Input = styled.input`
  flex: 1 0 auto;
  padding: 5px;
  border: none;
  border-radius: 5px 0 0 5px;
  :focus {
    border: 1px solid ${Colors.accentColor};
    outline: 0;
  }

  font-size: 15px;
`

// const Button = styled.button`
//   flex: 0 0 auto;
//   width: 40px;
//   height: 40px;
//   padding: 10px;
//   background-color: ${Colors.accentColor};
//   border-radius: 0 5px 5px 0;
//   border: none;
//   outline: none;

//   :active {
//     background: ${Colors.accentSecondoryColor};
//     outline: none;
//   }
// `

// const Img = styled.img`
//   max-width: 100%;
//   height: auto;
//   width: auto;
// `

export default withRouter(SearchBar)
