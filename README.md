# Angular8

为什么选择 angular：

- 项目层面
  - 运用 rxjs 做逻辑处理异步处理十分自然，表单的约束验证，文件结构、编码规范
- 生态层面
  - 背后靠着 Google、Microsoft（typescript、rxjs）
  - Linkedin 上该技术栈招聘需求最多

内容分布：

- 环境搭建
- 开发工具
- 工程结构
- 可滚动的 Tabbar
- 组建的写法
- 样式绑定
- 事件绑定
- 组件的输入输出
- 基础知识
  - 生命周期
  - 引用模板
  - 模块概念
  - 模块划分
  - 双向绑定
  - 轮播图组件
- 进阶知识
  - 注解
  - 指令
  - 组件嵌套
  - 路由
  - 组件投影
  - 依赖注入
  - 脏值检测
  - 望各组件
- HTTP 通讯
  - HTTP 概念
  - 消息
  - 调试
  - Rest API
  - HttpClient
  - 拦截器
  - RxJS
- 项目实战
  - 商品列表组件
  - 商品详情组件
  - 拼单组件
  - 确认订单
  - 对话框
  - 个人信息组件
- 上线部署
  - 懒加载
  - 环境变量
  - 编译打包
  - 部署
  - 总结
  
## 框架对比

### Angular8 VS AngularJS

AngularJS：

- 开发语言为 JavaScript
- 采用不同的指令进行数据和事件绑定
- 可扩展性差，在复杂应用上维护性差

Angular8 的优点：

- TypeScript 提供类型检查和代码提示
- 采用`[]`进行数据绑定，`()`事件绑定
- 优异的可扩展性，可维护性
  
### vs React

Angular 是一个完整的框架，而 React 是一个类库，其对应Angular的各种特性，需要寻找各种开源社区类库，如下表所示。
![vs React](images/vsReact.png)
Angular使用HTML+CSS+组件类，而 React 中所有都是js

### vs Vue

- vue 很多思想脱胎于angularjs，和react类似是一个轻量级的，面向view层的类库
- vue适合快速开发较小的工程，而angular自带编程范式，使得它成为与多个开发人员合作的好选择
- vue 是个人开发维护的开源项目，而angular是Google的开源项目

### angular 架构

![angular架构](images/angular架构.png)

## 环境搭建

Node、npm/cnpm、angular cli。

```shell
npm install -g @angular/cli
ng version
```

## VSCode 配置

推荐插件：angular files、angular language Service、Angular Snippets

chrome插件：augury

## angular cli

创建项目：

```shell
ng new <项目名>

# 跳过安装，只创建文件
ng new <项目名> --skip-install --style css --routing false
```

启动开发服务器：

```shell
ng serve
```

### 项目目录结构

![项目目录结构](images/项目目录结构.png)

### 首页组件结构

- 组件控制屏幕的一部分视图
- 组件的逻辑是定义在 Class 中的，Class 通过属性和方法与视图交互
- `@Component` 注解标记一个 Class 为 Angular Component
- `@Component` 中的 templateUrl 或者 template 将模板和组件联系起来
- `@Component` 中的 styleUrls 或者 styles 将样式和组件联系起来
- 模板样式和组件一起决定视图的外观和行为

### 什么是组件

![什么是组件](images/什么是组件.png)

### emmet 快捷用法

<https://docs.emmet.io/cheat-sheet>

### 真机调试

- 确保手机和电脑处于同一 wifi
- `ng serve --host 0.0.0.0`
- 手机浏览器打开 `http://<电脑IP>:4200`

消除滚动条：

```css
::-webkit-scrollbar {
  display: none;
}
```

### 重要指令-ngFor

- 变量的应用范围
- 索引的获取
- 第一个和最后一个
- 奇和偶
- 提升性能 trackBy

### 事件的处理和样式绑定

- `[class.样式类名]="判断表达式"`是在应用单个 class 时常用的技巧
- 使用方括号是数据绑定，如果带方括号，等号后买你就是一个对象或表达式
- 不使用方括号，等号后面angular认为是一个字符串，但如果我们此时在等号后面使用`{{}}`就是和方括号等效的
- 圆括号用于事件绑定，等号后可以接表达式也可以是一个定义在类中的函数

### 封装第一个组件

组件封装的意义和方法：

- 需要重用，或者简化逻辑
- ng generate component 组件名（驼峰形式）
- 使用 index.ts 方便导入以及隔离内部变化对外部的影响

### 样式绑定的几种方式

- `[class.className]="条件表达式"`
- `[ngClass]="{'One': true, 'Two': true, 'Three': false}"`
- `[ngStyle]="{'color': someColor, 'font-size': fontSize}"`

## 组件的生命周期

- constructor 构造函数永远首先被调用
- ngOnChanges 输入属性变化时被调用
- ngOnInit 组件初始化时被调用
- ngDoCheck 脏值检测时调用
  - ngAfterContentInit 当内容投影 ng-content 完成时调用
  - ngAfterContentChecked Angular 检测投影内容时调用（多次）
  - ngAfterViewInit 当组件视图（子视图）初始化完成时
  - ngAfterViewChecked 当检测视图变化时（多次）
- ngOnDestroy 当组件销毁时

## 在组件类中引用模版

![在组件类中引用模版](images/在组件类中引用模版.png)

## 模板在组件类中的引用

引用多个模板元素：
可以使用`@ViewChildren`，在 `@ViewChildren`中可以使用引用名或者使用 Angular 组件/指令的类型。声明类型为`QueryList<?>`

## @ViewChild 总结

- @ViewChild 用来在类中引用模板中的视图节点
- 可以说 Angular 组件，也可以是HTML元素
- 在 AfterViewInit 中可以安全的使用 @ViewChild 引用的元素
- 推荐使用 Renderer2 操作 DOM 元素

## 轮播组件

`scroll-behavior: smooth;`: 轮播图的过渡效果  
`-webkit-overflow-scrolling: touch;`：触摸可滚动  
`scroll-snap-type: x mandatory;`：在 x 轴强制吸附效果  
`scroll-snap-align: start;`：吸附的位置在起始位置  

## 双向绑定

就是属性绑定+事件绑定

```html
<input [value]="username" (input)="username = $event.target.value" />
```

`[value]="username"` -- 绑定 username 值到input的value  
`(input)="表达式"` -绑定表达式到 input的input事件  
`username = $event.target.value`- 在input事件触发时执行  
$event 表达式，提供事件的数据

### ngModel

FormsModule 中提供的指令  
使用`[(ngModel)]="变量"`形式进行双向绑定  
其实是一个语法糖  
`[ngModel]="username" (ngModelChange)="username=$event"`

3-6 8:40
