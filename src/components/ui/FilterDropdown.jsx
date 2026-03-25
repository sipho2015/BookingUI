import { useId } from 'react';

export default function FilterDropdown({
  label,
  value,
  onChange,
  options,
  placeholder = '',
  placeholderDisabled = false,
}) {
  const selectId = useId();
  const mappedOptions = options.map((option) => (
    typeof option === 'string'
      ? { value: option, label: option }
      : { value: option.value, label: option.label ?? option.value }
  ));
  const selectedOption = mappedOptions.find((option) => option.value === value);

  return (
    <label className="form-select" htmlFor={selectId}>
      <span>{label}</span>
      <div className="select-shell">
        <select
          id={selectId}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          title={selectedOption?.label || ''}
          aria-label={label}
        >
          {placeholder ? (
            <option value="" disabled={placeholderDisabled}>
              {placeholder}
            </option>
          ) : null}
          {mappedOptions.map((option) => (
            <option key={`${option.value}`} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="select-caret" aria-hidden="true" />
      </div>
    </label>
  );
}
