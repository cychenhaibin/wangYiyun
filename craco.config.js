const path = require('path');
const CracoLessPlugin = require('craco-less');
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin, // 正确写法，指定 plugin 属性
            options: {} // 你可以根据需要在这里传递插件的选项
        }
    ],
    webpack: {
        alias: {
            '@': resolve('src'),
        }
    }
};
