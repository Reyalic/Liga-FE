'use client'
import { PlayerCard } from '@/components/PlayerCard';
import { players } from '@/data/players';
import { useParams } from 'next/navigation';

export default function Equipo() {

    const params = useParams<{ id: string }>()
    const entry = players.filter( player => player.team_id === params.id )

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center m-16'>
                {
                    entry.map( player => (
                        <PlayerCard player={ player } key={ player.id } />
                    ))
                }
            </div>
        </>
      )
}