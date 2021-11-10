import React from 'react';

import { 
  Text
} from 'react-native';

import { styles } from '../../../pages/Feed/styles';

type Props = {
  description: string;
}

export function PostDescription({description}: Props) {
  return (
    <Text style={styles.description}>{description}</Text>
  );
};