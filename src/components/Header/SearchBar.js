import React from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import styled from 'styled-components';

import searchIcon from '../../images/search-icon-white.png'
import * as Colors from '../../constants/Colors';
import Container from '../common/Container';
import Box from '../common/Box';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {keyword: ''}
    this.handleKeywordChange = this.handleKeywordChange.bind(this)
    this.handleSearchClick = this.handleSearchClick.bind(this)
  }

  handleKeywordChange(event) {
    const keyword = event.target.value;
    this.setState({keyword: keyword});
  }

  handleSearchClick(event) {
    event.preventDefault();
    if (this.state.keyword !== '') {
      // this.setState({keyword: ''});
      this.props.history.push('/book-search')
      this.props.onSearchClicked(this.state.keyword)
    }
  }

  render() {
    return(
      <Box flex={'1 0 200px'} maxWidth={'500px'}>
        <Container direction={'row'} justifyContent={'center'} alignItems={'center'}>
          <Form>
            <Input
              type="text"
              placeholder="キーワードを入力"
              value={this.state.keyword}
              onChange={this.handleKeywordChange}
            />
            <Button onClick={this.handleSearchClick}>
              <Img src={searchIcon} alt="検索ボタン"/>
            </Button>
          </Form>
        </Container>
      </Box>
    )
  }
}

SearchBar.propTypes = {
  onSearchClicked: PropTypes.func.isRequired,
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

const Button = styled.button`
  flex: 0 0 auto;
  width: 40px;
  height: 40px;
  padding: 10px;
  background-color: ${Colors.accentColor};
  border-radius: 0 5px 5px 0;
  border: none;
  outline: none;

  :active {
    background: ${Colors.accentSecondoryColor};
    outline: none;
  }
`
const Img = styled.img`
  max-width: 100%;
  height: auto;
  width: auto;
`

export default withRouter(SearchBar)
