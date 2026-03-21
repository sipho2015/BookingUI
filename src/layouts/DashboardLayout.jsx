import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import AdminTopbar from '../components/AdminTopbar';

export default function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-content">
        <AdminTopbar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
