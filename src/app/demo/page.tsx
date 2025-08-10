'use client';

import { useEffect, useState } from 'react';
import Papa from 'papaparse';

type Row = Record<string, string>;

export default function DemoPage() {
  const [rows, setRows] = useState<Row[]>([]);

  useEffect(() => {
    fetch('/demo.csv')
      .then((res) => res.text())
      .then((text) => {
        const parsed = Papa.parse<Row>(text, { header: true });
        setRows(parsed.data.filter((row) => Object.keys(row).length > 1));
      });
  }, []);

  if (!rows.length) {
    return <p>Loading demo data...</p>;
  }

  const headers = Object.keys(rows[0]);

  return (
    <div className="overflow-auto">
      <table className="min-w-full text-sm text-left">
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h} className="px-2 py-1 border-b">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="odd:bg-slate-50">
              {headers.map((h) => (
                <td key={h} className="px-2 py-1 border-b">{row[h]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
