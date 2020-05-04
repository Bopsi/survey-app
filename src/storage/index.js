import {AsyncStorage} from 'react-native';

const setData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch(error) {
        // Error saving data
    }
};

const getData = async (key) => {
    try {
        return await AsyncStorage.getItem(key);
    } catch(error) {
        // Error retrieving data
    }
};

const remData = async (key) => {
    try {
        return await AsyncStorage.removeItem(key);
    } catch(error) {
        // Error retrieving data
    }
};

export default {
    setData: setData,
    getData: getData,
    remData: remData
}