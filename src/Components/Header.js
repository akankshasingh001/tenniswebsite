import '../Styles/style.css';
const Header = () => {
  return (
    <>
      <nav className="header navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="/tennisLogo.png"
              alt="Logo"
              width="150"
              height="150"
              className="circle d-inline-block align-text-top"
            />
          </a>
          <div className="headerName">Tennis Craze</div>
        </div>
      </nav>
    </>
  );
};

export default Header;
