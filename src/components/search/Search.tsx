import styles from './Search.module.css'

export function Search() {
  return (
    <div className={styles.searchField}>
      <input
        type="text"
        className={styles.search}
        placeholder="Adicione uma nova tarefa"
      />
      <button className={styles.btnCreate}>Criar +</button>
    </div>
  )
}