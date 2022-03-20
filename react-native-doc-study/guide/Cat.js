import React, { useState } from "react";
import { Text, TextInput, View, Image, Button } from 'react-native';

const getFullName = (firstName, secondName, thridName) => {
    return firstName + ' ' + secondName + ' ' + thridName;
};
const Cat = (props) => {
    const [isHungry, setIsHungry] = useState(true);
    return (
        <View>
            <Text>I am {props.name}, and I am {isHungry ? "hungry" : "full"}!</Text>
            <Button
                onPress={() => {
                    setIsHungry(false);
                }}
                disabled={!isHungry}
                title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
            />

            {/* <Text>{catName}</Text> */}
            {/* <Text>{getFullName("1", "2", "3")}</Text> */}
            {/* <Text>Props Name : {props.name}</Text> */}
            {/* <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                defaultValue="Name me!"
            /> */}
            {/* <Image 
                source={{
                    uri:"https://reactnative.dev/docs/assets/p_cat1.png"
                }}
                style={{width:200, height:200}}
            />
            <Text>Hello, I am your Cat! {props.name}</Text> */}
        </View>
    );
};

export default Cat;