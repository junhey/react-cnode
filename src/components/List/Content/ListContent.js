import React from 'react';
import './ListContent.scss'
// import { Link } from 'react-router';
class ListContent extends React.Component{
    constructor(props) {
        super(props);
        console.log(this.props.listArr);
        [...this.props.listArr].map((item) => {
                console.log(item);
        })
    }
    render(){
        return (
            <div className="list-content">
            {
                [...this.props.listArr].map((item) => {
                        <div>{item.id}</div>
                })
            }
            </div>
        )
    }
}
export default ListContent; 