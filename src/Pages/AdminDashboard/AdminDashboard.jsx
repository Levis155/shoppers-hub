import "./AdminDashboard.css";

function AdminDashboard() {
  return (
    <div className="admin-dashboard-page">
      <div className="admin-body-title-cont">
        <p className="admin-body-title">dashboard</p>
      </div>

      <div className="dashboard-body">
        <div className="dashboard-card">
          <p className="dashboard-card-title">sales</p>
          <p className="dashboard-card-sub-stat">10 orders</p>
          <p className="dashboard-card-stat">ksh 100000</p>
        </div>

        <div className="dashboard-card">
          <p className="dashboard-card-title">customers</p>
          <p className="dashboard-card-sub-stat">ksh 10000 average value</p>
          <p className="dashboard-card-stat">10</p>
        </div>

        <div className="dashboard-card">
          <p className="dashboard-card-title">active products</p>
          <p className="dashboard-card-sub-stat">1 inactive</p>
          <p className="dashboard-card-stat">500</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;