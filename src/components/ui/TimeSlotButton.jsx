import { cn } from '../../utils/classNames';

export default function TimeSlotButton({ label, selected, disabled, onClick }) {
  return (
    <button className={cn('slot-button', selected && 'slot-selected', disabled && 'slot-disabled')} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}
