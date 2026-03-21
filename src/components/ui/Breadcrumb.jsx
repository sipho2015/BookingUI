import { Link } from 'react-router-dom';

export default function Breadcrumb({ items }) {
  return (
    <div className="breadcrumb">
      {items.map((item, index) => (
        <span key={item.label}>
          {item.href ? <Link to={item.href}>{item.label}</Link> : item.label}
          {index < items.length - 1 ? <span className="breadcrumb-sep">/</span> : null}
        </span>
      ))}
    </div>
  );
}
