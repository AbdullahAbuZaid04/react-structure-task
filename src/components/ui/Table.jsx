export default function Table({ columns, data, striped = false }) {
  return (
    <table className="min-w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          {columns.map((col) => (
            <th key={col.key} className="border border-gray-300 p-2 text-left">
              {col.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr
            key={index}
            className={striped && index % 2 === 0 ? "bg-gray-100" : ""}
          >
            {columns.map((col) => (
              <td key={col.key} className="border border-gray-300 p-2">
                {row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
