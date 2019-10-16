import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Picker,
  Platform,
} from 'react-native';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07121B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderWidth: 10,
    borderColor: '#89AAFF',
    width: screen.width / 2,
    height: screen.width / 2,
    borderRadius: screen.width / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  buttonStop: {
    borderColor: '#FF851B',
  },
  buttonText: {
    fontSize: 45,
    color: '#89AAFF',
  },
  buttonTextStop: {
    color: '#FF851B',
  },
  timerText: {
    color: '#fff',
    fontSize: 90,
  },
  picker: {
    width: 100,
    ...Platform.select({
      android: {
        color: '#fff',
        backgroundColor: '#07121B',
        marginLeft: 10,
      },
    }),
  },
  pickerItem: {
    color: '#fff',
    fontSize: 20,
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const AVAILABLE_NAMES =  ["Egy", "Kettő", "Három", "Négy"]

const getName = state => {
    return state.name;
};

export default class App extends React.Component {
  state = {
    isRunning: false,
    name : 'nincsen',
  };

  start = () => {
    this.setState(state => ({
      isRunning: true,  
      name: state.name,    
    }));
  };

  stop = () => {
    this.setState(state => ({
      isRunning: false,
      name: state.name,
    }));
  };

  renderPickers = () => (
    <View style={styles.pickerContainer}>
      <Picker
        style={styles.picker}
        itemStyle={styles.pickerItem}
        selectedValue={this.state.name}
        onValueChange={itemValue => {
          this.setState({ name: itemValue });
        }}
        mode="dialog"
      >
        {AVAILABLE_NAMES.map(value => (
          <Picker.Item key={value} label={value} value={value} />
        ))}
      </Picker>
    </View>
  );

  render() {
    const name = this.state.name;

    return (
      <View style={styles.container}>        
            <StatusBar barStyle="light-content" />
           
            {this.renderPickers()}
           
            {this.state.isRunning ? 
            ( 
                <Text style={styles.buttonText}>Név: {name}</Text>  
            ) : (
                <Text style={styles.buttonTextStop}>Név: {name}</Text>  
            )}

            {this.state.isRunning ? 
            (                          
                <TouchableOpacity
                    onPress={this.stop}
                    style={[styles.button, styles.buttonStop]}
                >
                    <Text style={[styles.buttonText, styles.buttonTextStop]}>Stop</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={this.start} style={styles.button}>
                    <Text style={styles.buttonText}>Start</Text>
                </TouchableOpacity>
            )}        
      </View>
    );
  }
}