import React from 'react';
import { FadeInLeft } from '../../../../components/Animations';
const SectionTitle = ({ title }) => (
  <FadeInLeft duration={.1}>
    <h2 className="font-weight-500 font-style-normal font-lg slim-border-bottom padding-vertical-sm margin-bottom-md">{title}</h2>
  </FadeInLeft>
);

export default SectionTitle;
