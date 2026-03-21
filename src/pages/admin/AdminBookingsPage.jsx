import { useMemo, useState } from 'react';
import Table from '../../components/ui/Table';
import StatusBadge from '../../components/ui/StatusBadge';
import SearchBar from '../../components/ui/SearchBar';
import FilterDropdown from '../../components/ui/FilterDropdown';
import Pagination from '../../components/ui/Pagination';
import { bookings } from '../../data/bookings';

const statusOptions = ['All', 'Confirmed', 'Pending', 'Cancelled', 'Completed'];

export default function AdminBookingsPage() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('All');
  const [date, setDate] = useState('');

  const filtered = useMemo(() => {
    return bookings.filter((booking) => {
      const matchesQuery = `${booking.id} ${booking.service} ${booking.staff}`
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesStatus = status === 'All' || booking.status === status;
      const matchesDate = !date || booking.date === date;
      return matchesQuery && matchesStatus && matchesDate;
    });
  }, [query, status, date]);

  const summary = useMemo(() => {
    const confirmed = filtered.filter((booking) => booking.status === 'Confirmed').length;
    const pending = filtered.filter((booking) => booking.status === 'Pending').length;
    const cancelled = filtered.filter((booking) => booking.status === 'Cancelled').length;
    const completed = filtered.filter((booking) => booking.status === 'Completed').length;

    return { confirmed, pending, cancelled, completed };
  }, [filtered]);

  const rows = filtered.map((booking) => ({
    id: booking.id,
    cells: [
      booking.id,
      booking.service,
      booking.staff,
      booking.date,
      booking.time,
      <StatusBadge key={booking.id} status={booking.status} />,
      <div className="row-actions" key={`${booking.id}-actions`}>
        <button className="row-action-btn">View</button>
        <button className="row-action-btn">Reschedule</button>
        <button className="row-action-btn danger">Cancel</button>
      </div>,
    ],
  }));

  return (
    <div className="admin-page admin-bookings-wow">
      <div className="card admin-bookings-summary">
        <div className="admin-bookings-summary-item">
          <span>Filtered Bookings</span>
          <strong>{filtered.length}</strong>
        </div>
        <div className="admin-bookings-summary-item">
          <span>Confirmed</span>
          <strong>{summary.confirmed}</strong>
        </div>
        <div className="admin-bookings-summary-item">
          <span>Pending</span>
          <strong>{summary.pending}</strong>
        </div>
        <div className="admin-bookings-summary-item">
          <span>Completed</span>
          <strong>{summary.completed}</strong>
        </div>
        <div className="admin-bookings-summary-item">
          <span>Cancelled</span>
          <strong>{summary.cancelled}</strong>
        </div>
      </div>

      <div className="card admin-bookings-toolbar">
        <div className="admin-bookings-toolbar-head">
          <div>
            <p className="card-eyebrow">Booking Control</p>
            <h3>Manage bookings with precision</h3>
          </div>
          <span className="results-chip">{filtered.length} visible</span>
        </div>

        <div className="admin-toolbar">
          <SearchBar value={query} onChange={setQuery} placeholder="Search booking, service, or staff" />
          <FilterDropdown label="Status" value={status} onChange={setStatus} options={statusOptions} />
          <label className="form-input">
            <span>Date</span>
            <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
          </label>
        </div>
      </div>

      <div className="card admin-bookings-table-card">
        <div className="admin-panel-head">
          <h3>Bookings list</h3>
        </div>
        <Table
          columns={['Booking', 'Service', 'Staff', 'Date', 'Time', 'Status', 'Actions']}
          rows={rows}
        />
        <Pagination current={1} total={Math.max(1, Math.ceil(filtered.length / 5))} />
      </div>
    </div>
  );
}
