import styles from './HomeworkCard.module.scss';

interface HomeworkCardProps {
  title: string;
  description: string;
  image: string;
  lessonNumber: number;
}

const HomeworkCard = ({
  title,
  description,
  image,
  lessonNumber,
}: HomeworkCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>
          Урок {lessonNumber}: {title}
        </h3>
      </div>
      <img
        src={image}
        alt={`Домашня робота уроку ${lessonNumber}`}
        className={styles.image}
      />
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default HomeworkCard;
