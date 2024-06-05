const fs = require('fs')

fs.writeFile('./log.txt', 'hello', (err, data) => {
    if(err) {
        console.log('文件创建失败')
    } else {
        console.log('文件创建成功')
    }
})