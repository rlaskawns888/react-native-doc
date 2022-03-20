/**
 * [FlatList]
 * 
 * https://reactnative.dev/docs/using-a-listview
 * https://velog.io/@djaxornwkd12/React-Native-FlatList%EC%97%90-%EB%8C%80%ED%95%B4-%EC%95%8C%EC%95%84%EB%B3%B4%EC%9E%90
 * 
 */
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View, Text, SafeAreaView, Alert, ActivityIndicator } from "react-native";

const LIMIT = 5;
const renderItem = ({item}) => {
    return (
        <View>
            <View>
                <Text>user id: {item.userId}</Text>
            </View>
            <View>
                <Text>id: {item.id}</Text>
            </View>
            <View>
                <Text>title: {item.title}</Text>
            </View>
            <View>
                <Text>body: {item.body}</Text>
            </View>
        </View>
    );
};
const FlatListComponents = () => {
    const [data, setData] = useState([]);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);

    const getData = () => {
        setLoading(true);
        fetch('http://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((res) => setData(data.concat(res.slice(offset, offset + LIMIT))))
            .then(() => {
                setOffset(offset + LIMIT);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                Alert.alert("에러가 났습니다");
            });
    };

    useEffect(() => {
        getData();
    }, []);

    const onEndReached = () => {
        if (loading) {
          return;
        } else {
          getData();
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => String(item.id)}
                onEndReached={onEndReached} 
                onEndReachedThreshold={0.8} 
                //화면에서 80%정도 되었을때 onEndReached() 실행
                ListFooterComponent={loading && <ActivityIndicator/> }
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });

export default FlatListComponents;