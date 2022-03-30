import React from "react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-100 py-8 text-neutral-700">
      <div className="container">
        <p>Raphael Marques - Copyright {currentYear}</p>
      </div>
    </footer>
  )
}

export default Footer
