import React, {useContext} from "react";
import {StoreContext} from '../context'

export default function Buttons() {
    const store = useContext(StoreContext)

    return (
        <div className="row">
            <div className="col-sm">
                <button type="button" className="btn btn-light align-top" onClick={() => store.updateCount()}>
                    <i className="fa fa-thumbs-o-up" />Like
                </button>
            </div>
            <div className="col-sm">
                <button type="button" className="btn btn-light"><i className="fa fa-comment-o" />Comment</button>
            </div>
        </div>
    );
}