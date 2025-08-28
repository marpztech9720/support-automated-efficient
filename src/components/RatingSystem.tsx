import React, { useState } from 'react';

interface RatingSystemProps {
  ticketId: string;
  onSubmit: (rating: any) => void;
}

const RatingSystem: React.FC<RatingSystemProps> = ({ ticketId, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleStarClick = (starRating: number) => {
    setRating(starRating);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ticketId,
      rating,
      feedback,
      timestamp: new Date().toISOString()
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl text-center max-w-md">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Thank You!</h2>
          <p className="text-white/80 mb-6">
            Your feedback has been submitted successfully. We appreciate your time and will use your input to improve our service.
          </p>
          <div className="text-white/60 text-sm">
            Ticket ID: {ticketId}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Rate Your Experience</h2>
          <p className="text-white/80">How was your support experience?</p>
          <div className="text-white/60 text-sm mt-2">Ticket: {ticketId}</div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-center">
            <label className="block text-white/90 text-sm font-medium mb-4">Overall Rating</label>
            <div className="flex justify-center space-x-2 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleStarClick(star)}
                  className="focus:outline-none transition-all duration-200 hover:scale-110"
                >
                  <svg
                    className={`w-8 h-8 ${
                      star <= rating ? 'text-yellow-400 fill-current' : 'text-white/30'
                    }`}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </button>
              ))}
            </div>
            <div className="text-white/60 text-sm">
              {rating === 0 && 'Click to rate'}
              {rating === 1 && 'Poor'}
              {rating === 2 && 'Fair'}
              {rating === 3 && 'Good'}
              {rating === 4 && 'Very Good'}
              {rating === 5 && 'Excellent'}
            </div>
          </div>

          <div>
            <label className="block text-white/90 text-sm font-medium mb-2">
              Additional Feedback (Optional)
            </label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 backdrop-blur-md bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              placeholder="Tell us more about your experience..."
            />
          </div>

          <button
            type="submit"
            disabled={rating === 0}
            className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit Rating
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-white/60 text-xs">
            Your feedback is anonymous and helps us improve our service quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RatingSystem;