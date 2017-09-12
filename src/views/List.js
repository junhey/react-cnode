import React,{ Component } from 'react';
// import { Button } from 'element-react';
// import { Link } from 'react-router';

import ListHeader from '../components/List/Header/ListHeader';
// import ListContent from '../components/List/Content/ListContent';
import 'element-theme-default';

import $ from 'webpack-zepto';
import utils from '../libs/utils.js';
import axios from 'axios';

class List extends Component {
  constructor(props) {
      super(props);
      this.state = {
        scroll:true,
        listData:[],
        index: {},
        searchKey: {
            page: 1,
            limit: 20,
            tab: 'all',
            mdrender: true
        }
      };
  }
  getList(){
    let _this=this;
    axios.get('https://cnodejs.org/api/v1/topics',{
        params:_this.searchKey
    }).then(function(res){
        _this.state.scroll = true;
        if(res.status===200){
            //_this.listData=res.data.data;
            if (res && res.data) {
                console.log(res.data.data);
                res.data.data.forEach(_this.mergeTopics);
            }
        }else{
            console.log('网络错误');
        }
    });
  }
  mergeTopics(listData) {
    console.log(listData);
    // let index=this.state.index;
    // if (typeof index[listData.id] === 'number') {//number
    //     const topicsIndex = this.index[listData.id];
    //     let listData=this.state.listData;
    //     listData[topicsIndex]=listData;
    //     this.setState({
    //       listData:listData
    //     });
    // } else {//undefined
    //     this.index[listData.id] = this.listData.length;
    //     this.state.listData.push(listData);
    // }
  }
  changeTab(tab){
      // 如果是当前页面切换分类的情况
      let searchKey=this.state.searchKey;
      if (tab) {
        searchKey.tab=tab;
        this.setState({
          listData:[],
          index:{}
        })
      }
      searchKey.page=1;
      this.setState({
        searchKey:searchKey
      });
      this.getList();
  }
  getScrollData(){
      if(this.state.scroll){
          let totalheight=parseInt($(window).height(),20)+parseInt($(window).scrollTop(),20);
          if($(document).height()<=totalheight+200){
            let searchKey=this.state.searchKey;
            searchKey.page+=1;
            this.setState({
              scroll:false,
              searchKey:searchKey
            });
            this.getList();
          }
      }
  }
  componentDidMount(){
    //初始化数据
    this.getList();
    // 滚动加载
    $(window).on('scroll', utils.throttle(this.getScrollData, 300, 1000));
  }
  render() {
    return (
      <div>
        <ListHeader />
      </div>
    );
  }
}

export default List;