import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav} style={{'backgroundColor': '#c3404e'}}>
      <ul>
        <li>
          <Link href='/'><img width="50%" src="https://cdn.igp.com/raw/upload/assets/images/igp-logo.png?v=6" title="IGP" alt="IGP" /></Link>
        </li>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
