import Helmet from 'react-helmet'
import React, { Fragment } from 'react'

function Profile() {
    return (
        <Fragment>
            <Helmet>
                <title>Profile</title>
            </Helmet>
            <h1>Profile Page</h1>
        </Fragment>
    )
}

export default Profile