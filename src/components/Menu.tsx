export default function Menu(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand">React Peliculas</a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link">Géneros</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}