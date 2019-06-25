# 说明
后端代码库：https://github.com/bxxfighting/soul  

# 配置后端接口地址：
src/network/config.js  

# 增加新功能:
主要在五个地方增加代码：  
* src/constants/action.js  # 设置action常量，便于统一管理  
* src/actions  # action管理，包括网络请求这些操作  
* src/reducers  # 行为触发数据变化  
* src/components  # 展示层  
* src/containers  # 为展示层提供数据  

> 基于以上五个位置的，可以参考User模块了解具体情况，并继续开发  
