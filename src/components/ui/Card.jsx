export default function Card({ title, description, image, children }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      {image && (
        <img src={image} alt={title} width="50%" className="mb-4 mx-auto" />
      )}
      {children}
    </div>
  );
}
