
const LocationInfo = ({location}) => {
  return (
    
    <article className="list__location">
        <h2 className="header__h2">{location?.name}</h2>
        <ul className="header__ul">
            <li className="header__il"><span className="header__span">Type:</span>{location?.type}<span></span></li>
            <li className="header__il"><span className="header__span">Dimension:</span><span>{location?.dimension || 'unknow'}</span></li>
            <li className="header__il"><span className="header__span">Population:</span><span>{location?.residents.length}</span></li>
      </ul>
    </article>
    
  )
}

export default LocationInfo