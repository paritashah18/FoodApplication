import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
const COLORS = {primary: 'white', black: '#0A0A0A'};
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const {width, height} = Dimensions.get('window');
const slides = [
  {
    id: 1,
    image: require('../../Images/wow.png'),
    title: 'Discover all recipes you needed',
    subtitle: 'Explore 100 plus recipes',
  },
  {
    id: 2,
    image: require('../../Images/image1.png'),
    title: 'Waiter is hero here',
    subtitle: 'waiter helps you to do login into app to place your.',
  },
  {
    id: 3,
    image: require('../../Images/trackorder.png'),
    title: 'Track your orders',
    subtitle: 'Know what is status of your order',
  },
];

const Slide = ({item}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={item.image}
        style={{
          height: '75%',
          width,
          borderRadius: 180,
          resizeMode: 'contain',
        }}></Image>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  );
};
const OnBoarding = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      checkLogin();
    }, 1000);
  }, []);

  const checkLogin = async () => {
    const email = await AsyncStorage.getItem('EMAIL');
    const password = await AsyncStorage.getItem('PASSWORD');
    console.log(email + ' ' + password);
    if (email !== null || email != undefined || email != '') {
      navigation.navigate('MainContainer');
    } else {
      navigation.navigate('Login');
    }
  };
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef(null);

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'center',
          }}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: COLORS.black,
                  width: 25,
                },
              ]}
            />
          ))}
        </View>
        <View style={{marginBottom: 30}}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{height: 50}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#ff8b3d',
                  justifyContent: 'center',
                  borderRadius: 10,
                  height: 50,
                }}
                onPress={() => navigation.navigate('Login')}>
                <Text
                  style={{
                    color: 'white',
                    alignSelf: 'center',
                    fontSize: 18,
                    fontFamily: 'VarelaRound-Regular',
                  }}>
                  Get Started
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              onPress={goNextSlide}
              style={{
                backgroundColor: '#ff8b3d',
                justifyContent: 'center',
                borderRadius: 10,
                height: 50,
              }}>
              <Text
                style={{
                  color: 'white',
                  alignSelf: 'center',
                  fontSize: 18,
                  fontFamily: 'VarelaRound-Regular',
                }}>
                Next
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };
  const updatecurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
    console.log(contentOffsetX);
  };

  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({offset});
      setCurrentSlideIndex(nextSlideIndex);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updatecurrentSlideIndex}
        pagingEnabled
        data={slides}
        contentContainerStyle={{
          height: height * 0.75,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <Slide item={item} />}
      />

      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: COLORS.black,
    fontSize: 22,

    marginTop: 20,
    textAlign: 'center',
    fontFamily: 'VarelaRound-Regular',
  },
  subtitle: {
    color: COLORS.black,
    fontFamily: 'VarelaRound-Regular',
    fontSize: 13,
    maxWidth: '75%',
    marginTop: 10,
    textAlign: 'center',
    lineHeight: 23,
  },
  indicator: {
    height: 20,
    width: 20,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 20,
  },
});

export default OnBoarding;
