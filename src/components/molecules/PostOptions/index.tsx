import React from "react";

import { View } from "react-native";

import { styles } from "../../../pages/Feed/styles";

import {
  FavoriteIcon,
  CommentIcon,
  MessengerIcon,
  SaveIcon,
} from '../../../global/styles/icons';

export function PostOptions() {
  return (
    <View style={styles.postOptions}>
      <View style={styles.postOptionsSide}>
        <FavoriteIcon style={styles.postOptionsIcon} />
        <CommentIcon style={styles.postOptionsIcon} />
        <MessengerIcon style={styles.postOptionsIcon} />
      </View>

      <SaveIcon />
    </View>
  );
}
