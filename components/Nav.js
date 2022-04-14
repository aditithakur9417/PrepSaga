import Link from 'next/link'
import navStyles from '../styles/Nav.module.css';
import StaticSvg from './RenderSvg';
import SearchInput from './searchComponent';

const Nav = () => {
  return (
    <>
    <nav className={navStyles.nav}>
      <ul className={navStyles.navContainer}>
        <li className={navStyles.navlftlogo}>
          <Link href='/'><img src="https://cdn.igp.com/raw/upload/assets/images/igp-logo.png?v=6" title="IGP" alt="IGP" /></Link>
        </li>
        {/* <li>
          <Link href='/'><div className="mt-5 mb-5 mr-5 ml-1">Home</div></Link>
        </li>
        <li>
          <Link href='/about'><div className="mt-5 mb-5 mr-5 ml-1">About</div></Link>
        </li> */}
        <li className={navStyles.searchBar}>
          <SearchInput />
          {/* <input type="text" placeholder="Search..." />   */}
        </li>
        <li className={navStyles.rightNav}>
          <StaticSvg url="Rupee-big" imgSvg={true}/>
          <StaticSvg url="Track-big" imgSvg={true}/>
          <StaticSvg url="heart-2" imgSvg={true}/>
          <StaticSvg url="Cart-big" imgSvg={true}/>
          <StaticSvg url="Profile-big" imgSvg={true}/>
        </li>
      </ul>
    </nav>
    <div className="bg-red-500 text-white text-right w-full h-8 lh-5"><div className="text-right"><ul><li className="inline-block p-1">Quickly Go To:</li><li className="inline-block p-1 hover:underline"><a href="/birthday-gifts">Birthday Gifts</a></li><li className="inline-block p-1 hover:underline"><a href="/sweets">Sweets</a></li><li className="inline-block p-1 hover:underline"><a href="/corporate-gifts">Bulk/Corporate Gifts</a></li></ul></div></div>
    </>
  )
}

export default Nav
