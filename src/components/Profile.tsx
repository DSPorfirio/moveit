import styles from '../styles/components/profile.module.css';

export function Profile() {
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/DSPorfirio.png" alt="Danilo Porfírio"/>
            <div>
                <strong>Danilo Porfírio</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}