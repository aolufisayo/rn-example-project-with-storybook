import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import style from './style';

export default function CenterView({ children }) {
  return <View style={style.main}>{children}</View>;
}

CenterView.defaultProps = {
  children: null,
};

CenterView.propTypes = {
  children: PropTypes.node,
};


storiesOf('CenteredView', module)
  .add('default view', () => (
    <CenteredView>
      <Text>Hello Storybook</Text>
    </CenteredView>
  ));
