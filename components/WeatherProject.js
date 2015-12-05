var React = require('react-native');
 var {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} = React;

var Forcast = require('./Forcast');
var marked = require('../libs/marked');
var styles = require('../styles/main');

module.exports = React.createClass({
  getInitialState: () => {
    return {
      zip: '',
      forecast: null
    };
  },
  render: function() {
    return (
      <View style={styles.container}>
          {marked('Hahahaha *I* love yaaaa :)')}
      </View>
    );
  },
  _handleTextChange: function(event) {
    var zip = event.nativeEvent.text;
    this.setState({zip: zip});
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + zip + '&units=imperial&APPID=b7b084b4f1c473fe1065f9f69b4ec064')
    .then((response) => response.json())
    .then((responseJSON) => {
      console.log(responseJSON); 
      this.setState({
        forecast: {
          main: responseJSON.weather[0].main,
          description: responseJSON.weather[0].description,
          temp: responseJSON.main.temp
        }
      });
    })
    .catch((error) => {
      console.warn(error);
    });
  }
});