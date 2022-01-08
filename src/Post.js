import React from 'react'
import './Post.css'
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post({
    displayName,
    userName,
    verified,
    text,
    image,
    avatar
    

}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <img src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/user_photos/001/585/361/datas/xlarge.png" alt="" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>Aniket Dhokane{" "}
                             <span className="post__headerSpecial">
                                 <VerifiedIcon className="post__badge"/>@AniketDhokane
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>I challenge you to build a twitter clone with me</p>
                    </div>
                    <img src="https://cdn.dribbble.com/users/330915/screenshots/3587000/10_coding_dribbble.gif" alt="" />
                </div>
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small"/>
                    <RepeatIcon fontSize="small"/>
                    <FavoriteBorderIcon fontSize="small"/>
                    <PublishIcon fontSize="small"/>


                </div>
            </div>

            
        </div>
    )
}

export default Post


// Post will contain that is passed with props
// Display Name   
// UserName 
// Verfied Tick 
// Text of Post 
// Image/GIF
// avatar

// 15653 