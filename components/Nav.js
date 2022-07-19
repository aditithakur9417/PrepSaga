import Link from 'next/link'
// import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <>
    <nav className="h-50 p-1 bg-igp-red text-white flex items-center justify-start">
      <ul className="flex items-center justify-center list-none">
        <li>
          <Link href='/'><img width="50%" src="https://cdn.igp.com/raw/upload/assets/images/igp-logo.png?v=6" title="IGP" alt="IGP" /></Link>
        </li>
        <li>
          <Link href='/'><div className="mt-5 mb-5 mr-5 ml-1">Home</div></Link>
        </li>
        <li>
          <Link href='/about'><div className="mt-5 mb-5 mr-5 ml-1">About</div></Link>
        </li>
      </ul>
    </nav>

    </>
  )
}

export default Nav
