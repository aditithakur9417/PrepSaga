import '../styles/Web/Tiles.scss';

const Tiles = () => {

  return (
    <div className='sel-pnl-re'>
    {
        this.state.list.map((item)=>{
            return(
                <a className='tile-8' href={item.url}>

                    <img className='selection-panel-img' src={item.imageURL} />

                    <span className='selection-panel-text'>{item.title}</span>

                </a>
            )
        })
    }
    </div>
  )
}

export default Tiles;
