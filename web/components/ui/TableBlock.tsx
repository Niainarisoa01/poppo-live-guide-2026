import React from 'react';

interface TableBlockProps {
  headers: string[];
  rows: string[][];
}

export default function TableBlock({ headers, rows }: TableBlockProps) {
  return (
    <div className="table-wrapper">
      <table className="table-styled">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td key={ci} dangerouslySetInnerHTML={{ __html: cell }} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
