import React from 'react';
import {StyleSheet} from 'react-native';

import {CustomText} from './CustomText';

import {GenericStyles} from './GenericStyles';

const TimerText = props => {
  const {text, time} = props;

  return (
    <CustomText
      style={[
        GenericStyles.centerAlignedText,
        styles.resendOtpTimerText,
        GenericStyles.mt24,
      ]}>
      {text}
      <CustomText style={GenericStyles.bold}>{' ' + time}s</CustomText>
    </CustomText>
  );
};