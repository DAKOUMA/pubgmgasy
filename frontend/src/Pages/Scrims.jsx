import React from 'react'
import NavBar from '../Components/NavBar'

const Scrims = () => {
    return (
        <>
            <NavBar />
            <main className='page-section flex flex-col items-center'>
                <h1>Scrims</h1>
                <div className="scrimsShedule text-center gap-x-8 grid grid-cols-8 grid-rows-5">
                    <div className="hour col-start-1 col-end-2 row-start-1 row-end-6">
                        <div className="hourBlank">Start</div>
                        <div className="hour-container">
                            <div>16h00</div>
                            <div>16h00</div>
                            <div>16h00</div>
                            <div>16h00</div>
                        </div>
                    </div>
                    <div className="day monday col-start-2 row-start-1 row-end-6">
                        <div className="dayTitle">Monday</div>
                        <div className='dayHour-container'>
                            <div className="dayHour hour-1">Discord Link</div>
                            <div className="dayHour hour-2">Discord Link</div>
                            <div className="dayHour hour-3">Discord Link</div>
                            <div className="dayHour hour-4">Discord Link</div>
                        </div>
                    </div>
                    <div className="day tuesday col-start-3 row-start-1 row-end-6">
                        <div className="dayTitle">Tuesday</div>
                        <div className='dayHour-container'>
                            <div className="dayHour hour-1">Discord Link</div>
                            <div className="dayHour hour-2">Discord Link</div>
                            <div className="dayHour hour-3">Discord Link</div>
                            <div className="dayHour hour-4">Discord Link</div>
                        </div>
                    </div>
                    <div className="day wednesday col-start-4 row-start-1 row-end-6">
                        <div className="dayTitle">Wednesday</div>
                        <div className='dayHour-container'>
                            <div className="dayHour hour-1">Discord Link</div>
                            <div className="dayHour hour-2">Discord Link</div>
                            <div className="dayHour hour-3">Discord Link</div>
                            <div className="dayHour hour-4">Discord Link</div>
                        </div>
                    </div>
                    <div className="day thursday col-start-5 row-start-1 row-end-6">
                        <div className="dayTitle">Thursday</div>
                        <div className='dayHour-container'>
                            <div className="dayHour hour-1">Discord Link</div>
                            <div className="dayHour hour-2">Discord Link</div>
                            <div className="dayHour hour-3">Discord Link</div>
                            <div className="dayHour hour-4">Discord Link</div>
                        </div>
                    </div>
                    <div className="day friday col-start-6 row-start-1 row-end-6">
                        <div className="dayTitle">Friday</div>
                        <div className='dayHour-container'>
                            <div className="dayHour hour-1">Discord Link</div>
                            <div className="dayHour hour-2">Discord Link</div>
                            <div className="dayHour hour-3">Discord Link</div>
                            <div className="dayHour hour-4">Discord Link</div>
                        </div>
                    </div>
                    <div className="day saturday col-start-7 row-start-1 row-end-6">
                        <div className="dayTitle">Saturday</div>
                        <div className='dayHour-container'>
                            <div className="dayHour hour-1">Discord Link</div>
                            <div className="dayHour hour-2">Discord Link</div>
                            <div className="dayHour hour-3">Discord Link</div>
                            <div className="dayHour hour-4">Discord Link</div>
                        </div>
                    </div>
                    <div className="day sunday col-start-8 row-start-1 row-end-6">
                        <div className="dayTitle">Sunday</div>
                        <div className='dayHour-container'>
                            <div className="dayHour hour-1">Discord Link</div>
                            <div className="dayHour hour-2">Discord Link</div>
                            <div className="dayHour hour-3">Discord Link</div>
                            <div className="dayHour hour-4">Discord Link</div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Scrims