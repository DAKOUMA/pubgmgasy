import React from 'react'
import NavBar from '../Components/NavBar'
import DiscordServer_card from '../Components/Card/DiscordServer_card'

const Server = () => {
    const DiscordServer_list = [
        {
            name: "The Vikings",
            link: "#",
            logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/PUBG_Mobile_simple_logo_black.png",
            description: "scrims/event"
        },
        {
            name: "Eeagle Royal",
            link: "#",
            logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/PUBG_Mobile_simple_logo_black.png",
            description: "scrims/event"
        },
        {
            name: "Family Team",
            link: "#",
            logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/PUBG_Mobile_simple_logo_black.png",
            description: "scrims/event"
        },
    ] 

    return (
        <>
            <NavBar />
            <main className='page-section'>
                <h1>Server</h1>
                {
                    DiscordServer_list.map( (value, index) => (
                        <DiscordServer_card
                         key={index}
                         name={value.name}
                         link={value.link}
                         logo={value.logo}
                         description={value.description} 
                        />
                    ))
                }
            </main>
        </>
    )
}

export default Server