import React from "react";
import ReactionsCount from "./Count";
import Buttons from "./Buttons";
import { Observer } from 'mobx-react'
import imageStore from '../store/imageStore'


export default function Card() {
    return (
        <Observer>
            {()=>(
                <div className="card">
                    <img src={imageStore.imageUrl} loading='lazy' className="card-img-top" alt="..." />
                    <button className="btn btn-light" onClick={()=>{ imageStore.fetchImage()}}>
                        <i className="fa fa-chevron-right" />
                    </button>
                    <ReactionsCount />
                    <div className="card-body" >
                        <Buttons />
                    </div>
                </div>
            )}
        </Observer>
        
    );
}
