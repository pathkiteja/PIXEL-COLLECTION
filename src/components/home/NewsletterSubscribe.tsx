'use client';

import { useState } from 'react';

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubscribed(true);
      setEmail('');
      setLoading(false);
      
      // Reset the success message after a few seconds
      setTimeout(() => {
        setSubscribed(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section className="py-20 bg-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-pixel">
            JOIN THE PIXEL REVOLUTION
          </h2>
          <p className="text-lg mb-8 text-purple-200">
            Subscribe to our newsletter for exclusive pixel art drops, special offers, and behind-the-scenes content from our artists.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 py-3 rounded-lg border-2 border-purple-400 focus:border-purple-300 focus:outline-none bg-purple-800 text-white placeholder-purple-300"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className={`px-6 py-3 rounded-lg font-bold font-pixel transition-all ${
                  loading
                    ? 'bg-purple-700 cursor-not-allowed'
                    : 'bg-purple-500 hover:bg-purple-400 hover:scale-105'
                }`}
              >
                {loading ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
              </button>
            </div>
            
            {subscribed && (
              <p className="mt-4 text-green-300 font-pixel">
                🎮 You're in! Thank you for subscribing!
              </p>
            )}
            
            <p className="mt-4 text-xs text-purple-300">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
          
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="font-pixel">Secure Checkout</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-pixel">Weekly Updates</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a4 4 0 00-4-4H5.45a4 4 0 00-3.91 3.26L0 10.75l11.67 11.67C12.7 23.46 14.16 24 15.5 24c1.55 0 3-.62 4.06-1.68l.57-.56A4 4 0 0021 18.5V12a4 4 0 00-4-4h-1.7" />
              </svg>
              <span className="font-pixel">Exclusive Deals</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}