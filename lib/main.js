// ==================== getDirTree ====================
/**
 * 获取所有的posts目录
 * */
function getDirTree(){

}

// ==================== getDirTree end ====================
/**
 *
 * */

// ==================== main ====================
var fs = require("fs");
var config = fs.readFileSync("config.json");
config = eval(
  ['(',config.toString(),')'].join('')
);
config.layouts || (config.layouts = './layouts');
config.ignore || (config.ignore = [".git",".svn"]);

// 1.
var oldDBFile

try{
  oldDBFile = require("./.data/files.json")
}catch(e){
}
if(oldDBFile){
  
}