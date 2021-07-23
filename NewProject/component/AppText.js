import React from 'react';
import { Platform, Text } from 'react-native';
import styles  from '../component/style';
const AppText = (props)=>{
    return(

        <Text style= {
            styles.text
        }>{props.children}
        hello  welcome </Text>
    );
}


  export default AppText;