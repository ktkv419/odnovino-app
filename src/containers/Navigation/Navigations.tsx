import { Link, useNavigate } from 'react-router-dom'

const Navigation = () => {
  const navigate = useNavigate()

  return (
    <nav className="nav">
      <button className="item" onClick={() => navigate(-1)}>
        Назад
      </button>
      <div className="item">
        <Link to={'/wine'}>Найти</Link>
      </div>
    </nav>
  )
}

export default Navigation
