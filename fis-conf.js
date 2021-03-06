// 加 md5后缀名
fis.match('*.{js,css,png}', {
    useHash: true
});

// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
    spriter: fis.plugin('csssprites')
})

// 对 CSS 进行图片合并
fis.match('*.css', {
    // 给匹配到的文件分配属性 `useSprite`
    useSprite: true
});

fis.match('*.js', {
    // fis-optimizer-uglify-js 插件进行压缩，已内置
    optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
    // fis-optimizer-clean-css 插件进行压缩，已内置
    optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
    // fis-optimizer-png-compressor 插件进行压缩，已内置
    optimizer: fis.plugin('png-compressor')
});

//debug模式下进行调试不需要合并
fis.media('debug').match('*.{js,css,png}', {
    useHash: false,
    useSprite: false,
    optimizer: null
})

//发布的时候忽略以下目录或文件
fis.set('project.ignore', [
    'output/**',
    'release/**',
    'node_modules/**',
    'json/**',
    'data/**',
    'less/**',
    'src/**',
    '.git/**',
    '.svn/**',
    'package.json',
    'exp.js',
    'Gruntfile.js',
    'fis-conf.js'
]);