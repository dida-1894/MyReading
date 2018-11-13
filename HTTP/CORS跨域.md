# 跨域资源共享 CORS 详解
- CORS通信和同源的AJAX请求没有区别，代码一样
## 两种请求
- 简单请求
  - 请求方法为以下三种之一
    - HEAD
    - GET
    - POST
  - HTTP的头信息不超出以下几种字段
    - Accept
    - Accept-Laguage
    - Content-Laguage
    - last-event-id
    - Content-Type 只限于 application/x-www-form-urlencoded, multipart/form-data, text/plain

- 非简单请求

### 简单请求
> 浏览器直接发出CORS请求。在头信息中直接加入origin字段

- CORS请求默认不发送Cookie和HTTP认证信息
