import React, {Component} from 'react';
import { observer } from 'mobx-react'
import {StoreContext} from '../context'

class ReactionsCount extends Component {

    state = this.context

    render(){
        return (
            <div className="row reactions-count">
                <div className="col-sm" align="left">
                    <i className="fa fa-thumbs-up" />{this.state.likesCount}
                </div>
                <div className="col-sm" align="right">
                    {this.state.commentsCount} comments
                </div>
            </div>
        )
    } 
}

ReactionsCount.contextType = StoreContext;

export default observer(ReactionsCount)
