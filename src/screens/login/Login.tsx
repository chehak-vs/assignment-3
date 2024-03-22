import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

import {SplashImg} from '../../assets';
import { SPACING } from '../../theme';

import styles from './Login-styles';

interface ILoginProps {
  navigation: NavigationProp<any>;
}

const Login = (props: ILoginProps) => {
  const {navigation} = props;
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const validateAndSignIn = () => {
    if (mobileNumber.length === 10 && password.length >= 8) {
      navigation.navigate('TabNavigator');
    } else {
      Alert.alert(
        'Mobile number must be 10 digits and password must be at least 8 characters long.',
      );
    }
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}>
      <StatusBar backgroundColor="#FFFFFF" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.titleContainer}>
          <SplashImg />
          <Text style={styles.title}>COVSTATS</Text>
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.subTitle}>Mobile Number *</Text>
          <TextInput
            placeholder="Enter your mobile number"
            style={styles.textInput}
            onChangeText={text => setMobileNumber(text)}
            keyboardType="numeric"
            maxLength={SPACING.space_10}
          />
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.subTitle}>Password *</Text>
          <TextInput
            placeholder="Enter your password"
            style={styles.textInput}
            onChangeText={text => setPassword(text)}
            secureTextEntry
            maxLength={SPACING.space_16}
          />
        </View>
        <TouchableOpacity
          style={styles.signInButton}
          onPress={validateAndSignIn}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
