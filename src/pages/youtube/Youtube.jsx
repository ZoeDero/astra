import React from 'react';
import ReactPlayer from 'react-player/youtube'
import BarNav from '../../components/nav/BarNav';
import './youtube.scss';

const Youtube = () => {
    return (
        <div id="yt">
        <div >
            <BarNav/>
            <h1>Youtube</h1>
           


        </div>
        <div >
<ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' id="player_yt" />
</div>
</div>
    );
};

export default Youtube;