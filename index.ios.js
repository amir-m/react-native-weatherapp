'use strict';

var React = require('react-native');
var {
  AppRegistry
} = React;

var components = require('./components/components');

AppRegistry.registerComponent('WeatherProject', () => components.WeatherProject);


// 'hahahha *amir* va doostane *khoobe* *hahah*'.match(/\*\w*\*/g)
// 'hahahha _amir_ va doostane _khoobe_ _1234_'.match(/_\w*_/g);
// 'hahahha _amir_ va doostane _khoobe_ _1234_'.indexOf('_amir_');
// 'hahahha _amir_ va doostane _khoobe_ _1234_'.substring(0, 8);
// var t = "hahahha    _amir_   \n haha   ";
// "hahahha    _amir_   \n haha   ".split('_amir_');
// t.replace(/\s\s+/g, ' ');

// function composeBold(text) {
//   var bolds = findBold(text);

//   if (!bolds) return text;

//   var indexes = [];
//   var txt = '';
//   for (var i in bolds) {
//     indexes.push(text.indexOf(bolds[i]));
//     text = text.replace(bolds[i])
//   }
// }
