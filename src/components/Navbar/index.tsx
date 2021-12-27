import { Link } from 'react-router-dom';

export default function Navbar() {
  const toggleMenu = () => {
    document.querySelector('.navbar-burger')?.classList.toggle('is-active');
    document.querySelector('.navbar-menu')?.classList.toggle('is-active');
  };

  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <button onClick={toggleMenu} className='navbar-burger' aria-label='menu' aria-expanded='false' data-target='navbar'>
        <span aria-hidden='true'></span>
        <span aria-hidden='true'></span>
        <span aria-hidden='true'></span>
      </button>
      <div id='navbar' className='navbar-menu'>
        <div className='navbar-start'>
          <Link to='/' className='navbar-item'>
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
}
