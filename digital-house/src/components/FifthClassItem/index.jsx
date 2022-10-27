import "./style.scss";

export function FifthClassItem({ image, imageAlt, title, description }) {
	return (
		<li>
			<img src={image} alt={imageAlt} />
			<h1>{title}</h1>
			<p>{description}</p>
		</li>
  	);
}
