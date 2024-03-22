import React, { useEffect, useState } from 'react';
import { View, FlatList, SafeAreaView } from 'react-native';

import { ASHeader, ASHomeCard, ASHomeHeader, ASLoader } from '../../components';
import fetchData from '../../services/api';

import styles from './home-styles';

const Home = () => {
  const [data, setData] = useState<[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    fetchData()
      .then(fetchedData => setData(fetchedData))
      .catch(error => console.error('Error setting data:', error));
  }, []);

  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = currentPage === Math.ceil(data.length / 7);

  const renderNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const renderPrevPage = () => {
    setCurrentPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1));
  };

  const renderItem = ({ item }) => (
    <ASHomeCard
      country={item.country}
      countryInfo={item.countryInfo}
      flag={item.countryInfo.flag}
      active={item.active}
    />
  );


  return (
    <SafeAreaView style={styles.container}>
      <ASHeader title="COVID-19" />
      <View style={styles.subContainer}>
        <FlatList
          data={data.slice((currentPage - 1) * 7, currentPage * 7)}
          renderItem={renderItem}
          keyExtractor={(item) => item.country}
          ListHeaderComponent={<ASHomeHeader renderNextPage={renderNextPage} renderPrevPage={renderPrevPage} 
          isPrevDisabled={isPrevDisabled} isNextDisabled={isNextDisabled}/>}
          ListEmptyComponent={<ASLoader />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
