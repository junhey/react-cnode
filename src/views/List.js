import React,{ Component } from 'react';
// import { Button } from 'element-react';
// import { Link } from 'react-router';

import ListHeader from '../components/List/Header/ListHeader';
import ListContent from '../components/List/Content/ListContent';
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
            limit: 10,
            tab: 'all',
            mdrender: true
        }
      };
      this.changeTab=this.changeTab.bind(this);
      this.mergeTopics=this.mergeTopics.bind(this);
  }
  componentDidMount(){
    //初始化数据
    this.getList();
    // 滚动加载
    $(window).on('scroll', utils.throttle(this.getScrollData, 300, 1000));
  }
  getList(){
    let _this=this;
    axios.get('https://cnodejs.org/api/v1/topics',{
        params:_this.state.searchKey
    }).then(function(res){
        _this.state.scroll = true;
        if(res.status===200){
            if (res && res.data) {
                res.data.data.forEach(_this.mergeTopics);
            }
        }else{
            console.log('网络错误');
        }
    });
  }
  mergeTopics(listData) {
    let _listData=this.state.listData;
    _listData.push(listData);
    this.setState({
      listData:_listData
    });
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
  
  render() {
    return (
      <div>
        <ListHeader changeTab={this.changeTab} />
        <ListContent listArr={this.state.listData} />
      </div>
    );
  }
}

export default List;