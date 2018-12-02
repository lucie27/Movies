//这两个导入的时候，接受的成员名称，必须这么写


import React from 'react'//创建组件，虚拟dom元素，生命周期
import  ReactDOM from 'react-dom'//把创建好的组件和虚拟DOM放在页面上展示
import App from './app'
//var movies$ =require('./movies')


//console.log("movies:",movies)

//创建虚拟DOM元素

//参数1： 创建的元素类型，字符串，表示元素的名称
//参数2： 是一个对象或null，表示当前这个dom元素的属性
//参数3： 子节点（包括 其他 虚拟dom 获取文本子节点）


//3.使用ReactDOM把虚拟DOM渲染到页面上
//参数1： 要渲染到那个虚拟DOM元素
//参数2： 指定页面上一个容器
//第二个参数要放的是一个DOM元素而不是一个选择器，document.getElementById可以返回一个元素
ReactDOM.render(
    <App/>
    ,document.getElementById('app'))


