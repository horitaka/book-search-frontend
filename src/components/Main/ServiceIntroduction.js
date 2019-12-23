import React from 'react';
import styled from 'styled-components';

import Text from '../common/Text';

function ServiceIntroduction() {
  const text1 = 'このサービスは、検索単語を入れると図書館に在庫があるかを検索できるサービスです'
  const text2 = '検索単語にはフリーワードもしくはAmazonのURLを入力できます。Amazonの本のURLを入力した場合には、その本が図書館にあるかを簡単に調べられます。'

  return (
    <React.Fragment>
      <ServiceIntroductionText>{text1}</ServiceIntroductionText>
      <ServiceIntroductionText>{text2}</ServiceIntroductionText>
    </React.Fragment>
  );
}

const ServiceIntroductionText = styled(Text)`
  margin: 20px;
`

export default ServiceIntroduction;
