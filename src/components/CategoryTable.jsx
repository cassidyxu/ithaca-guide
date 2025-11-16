function CategoryTable({ columns, rows }) {
  if (!rows || rows.length === 0) {
    return (
      <p className="empty-note">
        Activities coming soon for this category. Check back later!
      </p>
    );
  }

  return (
    <div className="table-wrapper">
      <table className="category-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              {columns.map((col) => {
                const value = row[col.key];
                if (col.key === "link" && value) {
                  return (
                    <td key={col.key}>
                      <a
                        href={value}
                        target="_blank"
                        rel="noreferrer"
                        className="table-link"
                      >
                        Open
                      </a>
                    </td>
                  );
                }
                return <td key={col.key}>{value}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CategoryTable;
