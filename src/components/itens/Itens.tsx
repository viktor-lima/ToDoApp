import styles from './Itens.module.css'
import clipboard from "../../assets/clipboard.svg"


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
      <div className={styles.content}>
        <img className={styles.clipboard} src={clipboard} alt="" />
      </div>
      <div>
        <div style={{display:'grid', marginTop: '3rem', justifyContent: 'center'}}>
          <p>
            {'Você ainda não tem tarefas cadastradas'}
          </p>
          <p>
           {'Crie tarefas e organize seus itens a fazer'}
          </p>
        </div>
      </div>
    </div>
  )
}