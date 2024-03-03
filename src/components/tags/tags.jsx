import React from 'react'

const Tags = ({className, tagsData}) => {
    return (
        <div>
            <ul className={className}>
                {tagsData.map(tag => (
                    <li className="tag">{tag}</li>
                ))}
            </ul>
        </div>
    )
}

export default Tags