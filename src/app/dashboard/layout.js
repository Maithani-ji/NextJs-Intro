// app/dashboard/layout.js
export default function DashboardLayout({ children }) {
    return (
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-200 p-4">
          <h2 className="text-lg font-bold mb-4">📊 Dashboard Sidebar</h2>
          <ul className="space-y-2">
            <li><a href="/dashboard">🏠 Home</a></li>
            <li><a href="/dashboard/settings">⚙️ Settings</a></li>
          </ul>
        </aside>
  
        {/* Page Content */}
        <section className="flex-1 p-6 bg-gray-50">
          {children}
        </section>
      </div>
    )
  }
  