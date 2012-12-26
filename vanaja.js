/**
* Load and configure RequireJS
* @see http://requirejs.org/docs/node.html
*/
var requirejs = require('requirejs');
requirejs.config({
  nodeRequire: require
});

requirejs(['./rpgjs'], function(rpgjs) {
  rpgjs.onConnect(1337, function(rpg) {
    rpg.start(function() {
      rpg.loadMap('druids-grove', {
        tileset: 'ext_tileset.png',
        autotiles: ['ext_at1_beach.png','ext_at4_mud.png','ext_at2_dirt.png','ext_at3_longgrass.png','ext_at5_road1.png','ext_at7_water1.png','ext_at6_road2.png'],
        player:  {
          speedAnimation: 10,
          speed: 10,
          x: 18, 
          y: 22, 
          filename: 'fighter.png'
        }
      }, function() {
      });
  });
 });
});

