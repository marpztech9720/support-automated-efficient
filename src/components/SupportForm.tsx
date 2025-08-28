import React, { useState } from 'react';

interface SupportFormProps {
  onSubmit: (data: any) => void;
}

const SupportForm: React.FC<SupportFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    description: '',
    priority: 'medium',
    files: []
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl">
      <h2 className="text-2xl font-bold text-white mb-6">Submit Support Request</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-white/90 text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 backdrop-blur-md bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
              required
            />
          </div>
          
          <div>
            <label className="block text-white/90 text-sm font-medium mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 backdrop-blur-md bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="your@email.com"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-white/90 text-sm font-medium mb-2">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full px-4 py-3 backdrop-blur-md bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Brief description of your issue"
            required
          />
        </div>

        <div>
          <label className="block text-white/90 text-sm font-medium mb-2">Priority Level</label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleInputChange}
            className="w-full px-4 py-3 backdrop-blur-md bg-white/10 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="low" className="bg-gray-800">Low Priority</option>
            <option value="medium" className="bg-gray-800">Medium Priority</option>
            <option value="high" className="bg-gray-800">High Priority</option>
            <option value="urgent" className="bg-gray-800">Urgent</option>
          </select>
        </div>

        <div>
          <label className="block text-white/90 text-sm font-medium mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={5}
            className="w-full px-4 py-3 backdrop-blur-md bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            placeholder="Please describe your issue in detail..."
            required
          />
        </div>

        <div>
          <label className="block text-white/90 text-sm font-medium mb-2">Attach Files (Optional)</label>
          <div className="border-2 border-dashed border-white/30 rounded-xl p-6 text-center backdrop-blur-md bg-white/5">
            <input
              type="file"
              multiple
              accept="image/*,video/*,.pdf,.doc,.docx"
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <div className="text-white/70">
                <svg className="mx-auto h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p>Click to upload files or drag and drop</p>
                <p className="text-sm text-white/50">Images, videos, documents (max 10MB each)</p>
              </div>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Submit Support Request
        </button>
      </form>
    </div>
  );
};

export default SupportForm;