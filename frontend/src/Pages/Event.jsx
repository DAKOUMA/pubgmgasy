import React from 'react'
import NavBar from '../Components/NavBar'
import MainEvent_card from '../Components/Card/MainEvent_card'
import SideEvent_card from '../Components/Card/SideEvent_card'

const Event = () => {
    return (
        <>
            <NavBar />
            <main className='page-section flex flex-row justify-between px-8 gap-14'>
                <MainEvent_card name={'mainEvent'} />
                <aside className='flex flex-col w-2/3'>
                    <SideEvent_card name={'sideEvent-1'} />
                    <SideEvent_card name={'sideEvent-2'} />
                </aside>
            </main>
        </>
    )
}

export default Event