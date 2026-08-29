export default function Card({ title, description, image, children }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded mb-4"
        />
      )}
      {children}
    </div>
  );
}
