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
        </div>
    )
}

export default Widgets
