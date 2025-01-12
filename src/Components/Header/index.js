import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const imageHomeButton = () => {
    const {history} = props
    history.replace('/')
  }

  const logoutButton = () => {
    const {history} = props
    Cookies.remove('jwtToken')
    history.replace('/login')
  }

  return (
    <div className="Header-container">
      <button type="button" onClick={imageHomeButton} className="imgButton">
        <img
          src="https://res.cloudinary.com/dhr677kpr/image/upload/v1732888547/image_hkxsmo.png"
          alt="login website logo"
          className="Home-image"
        />
      </button>
      <button type="button" className="Home-button" onClick={logoutButton}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(Header)
