/**
 * Created by oospace on 2016/11/17.
 */
var NodeCmd = require('node.cmd');

var npmCmd = new NodeCmd('npm');
npmCmd.exec('-v', function(data) {
    console.log(data);
});
npmCmd.exec('install',function (data) {
    console.log(data);
})