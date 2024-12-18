import styles from './Itens.module.css'

export function Itens() {

  return (
    <div className={styles.container}>
      <div className={styles.countContent}>
          <div className={styles.countItem}>
            <span>
              Tarefas criadas 
            </span>
            <p>
              {0}
            </p>
          </div>
          <div className={styles.countItem}>
            <span>
              Concluidas 
            </span>
            <p>
              {`${0} de ${5}`}
            </p>
          </div>
      </div>
    </div>
  )
}