
import ReactPlayer from 'react-player'
import React from 'react';
import BarNav from '../../components/nav/BarNav';
import './twitch.scss';


const Twitch = ({color, AddTwitchColor}) => {
   

   
   return (
       <div id='twitch_page'>
            <BarNav />
            <div>
                <h1 id='titleTwitchPage' classNameName='text-center'>Twitch</h1>
            </div>
            <div className='twitch_player'>
            <ReactPlayer url='https://www.twitch.tv/astrapunk' className='twitch_player'  />
            </div>
        </div>
            
    );
};

export default Twitch;