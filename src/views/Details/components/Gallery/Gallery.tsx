import s from "./Gallery.module.css";

export const Gallery = () => {
  return (
    <div className={s.wrapper}>
      {new Array(12).fill(null).map((_, i) => (
        <img key={i} className={s.image} src="https://picsum.photos/300/200" />
      ))}
    </div>
  );
};
