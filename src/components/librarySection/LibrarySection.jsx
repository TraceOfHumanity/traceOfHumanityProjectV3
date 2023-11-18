import React from 'react'
import styles from './LibrarySection.module.scss'

const LibrarySection = (props) => {
    return (
        <div className={styles.category}>{props.section}</div>
    )
}

export default LibrarySection