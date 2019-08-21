import React, { Component } from 'react'
import PottyCard from './PottyCard'

export default function PottiesContainer (props){
    const { potties } = props
    const pottyCards = potties.map( (potty) => {
        return <PottyCard deletePotty={props.deletePotty} potty={potty} />
    } )
    return(
        <div className='potties'>
            {pottyCards}
        </div>   

    )
}