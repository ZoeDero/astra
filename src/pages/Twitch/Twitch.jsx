
import ReactPlayer from 'react-player'
import React from 'react';
import BarNav from '../../components/nav/BarNav';
import './twitch.scss';


const Twitch = ({color, AddTwitchColor}) => {
   

   
   return (
       <div id='twitch_page'>
           
            <div>
                <h1 id='titre_twitch' className='text-center'>Twitch</h1>
            </div>
            <div className='twitch_player d-flex justify-content-center'>
            <ReactPlayer url='https://www.twitch.tv/astrapunk' id='twitch_player'  />
            </div>
            <a href="https://www.youtube.com"><button type="submit" className='btn-link-twitch'>Ma chaîne</button></a>
        </div>

        
            
    );
};

export default Twitch;