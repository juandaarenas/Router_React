import { Link } from '../Link.jsx'

export default function AboutPage() {
    return (
      <>
        <h1>About</h1>
        <div>
          <img src='https://i.pinimg.com/474x/12/5d/cd/125dcd8ee7d52a9e84e8f0a016e9dbdd.jpg' />
          <p>Hola! me llamo Ricardo david y estoy creando React Router</p>
        </div>
        <Link to='/'>Ir a home</Link>
      </>
    )
  }