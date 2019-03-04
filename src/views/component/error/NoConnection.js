import React from 'react'
import { View, Image } from 'react-native'
import { Container, Content, Text } from 'native-base';
import translations from '../../../i18n';
import * as styles from '../../styles/style';
import noConnection from '../../../assets/images/noConnection.jpg';

const NoConnection = () => (
  <Container >
    <Content>
      <View style={styles.form.formGroup}>
        <Image source={noConnection} style={styles.general.logo} />
      </View>
      <View style={styles.form.formGroup}>
        <Text>{translations.t('noConnection')}</Text>
      </View>
    </Content>
  </Container >
)

export default NoConnection;