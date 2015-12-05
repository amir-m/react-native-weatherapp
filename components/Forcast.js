var React = require('react-native');
 var {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} = React;

var marked = require('../libs/marked');
var styles = require('../styles/main');

module.exports = React.createClass({
  render: function() {
    return (
      <View>
        <Text style={styles.bigText}>
          {this.props.main}
        </Text>
        <Text style={styles.mainText}>
          Current conditions: {this.props.description}
        </Text>
        <Text style={styles.bigText}>
          {this.props.temp}°F
        </Text>
      </View>
    );
  }
});
