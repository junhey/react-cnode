import React from 'react';
import './ListHeader.scss'
class ListHeader extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            navSelect:'all'
        }
        //先bind类中方法
        this.selectTab = this.selectTab.bind(this)
    }
    selectTab(e){
        let navSelect=e.target.getAttribute('data-navSelect');
        this.setState({
            navSelect:navSelect
        });
        this.props.changeTab(navSelect);
    }
    render(){
        return (
            <div className="fixed">
            <div className="nav">
                    <ul>
                        <li className={this.state.navSelect=='all'?'active':''} onClick={this.selectTab} data-navSelect='all'>全部</li>
                        <li className={this.state.navSelect=='good'?'active':''} onClick={this.selectTab} data-navSelect='good'>精华</li>
                        <li className={this.state.navSelect=='share'?'active':''} onClick={this.selectTab} data-navSelect='share'>分享</li>
                        <li className={this.state.navSelect=='ask'?'active':''} onClick={this.selectTab} data-navSelect='ask'>问答</li>
                        <li className={this.state.navSelect=='job'?'active':''} onClick={this.selectTab} data-navSelect='job'>招聘</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default ListHeader; 