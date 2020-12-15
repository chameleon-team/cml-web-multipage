
// 设置静态资源的线上路径
const publicPath = 'www.static.chameleon.com/cml';
// 设置api请求前缀
const apiPrefix = 'https://api.chameleon.com';

cml.config.merge({
  templateLang: "cml",
  templateType: "html",
  platforms: ["web","wx","weex"],
  buildInfo: {
    wxAppId: '123456'
  },
  wx: {
    dev: {
    },
    build: {
      apiPrefix
    }
  },
  web: {
    dev: {
      analysis: false,
      console: false
    },
    build: {
      analysis: false,
      publicPath: `${publicPath}/web/`,
      apiPrefix,
      minimize:false,
      moduleIdType:"name"
    }
  },
  weex: {
    dev: {
    },
    build: {
      publicPath: `${publicPath}/weex/`,
      apiPrefix,
      minimize:false,
      minimize:false,
      moduleIdType:"name"
    },
    custom: {
      publicPath: `${publicPath}/wx/`,
      apiPrefix
    }
  },
  optimize: {
    watchNodeModules: false, // 默认不对node_modules中的文件进行watch,提升编译性能
    showWarning: false, // 为了兼容原来的配置，默认不开启构建过程中的警告信息，开启之后配合，DuplicatePackageCheckerPlugin 可以在构建过程中检查是否有重复npm包引入
    dropConsole: true
  }
})

cml.utils.plugin('webpackConfig', function({ type, media, webpackConfig }, cb) {
  // cb函数用于设置修改后的配置
  webpackConfig.module.noParse = function(content){
    // return /test-noparse/.test(content) //测试工程化配置 noParse是否生效
  }
  cb({
    type,
    media,
    webpackConfig
  });
});