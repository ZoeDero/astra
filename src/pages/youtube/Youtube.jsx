import React from 'react';
import ReactPlayer from 'react-player/youtube'
import BarNav from '../../components/nav/BarNav';
import './youtube.scss';

const Youtube = () => {
    return (
        <div id="yt">
        <div >
            
            <h1 className='titre_yt'>Youtube</h1>
           


        </div>
        <div >
<ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' id="player_yt" />
</div>

<a href="https://www.youtube.com"><button type="submit" className='btn-link'>Vers ma chaîne Youtube</button></a>
</div>
    );
};

export default Youtube;