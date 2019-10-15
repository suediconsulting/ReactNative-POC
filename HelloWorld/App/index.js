import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    StatusBar,
    TouchableOpacity,
    Dimensions
 } from 'react-native';

 const screen = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fdf',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button:{
        borderWidth: 10,
        borderColor: "89AAFF",
        width: screen.width /2,
        height: screen.width/4,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText:{
        fontSize: 45,
        color: "#89AAFF"
    }
  });

export default function App() {
  return (
    <View style={styles.container}>      
      <TouchableOpacity 
        onPress={()=> alert('Hello world!')}
        style={styles.button}
        >
            <Text style={styles.buttonText}>Hello</Text>
        </TouchableOpacity>
    </View>
  );
}


