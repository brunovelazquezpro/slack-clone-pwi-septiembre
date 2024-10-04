//Buena practica
import React from 'react'
import ChannelItem from '../ChannelItem/ChannelItem'

const ChannelList = ({titulo, canales}) => {


    return (
        <>
            <h1>{titulo}</h1>
            {
                canales.map((canal) => {
                return (
                   <ChannelItem key={canal.id} nombre={canal.nombre} id={canal.id}/>
                )})
            }
        </>
    )
}
//propagar propiedades de mensajes {...mensaje}
export default ChannelList