import { Link } from '../Link.jsx'

export default function HomePage() {
    return (
      <>
        <h1>Home</h1>
        <p>Esta es una pagina de ejemplo para crear un React Router</p>
        <Link to='/about' >Ir a mas sobre nosotros</Link>
      </>
    )
  }