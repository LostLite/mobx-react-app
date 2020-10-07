import React, {useContext} from 'react';
import {Observer} from 'mobx-react'
import {StoreContext} from '../context'

export default function Comments() {
    const store = useContext(StoreContext);
    return <Observer>
        {
            ()=>(
                <table className="table">
                    <tbody>
                        {
                            store.comments.map((comment, index) =>{
                                return (
                                    <tr key={index}>
                                        <td>{comment}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            )
        }
    </Observer>   
        
}
