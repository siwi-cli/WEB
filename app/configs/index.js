/**
 * @author [siwilizhao]
 * @email [siwilizhao@gmail.com]
 * @create date 2019-05-22 15:03:13
 * @modify date 2019-05-22 15:03:13
 * @desc [config]
 */
module.exports = process.env.NODE_ENV == 'dev' ? require('./dev'): require('./prod')