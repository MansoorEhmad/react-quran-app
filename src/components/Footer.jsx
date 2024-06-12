import { Link } from "react-router-dom"
export default function Footer() {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-secondary">&copy; 2024 Company, Inc</p>

                <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                    <img src="/logo.svg" width={40} height={32} />
                </a>

                <ul className="nav col-md-4 justify-content-end">
                    
                    <li>
                        <Link className="nav-link px-2 text-secondary" to={"/ayah-verse"}>Ayah/Verse</Link>
                    </li>
                    <li><Link className="nav-link px-2 text-secondary" to={"/range-verse"}>Range Verses</Link></li>
                    <li><Link className="nav-link px-2 text-secondary" to={"/all-chapter"}>All Chapter</Link></li>
                    <li><Link className="nav-link px-2 text-secondary" to={"/word-in-quran"}>Word In Quran</Link></li>
                </ul>
            </footer>
        </div>
    )
}