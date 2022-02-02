import React from "react";
import styles from './Title.module.scss'

const Title = ({ header, strong, preview, description}) => {
    return (
        <div className={styles.title}>
            <small className={styles.title__preview}>{preview}</small>
            <h1 className={styles.title__header}>{header}<strong className='title__header-strong'>{strong}</strong></h1>
            <div className={styles.title__description}>
                {description}
            </div>
        </div>
    )
}

export default Title