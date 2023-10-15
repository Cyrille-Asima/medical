import React from 'react'
import { Helmet } from 'react-helmet-async'

const Meta = ({title, description, keywords}) => {
    return (
    <Helmet>
        <title>{title}</title>
        <meta name='description' content={description}/>
        <meta name='keywords' content={keywords}/>
    </Helmet>
    )
}

Meta.defaultProps = {
    title:'Welcome to MedVice',
    description:'We make it easy for small businesses ',
    keywords:'medical products, cheap, used devices'
}

export default Meta