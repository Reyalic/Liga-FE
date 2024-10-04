import { Players } from '@/interfaces/players'
import Image from 'next/image'
import React, { FC } from 'react'

interface Props {
  player: Players
}

export const PlayerCard: FC<Props> = ({ player }) => {
  return (
    <div className='flex flex-col gap-16 justify-center items-center m-4 w-[300px] h-[450px] font-semibold'>
      <Image className='absolute opacity-50 rounded-md m-4 -z-10' 
        src={ '/images/bg-card.jpeg' } 
        alt='' 
        width={280} 
        height={440}
      />
      <Image  
          src={ `/images/image${ player.id }.jpg` } 
          alt=''
          width={ 180 }
          height={ 180 }
          priority={ false }
          className='object-contain h-[180px] w-[180px]'
      />
      <div className='flex flex-col justify-center items-center'>
        <h5 className='text-xl'>{ player.name }</h5>
        <h5 className='text-xl'>{ player.lastName }</h5>
        <p>Curp: { player.curp }</p>
        <p>Equipo: { player.team }</p>
        <p>Folio: { player.id } </p>
      </div>
        
    </div>
  )
}
