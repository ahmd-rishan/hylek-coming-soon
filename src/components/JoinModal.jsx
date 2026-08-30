import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { Logo } from './Logo';

export const JoinModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Reset state when modal opens or closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setEmail('');
        setIsSubmitting(false);
        setIsSuccess(false);
        setErrorMessage('');
      }, 300);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const validateEmail = (val) => {
    const trimmed = val.trim();
    if (!trimmed) return 'Email address is required.';
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(trimmed)) {
      return 'Please enter a valid email address.';
    }
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setErrorMessage('');
    const validationError = validateEmail(email);

    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    setIsSubmitting(true);

    // Simulate submission state transition
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-md bg-[#0C0F0D]/95 border border-white/15 rounded-2xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Light Glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#FFD21F]/15 blur-3xl rounded-full pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#FFD21F] cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          /* SUCCESS STATE */
          <div className="text-center py-6 space-y-4 animate-fade-in">
            <div className="w-12 h-12 rounded-full bg-[#FFD21F]/15 border border-[#FFD21F] flex items-center justify-center mx-auto text-[#FFD21F]">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div className="space-y-1.5">
              <h3 id="modal-title" className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                You’re on the list.
              </h3>
              <p className="font-body text-xs sm:text-sm text-white/70 font-light max-w-xs mx-auto">
                We’ll let you know when HYLEK is ready.
              </p>
            </div>

            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#FFD21F] text-black rounded-lg transition-all duration-200 hover:bg-[#ffe05c] hover:shadow-[0_0_20px_rgba(255,210,31,0.3)] active:scale-95 cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          /* FORM STATE */
          <div className="space-y-5">
            <div className="space-y-2">
              <Logo className="h-6" />
              <h2 id="modal-title" className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight pt-2">
                Join Our Journey
              </h2>
              <p className="font-body text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                Be among the first to experience what HYLEK is crafting. Get priority access when we go live.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 pt-1" noValidate>
              <div className="space-y-1.5">
                <label htmlFor="early-access-email" className="sr-only">
                  Email Address
                </label>
                <input
                  id="early-access-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errorMessage) setErrorMessage('');
                  }}
                  placeholder="Enter your email address..."
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#FFD21F] focus:ring-1 focus:ring-[#FFD21F] transition-all disabled:opacity-50"
                  aria-invalid={!!errorMessage}
                />

                {errorMessage && (
                  <div
                    className="flex items-center gap-1.5 text-xs text-red-400 pt-1 animate-fade-in"
                    role="alert"
                    aria-live="polite"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0 text-red-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-5 bg-[#FFD21F] text-black font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 hover:bg-[#ffe05c] hover:shadow-[0_0_25px_rgba(255,210,31,0.4)] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer active:scale-[0.99]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-black" />
                    <span>REQUESTING ACCESS…</span>
                  </>
                ) : (
                  <span>REQUEST EARLY ACCESS →</span>
                )}
              </button>
            </form>

            <p className="text-[10px] text-white/40 text-center tracking-wide font-light">
              Strictly no spam. Unsubscribe anytime.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
