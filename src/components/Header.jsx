import { Link } from "react-router-dom"
function Header() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark" style={{ backgroundColor: "#2a3038" }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}><img src="./logo.svg" style={{ width: "25px" }} /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link className="nav-link active" to={"/ayah-verse"}>Ayah/Verse</Link>
                        </li>
                        <li><Link className="nav-link active" to={"/range-verse"}>Range Verses</Link></li>
                        <li><Link className="nav-link active" to={"/all-chapter"}>All Chapter</Link></li>
                        <li><Link className="nav-link active" to={"/word-in-quran"}>Word In Quran</Link></li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Header