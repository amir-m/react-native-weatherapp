var React = require('react-native');
 var {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} = React;

module.exports = function(text) {
  return (
    <Text>{text}</Text> 
  );
}

function findQuote(text) {
  var q = text.match(/>>\s*\w.*\n*/g);
  if (q) {
    for (var i in q) {
      q[i] = q[i].replace(/\s*$/, '');        
    }
  }
  return q;
}

function findBold(text) {
  var b = text.match(/\*\w*\*/g)
  return b;
}

function findItalic(text) {
  var i = text.match(/_\w*_/g);
  return i;
}

function clearExtraSpaces(text) {
  return text.replace(/ +/g, ' ');
}

function clearExtraReturns(text) {
  return text.replace(/\n\n\n+/g, '\n\n');
}