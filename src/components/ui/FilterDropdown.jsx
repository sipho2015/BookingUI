export default function FilterDropdown({ label, value, onChange, options }) {
  return (
    <label className="form-select">
      <span>{label}</span>
      <div className="select-shell">
        <select value={value} onChange={(event) => onChange(event.target.value)}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span className="select-caret" aria-hidden="true" />
      </div>
    </label>
  );
}
