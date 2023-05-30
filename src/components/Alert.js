import React from 'react'

export default function Alert(props) {
  return (
    <div >
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Welcome!</strong> {props.alert}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    </div>
  )
}
