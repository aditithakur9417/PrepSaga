import React from 'react'

function WidgetHeader({framesData}) {
  return (
    <div className={`widgetTileLinkHeader ${!framesData.url && "notViewAll"}`}>
        <div>
        {framesData.title ? (framesData.url ? <a href={framesData.url} className="widgetTitleText">{framesData.title}</a> :<div className="widgetTitleText">{framesData.title}</div>) : null}
        {framesData.subTitle ? <div className="widgetSubtitleText">{framesData.subTitle}</div> : null}
        </div>
        {framesData.url ? <a href={framesData.url} className="widgetTitleLink">{framesData.viewAll}</a> : null}
    </div>
  )
}

export default WidgetHeader;