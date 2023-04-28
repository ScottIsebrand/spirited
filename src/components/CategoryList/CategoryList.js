import styles from './CategoryList.module.css';

export default function CategoryList({ categories, activeCat, setActiveCat }) {
  const cats = categories.map((cat) => (
    <li
      key={cat}
      className={cat === activeCat ? styles.active : ''}
      // FYI, the below will also work, but will give a warning
      // className={cat === activeCat && 'active'}
      onClick={() => setActiveCat(cat)}
    >
      {cat}
    </li>
  ));
  return <ul className={styles.CategoryList}>{cats}</ul>;
}
