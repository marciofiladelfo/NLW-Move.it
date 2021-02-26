import { useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css'

export function Countdown() {

    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown,
    } = useContext(CountdownContext)
    
    const [decMinute, uniMinute] = String(minutes).padStart(2, '0').split('');
    const [decSecond, uniSecond] = String(seconds).padStart(2, '0').split('');

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{decMinute}</span>
                    <span>{uniMinute}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{decSecond}</span>
                    <span>{uniSecond}</span>
                </div>
            </div>

            {hasFinished ? (
                <button
                    disabled
                    className={styles.countdownButton}
                >
                    Ciclo encerrado
                </button>
            ) : (
                    <>
                        {isActive ? (
                            <button
                                type="button"
                                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                                onClick={resetCountdown}
                            >
                                Abandonar ciclo
                            </button>
                        ) : (
                                <button
                                    type="button"
                                    className={styles.countdownButton}
                                    onClick={startCountdown}
                                >
                                    Iniciar ciclo
                                </button>
                            )}
                    </>
                )}
        </div>
    )
}