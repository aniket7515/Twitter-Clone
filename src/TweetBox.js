import React from 'react'
import './TweetBox.css'

function TweetBox() {
    return (
        <div className="tweetBox">
            <form action="">
                <div className="tweetBox__input">
                    <img src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/user_photos/001/585/361/datas/xlarge.png" alt="" />
                    <input type="text" placeholder="Whats Happening?" />

                </div>
                <input type="text" className="tweetBox__imageInput" placeholder="Enter Image URL"  />
                <button className="tweetBox__tweetButton">Tweet</button>
            </form>
        </div>
    )
}

export default TweetBox
