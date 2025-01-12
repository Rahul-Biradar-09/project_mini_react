import './index.css'

const NotFound = () => {
  return (
    <div className="Notfound-background">
      <img
        src="https://res.cloudinary.com/dhr677kpr/image/upload/v1733035974/Group_7504_eivyhb.png"
        alt="not found"
        className="Notfound-image"
      />
      <h1 className="Notfound-heading">Page Not Found</h1>
      <p className="Notfound-para">
        We are sorry, the page you requested could not be found
      </p>
    </div>
  )
}

export default NotFound
