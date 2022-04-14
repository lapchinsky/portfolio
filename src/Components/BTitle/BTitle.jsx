import React from "react";
import styles from './BTitle.module.scss'

const BTitle = ({ header, strong, preview, description}) => {
    return (
        <div className={styles.title}>
            <small className={styles.title__preview}>{preview}</small>
            <h1 className={styles.title__header}>{header}</h1>
            <strong className={styles.strong}>{strong}</strong>
            <div className={styles.title__description}>
                {description}
            </div>
        </div>
    )
}

export default BTitle