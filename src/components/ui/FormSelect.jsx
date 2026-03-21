export default function FormSelect({ label, value, onChange, options }) {
  return (
    <label className="form-select">
      <span>{label}</span>
      <div className="select-shell">
        <select value={value} onChange={onChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="select-caret" aria-hidden="true" />
      </div>
    </label>
  );
}
