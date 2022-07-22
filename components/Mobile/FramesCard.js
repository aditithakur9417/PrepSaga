import React from 'react';
import FrameCardStyle from '../../styles/Mobile/FramesCard.module.css';

function FramesCard({card}) {
  return (
    <a href={card.url} className={FrameCardStyle.frameCardLink}>
      <div className={FrameCardStyle.frameCardLinkImage}>
        <img src={`https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/banners/${card.imageURL}`} /> 
      </div>
      <div className={FrameCardStyle.frameCardLinkText}>
        {card.title}
      </div>  
    </a>
  )
}

export default FramesCard