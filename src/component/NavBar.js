import logo from "../Image/netflix-removebg-preview.png";
import search from "../Image/search.png";
import notification from "../Image/noti.png"
const NavBar = () => {
    return ( 
        <>
        <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src={logo} alt="" srcset=""  className="logoImg"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link text-light" aria-current="page"  href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/">TV Shows</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/">Movies</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/">News&Popular</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/">My List</a>
        </li>
        <li className="twoicon nav-item">
            <img src={search} alt="" srcset="" className="searchImg "/>
             <img src={notification} alt="" srcset="" className="notifiImg" /> 
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
     );
}
 
export default NavBar;