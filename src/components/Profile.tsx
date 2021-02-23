import styles from '../styles/components/Perfil.module.css'

export function Profile(){
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/marciofiladelfo.png" alt="Avatar"/>
            <div>
                <strong>Marcio Filadelfo</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}