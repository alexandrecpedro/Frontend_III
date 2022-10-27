import "./style.scss";

export function FifthClassItem({ key, image, imageAlt, title, description }) {
	return (
		<li key={key}>
			<img src={image} alt={imageAlt} />
			<h1>{title}</h1>
			<p>{description}</p>
		</li>
  	);
}
