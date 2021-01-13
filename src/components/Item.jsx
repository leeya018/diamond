import React from "react";
import "../styles/item.css";
export default function Item({ index, item }) {
  return (
    <tr key={index}>
      {Object.entries(item).map((t, k) => {
        if (t[0] === "CertificateLink" || t[0] === "ImageLink") {
          return (
            <td key={k}>{t[1] ? <img src={t[1]} alt="" /> : <span>-</span>}</td>
          );
        }
        if (t[0] === "VideoLink") {
          return (
            <td key={k}>
              {t[1] ? (
                <a target="_blank" href={t[1]}>
                  open link
                </a>
              ) : (
                <span>-</span>
              )}
            </td>
          );
        }

        return <td key={k}>{t[1]}</td>;
      })}
    </tr>
  );
}
