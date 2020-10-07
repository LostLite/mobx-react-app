import React, {Component} from 'react';
import { observer } from 'mobx-react'
import {StoreContext} from '../context'

class Form extends Component{

    handleSubmit(e, store){
        e.preventDefault();
        store.postComment(this.comment.value);
        this.comment.value = ''
    }

    render(){
        return (
            <StoreContext.Consumer>
                {
                    store => (
                        <form onSubmit={e => this.handleSubmit(e, store)}>
                            <div>
                                <input type="text" id={'comment'} className="form-control" placeholder={"Write a comment ..."}
                                    ref={node => {this.comment = node}} />
                            </div>
                        </form>
                    )
                }
            </StoreContext.Consumer>
            
        )
    }
}

export default observer(Form)