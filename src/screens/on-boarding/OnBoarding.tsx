import React from 'react'
import { View,StatusBar, Button, TouchableOpacity, Text } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';

import { Breathing, Cough, Fever } from '../../assets';
import { COLORS } from '../../theme';

import styles from './OnBoarding-styles';

const Dots = ({selected}) => {
  let bgColor = selected ? '#FF647C' : '#E4E4E4'
  return <View style={[styles.dotsView, {backgroundColor: bgColor}] } />
}

const Skip = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Skip</Text>
    </TouchableOpacity>
  );
};

const Next = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Next</Text>
    </TouchableOpacity>
  );
};

const Done = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Done</Text>
    </TouchableOpacity>
  );
};

const OnBoarding = ({navigation}) => {
  return (
    <>
    <StatusBar hidden />
    <Onboarding
    onSkip = {() => navigation.navigate("Login")}
    onDone = {() => navigation.navigate("Login")}
    DotComponent = {Dots}
    bottomBarColor = {COLORS.white}
  pages={[
    {
      backgroundColor: '#fff',
      image:(<View style={styles.imageContainer}><Fever /></View>),
      title: 'Fever',
      subtitle: 'He severity of COVID-19 symptoms can range from very mild to severe. Some people have no symptoms. People who are older or have existing chronic medical conditions.',
      titleStyles: styles.title,
      subTitleStyles: styles.subTitle,
    },
    {
      backgroundColor: '#fff',
      image: (<View style={styles.imageContainer}><Cough /></View>),
      title: 'Cough',
      subtitle: 'Such as heart or lung disease or diabetis, may be at higher risk of serious illness. This is similar to what is seen with other respiratory illnesses, such influenza.',
      titleStyles: styles.title,
      subTitleStyles: styles.subTitle,
    },
    {
      backgroundColor: '#fff',
      image: (<View style={styles.imageContainer}><Breathing /></View>),
      title: 'Breathing Difficulty',
      subtitle: 'Contact your doctor or clinic right away if you have COVID-19 symptoms, you’ve been exposed to someone with COVID-19, or you live in or have traveled from an area with ongoing community spread of COVID-19.',
      titleStyles: styles.title,
      subTitleStyles: styles.subTitle,
    },
  ]}
/>
</>
  )
}

export default OnBoarding