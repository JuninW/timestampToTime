### 自己写的关于时间格式化的小组件
###### - 前言：因为最近公司项目中自己经常要用到时间有关的数据 所以就自己写了个插件
###### - function：目前暂时更新三种用法
#### 安装
               npm times-time 
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