import React from 'react'

export default function Alert(props) {
    function capitalizeFirstLetter(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    return (
          props.alert &&   <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalizeFirstLetter(props.alert.type)}! </strong>{props.alert.message}
          </div>

    )
}
