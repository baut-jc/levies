import React from "react"
import { Link } from "react-router-dom"


function Error(){
  return (
    <section className="network-error">
      <p>Something has Gone Wrong...</p>
      <Link to="/">
        <button>Go Home</button>
      </Link>
    </section>
  )
}

export default Error