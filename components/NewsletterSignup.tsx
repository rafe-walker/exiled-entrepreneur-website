'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/PLACEHOLDER', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, type: 'newsletter' }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Thanks for subscribing! Check your email for confirmation.');
        setEmail('');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Failed to subscribe. Please try again.');
    }
  };

  return (
    <div className="bg-[#2a2622] rounded-lg p-8 max-w-md mx-auto">
      <h3 className="text-2xl font-bold text-[#f5f0e8] mb-2">
        Stay Updated
      </h3>
      <p className="text-[#a89a8a] mb-6">
        Get the latest insights on building an empire, AI automation, and entrepreneurship.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#d4a853]" size={20} />
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full pl-10 pr-4 py-3 bg-[#0a0a0f] border border-[#d4a853] rounded-lg text-[#f5f0e8] placeholder-[#a89a8a] focus:outline-none focus:border-[#e5c472] transition-colors"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-3 bg-[#d4a853] text-[#0a0a0f] font-semibold rounded-lg hover:bg-[#e5c472] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>

        {message && (
          <p
            className={`text-sm ${
              status === 'success'
                ? 'text-green-400'
                : status === 'error'
                  ? 'text-red-400'
                  : ''
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
