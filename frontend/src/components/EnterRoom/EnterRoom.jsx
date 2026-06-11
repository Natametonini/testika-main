import styles from "./EnterRoom.module.css";

function EnterRoom() {
  return (
    <section className={styles.section}>
      <h2>Entrar em uma sala</h2>

      <p>
        Digite o código recebido pelo professor.
      </p>

      <div className={styles.box}>
        <input
          type="text"
          placeholder="Ex: ABC123"
        />

        <button>
          Entrar
        </button>
      </div>
    </section>
  );
}

export default EnterRoom;