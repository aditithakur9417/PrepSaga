import React from 'react';
import FramesCard from './FramesCard';
import FramesStyles from '../../styles/Mobile/Frames.module.css';
import WidgetHeader from './WidgetHeader';


function Frames({ keyValue,framesData }) {
  console.log(framesData);
  return (
    <section className="widgetMargin">
      <WidgetHeader framesData={framesData}/>
      {framesData?.list?.map((singleFrame,index) => {
        return (
          <div key={singleFrame.title.replaceAll(" ","-")} className={`${FramesStyles.frameHeaderTileContainer} ${(index >= 1) && FramesStyles.frameMargin}`}>
            {singleFrame.title ? (<div className={FramesStyles.frameHeadingContainer}>
              <span className="frame-heading-text">{singleFrame.title}</span>
              {singleFrame.url ? (<a href={singleFrame.url} className="frame-heading-link">{singleFrame.viewAll}</a>) : null}
            </div>) : null}
            {singleFrame.list.length ? <div className={FramesStyles.framesTilesContainer} data-framestiles={singleFrame.list.length}>
              {singleFrame.list?.map((singleCard) => {
                return <FramesCard key={singleCard.url.slice(1,singleCard.url.length)} card={singleCard} />
              })}
            </div> : null}
          </div>
        )
      })}
    </section>
  )
}

export default Frames;