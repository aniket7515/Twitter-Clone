import React from 'react'
import './Widgets.css'
import SearchIcon from '@mui/icons-material/Search';
import { 
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,


} from 'react-twitter-embed';



function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon"/>
                <input type="text" placeholder="Search Tweet" />

            </div>
            <div className="widgets__widgetContainer">
                <h2>What's Happening</h2>
                <TwitterTweetEmbed tweetId={"1479669943838941186"}/>
                <TwitterTimelineEmbed
                   sourceType="profile"
                   screenName="kunalstwt"
                   options={{height: 400}}
                
                />
                <TwitterShareButton 
                   url={"https://twitter.com/AniketDhokane"}
                   options={{text:"#Reactjs is awesome"}}
                
                />
            </div>
        </div>
    )
}

export default Widgets
