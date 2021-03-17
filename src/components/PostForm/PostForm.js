import styles from "./PostForm.module.scss";

const PostForm = ({ onSubmit }) => {
  function handleSubmit(e) {
    const { currentTarget } = e;

    const fields = Array.from(currentTarget.elements);
    const data = {};

    fields.forEach((field) => {
      if (!field.name) return;

      data[field.name] = field.value;
    });
    if (typeof onSubmit === "function") {
      onSubmit(data, e);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <textarea name="content" className={styles.formContent}></textarea>
      <button className={styles.formBtn}>add new post</button>
    </form>
  );
};

export default PostForm;
