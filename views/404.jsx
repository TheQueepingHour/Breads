const React = require('react')
const Default = require('./layouts/default')

function error404() {
    return(
        <Default>
            <h2>Error 404: Page not found.</h2>
            <h4><a href="/breads">Click here to return to index page.</a></h4>
        </Default>
    )
}

module.exports = error404