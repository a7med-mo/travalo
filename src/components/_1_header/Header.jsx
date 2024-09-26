import "../_1_header/header.css"
import Logo from "../_1_header/logo/Logo"
import Nav from "../_1_header/nav/Nav"

export default function Header() {
    return (
        <>
            <div className="container">
                <Logo />
                <Nav />
            </div>
        </>
    )
}
