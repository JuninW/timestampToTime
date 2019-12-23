### 自己写的关于时间格式化的小组件
###### - 前言：因为最近公司项目中自己经常要用到时间有关的数据 所以就自己写了个插件
#### 安装
                npm install times-time          # 本地安装
                npm install times-time -g      # 全局安装
##

               1.timestampToTime (将时间戳转为时间）
               2.timesToTimetamp（将格式化时间转化为时间戳）
               3.timeDifference （计算两个时间戳差值）
###### -用法 ：
##
               1.import 引入文件 
               2.导入方法 例如 timestampToTime
               3.使用 如下：
                    1. timestampToTime（时间戳，类型） 
                    类型：年-月-日 （默认）
                         年-月-日-分-秒=‘y-y-d-time’ （一般需求只会精确到秒）
                    2.timesToTimetamp （时间）
                    3.timeDifference  （时间1，时间2）
                    以上两个比较简单 直接将数据放到方法里即可


#### 1.5版本更新 
##     
               本次更新了一些常用的正则方法  在表单提交中经常用到 ，校验这块也是普片交给前端来处理的 如果每次都写正则就有些麻烦了 
#### -更新内容（1.5）：
  ##### 本次新增了 如下方法
              
                  注：（正则相关）
                  @returns {{boolean}}
                  验证类型方法返回为 true or false
                  转换类型方法返回为 String 
                  
              --1. chineseNumber（数字）==》 数字转换为汉字  注意！（暂时只支持100以内大于零的整数）
              
              --2. verLinkBool（链接）
              
              --3. verIdCardBool（身份证号码）
              
              --4. verPhoneBool（手机号）
              
              --5. verEmailBool（邮箱）
              
              --6. verNumBool （正整数）
              
              --7. verNumBool2 （非负数整数）
              
              --8. verEnBool （匹配由数字、26个英文字母或者下划线组成的字符串）
              
              --9. noCnBool (字母数字)
              
              --10. timeString (时间) //不满十位数在前面添加0
              
               
               
               
