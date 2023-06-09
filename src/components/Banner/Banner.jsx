import React from 'react'
import './Banner.css'

const Banner = () => {
    const truncate = (string, n) =>{
        return string?.length > n ? string.substr(0, n-1) + '...' : string
    }

    return (
        <header 
            className="banner" 
            style={{
                backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/7a33204b-893d-4792-8494-b9d6cbc73848/013844b6-084e-4402-8742-ca7f58e8a08c/JP-en-20210502-popsignuptwoweeks-perspective_alpha_website_large.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center center",
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    Movie Name
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including versions of 
                    Lorem Ipsum.`, 200)}
                </h1>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner
