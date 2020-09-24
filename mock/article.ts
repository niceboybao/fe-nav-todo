import { Request, Response } from 'express';

function getFakeCaptcha(req: Request, res: Response) {
  return res.json('captcha-xxx');
}
// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  // 支持值为 Object 和 Array
  'GET /api/article/list': [
    {
      articleId: '1', //唯一id
      desc: 'JavaScript 错误 - Throw 和 Try to Catch', //title
      url: 'https://www.w3school.com.cn/js/js_errors.asp', //链接
      views: 30, // 埋点
      hasTags: ['javascript'], // 标签
      isTop: false, //是否置顶
      creatTime: '1600940480405', //创建时间
      idea: [
        {
          text: '测试',
          creatTime: '1600940480405', //创建时间
        },
      ],
    },
  ],
  'GET /api/article/tags': [
    'Html',
    'Css',
    'JavaScript',
    'ES6',
    'React全家桶',
    '小程序',
    'Node.js',
    '打包工具',
    'Git',
    'Jenkins',
    '职业规划',
    '感想&心得',
  ],
};
