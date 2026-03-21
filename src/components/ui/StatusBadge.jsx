import { cn } from '../../utils/classNames';

export default function StatusBadge({ status }) {
  const styleMap = {
    Confirmed: 'success',
    Pending: 'warning',
    Cancelled: 'danger',
    Completed: 'info',
  };

  return <span className={cn('badge', `badge-${styleMap[status] || 'neutral'}`)}>{status}</span>;
}
