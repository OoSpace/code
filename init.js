/**
 * Created by oospace on 2016/11/17.
 */
var fs=require("fs");
fs.readFile("folder.json","utf8",function (error,data) {//读取文件夹配置文件
    if(error) throw error;
    console.log(data);
    var folderList=JSON.parse(data)["directory"];//需要创建的文件夹列表
    for(var i=0,lg=folderList.length;i<lg;i++){
        //判断目录是否存在
        var directory=folderList[i];
        var hasDirectory=false;
        if (fs.existsSync(directory)) {
            console.log('已经创建过目录:'+directory+"了");
            hasDirectory=true;
        }else{
            fs.mkdirSync(directory);
            hasDirectory=true;
            console.log('目录'+directory+'已创建成功');
            fs.writeFile(directory+"/readme.txt", directory, function (msg) {
               if(msg)throw msg;
                console.log("生成"+directory+"/readme.txt"+" 文件成功1");
            });
        }
        console.log(directory)
            //判断文件是否存在
            fs.exists(directory+"/readme.txt", function(exists){
                if(exists){
                    console.log(directory+"/readme.txt"+" 已存在");
                    directory=null;
                }else{
                    console.log("开始生成"+directory+"/readme.txt"+" 文件");
                    fs.writeFile(directory+"/readme.txt", directory, function (msg) {
                        if(msg)throw msg;
                        console.log("生成"+directory+"/readme.txt"+" 文件成功2");
                        directory=null;
                    });
                };

            }) ;
        }

})