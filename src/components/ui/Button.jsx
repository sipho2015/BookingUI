import { cn } from '../../utils/classNames';

export default function Button({ variant = 'primary', size = 'md', className, ...props }) {
  return (
    <button
      className={cn('btn', `btn-${variant}`, `btn-${size}`, className)}
      {...props}
    />
  );
}
