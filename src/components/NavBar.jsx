import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <div id='nav-bar-container'>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/AllPlayers'>All Players</Link>
        <Link to='/new'>Add Player</Link>
      </nav>
    </div>
  );
}
