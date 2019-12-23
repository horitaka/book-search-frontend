import React from 'react';
import { shallow } from 'enzyme';

import LibraryRegistrationPanelHeader from '../LibraryRegistrationPanelHeader'
import Select from '../../../common/Select'
import Input from '../../../common/Input';

jest.mock('lodash.debounce', () => jest.fn(fn => fn))

describe('<LibraryRegistrationPanelHeader> Component', () => {
  const onPrefSelectedMock = jest.fn();
  const onKeywordChangedMock = jest.fn();
  const events = {
    onPrefSelected: onPrefSelectedMock,
    onKeywordChanged: onKeywordChangedMock
  }

  it('render correctly', () => {
    const wrapper = shallow(<LibraryRegistrationPanelHeader {...events}/>)
    expect(wrapper).toMatchSnapshot();
  });

  describe('when props is normal', ()=> {
    it('render Select with option props', () => {
      const prefectureOptionDefault = {
        value: '東京都',
        label: '東京都',
        isDefault: true,
      };

      const prefectureOptionNotDefault = {
        value: '神奈川県',
        label: '神奈川県',
        isDefault: false,
      }

      const wrapper = shallow(<LibraryRegistrationPanelHeader {...events}/>)

      expect(wrapper.find(Select).prop('options')).toContainEqual(prefectureOptionDefault);
      expect(wrapper.find(Select).prop('options')).toContainEqual(prefectureOptionNotDefault);
    });

    it('', () => {

    });
  });

  describe('when onSelect is called', ()=> {
    it('call onPrefSelected', () => {
      const wrapper = shallow(<LibraryRegistrationPanelHeader {...events}/>)
      const event = {
        target: {
          value: '東京都',
        }
      }

      expect(onPrefSelectedMock).toHaveBeenCalledTimes(0);
      wrapper.find(Select).simulate('selected', event);
      expect(onPrefSelectedMock).toHaveBeenCalledTimes(1);
      expect(onPrefSelectedMock).toHaveBeenCalledWith('東京都');
    });

  });

  describe('when Input value is changed', ()=> {
    it('call onKeywordChanged', () => {
      const wrapper = shallow(<LibraryRegistrationPanelHeader {...events}/>)
      const keyword = '東京都'

      expect(onKeywordChangedMock).toHaveBeenCalledTimes(0);
      wrapper.find(Input).simulate('change', keyword);
      expect(onKeywordChangedMock).toHaveBeenCalledTimes(1);
      expect(onKeywordChangedMock).toHaveBeenCalledWith('東京都');
    });

  });
})
