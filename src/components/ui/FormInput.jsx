export default function FormInput({ label, type = 'text', placeholder, value, onChange, name }) {
  return (
    <label className="form-input">
      <span>{label}</span>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} name={name} />
    </label>
  );
}
