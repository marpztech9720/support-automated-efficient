import React, { useState } from 'react';

interface Ticket {
  id: string;
  name: string;
  email: string;
  subject: string;
  priority: string;
  status: string;
  agent?: string;
  createdAt: string;
}

interface AdminDashboardProps {
  isAuthenticated: boolean;
  onLogin: (password: string) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ isAuthenticated, onLogin }) => {
  const [password, setPassword] = useState('');
  const [tickets] = useState<Ticket[]>([
    {
      id: 'TK001',
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Login Issues',
      priority: 'high',
      status: 'open',
      createdAt: '2024-01-15 10:30'
    },
    {
      id: 'TK002',
      name: 'Jane Smith',
      email: 'jane@example.com',
      subject: 'Payment Problem',
      priority: 'urgent',
      status: 'assigned',
      agent: 'Agent Mike',
      createdAt: '2024-01-15 09:15'
    }
  ]);

  const [agents] = useState(['Agent Mike', 'Agent Sarah', 'Agent Tom']);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(password);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'text-red-400 bg-red-400/20';
      case 'high': return 'text-orange-400 bg-orange-400/20';
      case 'medium': return 'text-yellow-400 bg-yellow-400/20';
      case 'low': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'text-blue-400 bg-blue-400/20';
      case 'assigned': return 'text-purple-400 bg-purple-400/20';
      case 'resolved': return 'text-green-400 bg-green-400/20';
      case 'closed': return 'text-gray-400 bg-gray-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl w-full max-w-md">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-white/90 text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 backdrop-blur-md bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter admin password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl">
        <h2 className="text-2xl font-bold text-white mb-6">Support Tickets Dashboard</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="backdrop-blur-md bg-blue-500/20 border border-blue-400/30 rounded-xl p-4">
            <h3 className="text-blue-200 text-sm font-medium">Total Tickets</h3>
            <p className="text-2xl font-bold text-white">{tickets.length}</p>
          </div>
          <div className="backdrop-blur-md bg-orange-500/20 border border-orange-400/30 rounded-xl p-4">
            <h3 className="text-orange-200 text-sm font-medium">Open</h3>
            <p className="text-2xl font-bold text-white">{tickets.filter(t => t.status === 'open').length}</p>
          </div>
          <div className="backdrop-blur-md bg-purple-500/20 border border-purple-400/30 rounded-xl p-4">
            <h3 className="text-purple-200 text-sm font-medium">Assigned</h3>
            <p className="text-2xl font-bold text-white">{tickets.filter(t => t.status === 'assigned').length}</p>
          </div>
          <div className="backdrop-blur-md bg-green-500/20 border border-green-400/30 rounded-xl p-4">
            <h3 className="text-green-200 text-sm font-medium">Resolved</h3>
            <p className="text-2xl font-bold text-white">{tickets.filter(t => t.status === 'resolved').length}</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left text-white/90 font-medium py-3">Ticket ID</th>
                <th className="text-left text-white/90 font-medium py-3">Customer</th>
                <th className="text-left text-white/90 font-medium py-3">Subject</th>
                <th className="text-left text-white/90 font-medium py-3">Priority</th>
                <th className="text-left text-white/90 font-medium py-3">Status</th>
                <th className="text-left text-white/90 font-medium py-3">Agent</th>
                <th className="text-left text-white/90 font-medium py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="border-b border-white/10">
                  <td className="py-4 text-white font-mono">{ticket.id}</td>
                  <td className="py-4">
                    <div>
                      <div className="text-white font-medium">{ticket.name}</div>
                      <div className="text-white/60 text-sm">{ticket.email}</div>
                    </div>
                  </td>
                  <td className="py-4 text-white">{ticket.subject}</td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(ticket.priority)}`}>
                      {ticket.priority.toUpperCase()}
                    </span>
                  </td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                      {ticket.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="py-4 text-white">{ticket.agent || 'Unassigned'}</td>
                  <td className="py-4">
                    <select className="px-3 py-1 backdrop-blur-md bg-white/10 border border-white/30 rounded-lg text-white text-sm">
                      <option value="" className="bg-gray-800">Assign Agent</option>
                      {agents.map(agent => (
                        <option key={agent} value={agent} className="bg-gray-800">{agent}</option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;