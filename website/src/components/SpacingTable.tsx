import React from "react";
import egao from "../css/egao.module.css";

interface SpacingClass {
  className: string;
  multiplier: number;
}

function parseSpacingClasses(): SpacingClass[] {
  const rx = /space-(n-)?([\d-]+)/;

  const spacingClasses: SpacingClass[] = Object.entries(egao)
    .map(([className, _value]) => {
      const match = className.match(rx);
      if (match) {
        const negative = match[1] === "n-";
        const multiplier = parseFloat(match[2].replace("-", "."));
        return { className, multiplier: negative ? -multiplier : multiplier };
      }
      return null;
    })
    .filter((item): item is SpacingClass => item !== null);

  return spacingClasses.sort((a, b) => b.multiplier - a.multiplier);
}

export function SpacingTable() {
  const spacingClasses = parseSpacingClasses();
  if (spacingClasses.length == 0) {
    return <div>No spacing classes found.</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Class Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {spacingClasses.map((spacingClass, index) => (
          <tr key={index}>
            <td>
              <code>{spacingClass.className}</code>
            </td>
            <td>
              Adds horizontal space equal to{" "}
              {
                <span>
                  <code>--base-space * {spacingClass.multiplier}</code>
                </span>
              }
              .
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
