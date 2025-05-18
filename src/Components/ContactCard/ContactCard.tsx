import styles from './ContactCard.module.scss';

const ContactCard = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>📞 Контакти для зв’язку зі мною:</h2>
      <p className={styles.line}>
        <strong>👨 Батько:</strong> Бендель Володимир
      </p>
      <p className={styles.line}>
        <strong>📧 Email:</strong>{' '}
        <a href="mailto:bendel.vova@gmail.com">bendel.vova@gmail.com</a>
      </p>
      <p className={styles.line}>
        <strong>💬 Telegram:</strong>{' '}
        <a href="https://t.me/Volodymyr_Full_Stack" target="_blank">
          @Volodymyr_Full_Stack
        </a>
      </p>
    </div>
  );
};

export default ContactCard;
