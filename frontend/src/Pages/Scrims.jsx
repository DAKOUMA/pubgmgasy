import React from 'react'
import NavBar from '../Components/NavBar'

const Scrims = () => {
    return (
        <>
            <NavBar />
            <main className='page-section'>
                <h1>Scrims</h1>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                            <th>Saturday</th>
                            <th>Sunday</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>16H00</th>
                            <td>Discord Link</td>
                            <td>Discord Link</td>
                            <td>Discord Link</td>
                            <td>Discord Link</td>
                            <td>Discord Link</td>
                            <td>Discord Link</td>
                            <td>Discord Link</td>
                        </tr>
                        <tr>
                            <th>19H00</th>
                            <td>Discord Link</td>
                            <td>Discord Link</td>
                            <td>Discord Link</td>
                            <td>Discord Link</td>
                            <td>Discord Link</td>
                            <td>Discord Link</td>
                            <td>Discord Link</td>
                        </tr>
                        <tr>
                            <th>21H30</th>
                            <td>Discord Link</td>
                            <td>Discord Link</td>
                            <td>Discord Link</td>
                            <td>Discord Link</td>
                            <td>Discord Link</td>
                            <td>Discord Link</td>
                            <td>Discord Link</td>
                        </tr>
                        <tr>
                            <th>00H00</th>
                            <td>Discord Link</td>
                            <td>Discord Link</td>
                            <td>Discord Link</td>
                            <td>Discord Link</td>
                            <td>Discord Link</td>
                            <td>Discord Link</td>
                            <td>Discord Link</td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </>
    )
}

export default Scrims