function Card({ image, title, description }) {
  return (
    <article className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-heading">{title}</h3>
        <p className="card-paragraph">{description}</p>
      </div>
    </article>
  );
}

export default Card