import '../styles/Mobile/Tiles.scss';

const Tiles = () => {

  return (
    <div className='sel-pnl-re'>
    {
        this.state.list.map((item,i)=>{
            return(
                <a className='tile' href={item.url}>

                  <div className='sel-pnl-img-cont'>
                    <img className='selection-panel-img' src={item.imageURL} />
                  </div>

                  <span className='selection-panel-text'>{item.title}</span>

                  {i<4?<div class="bottom-line"></div>:''}
                  
                </a>
            )
        })
    }
    </div>
  )
}

export default Tiles;
