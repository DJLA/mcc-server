var exec = require("child_process").exec

exec("mongod --nojournal",function(std){
    console.log(std)
})