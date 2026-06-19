import React, { useState, useEffect } from 'react';

const DeleteAccount: React.FC = () => {
  const [step, setStep] = useState<'method' | 'input' | 'otp' | 'confirm' | 'success'>('method');
  const [method, setMethod] = useState<'mobile' | 'email' | 'google' | 'facebook' | null>(null);
  const [input, setInput] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleMethodSelect = (selectedMethod: 'mobile' | 'email' | 'google' | 'facebook') => {
    setMethod(selectedMethod);
    if (selectedMethod === 'google' || selectedMethod === 'facebook') {
      // Skip OTP for social auth
      setStep('confirm');
    } else {
      setStep('input');
    }
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input) {
      // Mock: Send OTP
      setOtpSent(true);
      setCountdown(60);
      setStep('otp');
    }
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock: Verify OTP (always succeeds in mock)
    if (otp.length === 6) {
      setStep('confirm');
    }
  };

  const handleResendOtp = () => {
    setOtpSent(true);
    setCountdown(60);
    setOtp('');
  };

  const handleConfirmDelete = () => {
    // Mock: Delete account
    setStep('success');
  };

  const handleCancel = () => {
    setStep('method');
    setMethod(null);
    setInput('');
    setOtp('');
    setOtpSent(false);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background-dark relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Delete Your Account
          </h1>
          <p className="text-gray-400">
            Request to permanently delete your 16Arena account and associated data
          </p>
        </div>

        <div className="bg-surface-dark border border-white/5 p-8 md:p-12 rounded-2xl shadow-xl">
          {/* Step 1: Select Method */}
          {step === 'method' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">How would you like to verify your account?</h2>
                <p className="text-gray-400 mb-6">Select the method you used to sign up for 16Arena</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => handleMethodSelect('mobile')}
                  className="p-6 bg-background-dark/50 border border-white/10 rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 text-left group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      <span className="material-symbols-outlined">phone</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">Mobile Number</h3>
                      <p className="text-sm text-gray-400">Verify with OTP</p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => handleMethodSelect('email')}
                  className="p-6 bg-background-dark/50 border border-white/10 rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 text-left group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">Email Address</h3>
                      <p className="text-sm text-gray-400">Verify with OTP</p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => handleMethodSelect('google')}
                  className="p-6 bg-background-dark/50 border border-white/10 rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 text-left group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      <span className="material-symbols-outlined">account_circle</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">Google Account</h3>
                      <p className="text-sm text-gray-400">Sign in with Google</p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => handleMethodSelect('facebook')}
                  className="p-6 bg-background-dark/50 border border-white/10 rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 text-left group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      <span className="material-symbols-outlined">person</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">Facebook Account</h3>
                      <p className="text-sm text-gray-400">Sign in with Facebook</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Enter Mobile/Email */}
          {step === 'input' && (
            <div className="space-y-6">
              <div>
                <button
                  onClick={handleCancel}
                  className="inline-flex items-center text-gray-400 hover:text-white transition-colors gap-2 mb-4"
                >
                  <span className="material-symbols-outlined text-xl">arrow_back</span> Back
                </button>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Enter Your {method === 'mobile' ? 'Mobile Number' : 'Email Address'}
                </h2>
                <p className="text-gray-400">
                  We'll send a verification code to {method === 'mobile' ? 'your mobile number' : 'your email'}
                </p>
              </div>

              <form onSubmit={handleInputSubmit} className="space-y-4">
                <div>
                  <label htmlFor="input" className="block text-sm font-medium text-gray-400 mb-2">
                    {method === 'mobile' ? 'Mobile Number' : 'Email Address'}
                  </label>
                  <input
                    type={method === 'mobile' ? 'tel' : 'email'}
                    id="input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={method === 'mobile' ? '+91 12345 67890' : 'your@email.com'}
                    className="w-full bg-background-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="flex-1 px-6 py-3 border border-white/10 rounded-lg text-white hover:bg-white/5 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg transition-colors"
                  >
                    Send OTP
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Step 3: Enter OTP */}
          {step === 'otp' && (
            <div className="space-y-6">
              <div>
                <button
                  onClick={() => {
                    setStep('input');
                    setOtp('');
                    setOtpSent(false);
                  }}
                  className="inline-flex items-center text-gray-400 hover:text-white transition-colors gap-2 mb-4"
                >
                  <span className="material-symbols-outlined text-xl">arrow_back</span> Back
                </button>
                <h2 className="text-2xl font-bold text-white mb-2">Enter Verification Code</h2>
                <p className="text-gray-400 mb-1">
                  We've sent a 6-digit code to {method === 'mobile' ? input : input}
                </p>
                {countdown > 0 && (
                  <p className="text-sm text-gray-500">Resend code in {countdown}s</p>
                )}
              </div>

              <form onSubmit={handleOtpSubmit} className="space-y-4">
                <div>
                  <label htmlFor="otp" className="block text-sm font-medium text-gray-400 mb-2">
                    Verification Code
                  </label>
                  <input
                    type="text"
                    id="otp"
                    value={otp}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '').slice(0, 6);
                      setOtp(value);
                    }}
                    placeholder="000000"
                    className="w-full bg-background-dark border border-white/10 rounded-lg px-4 py-3 text-white text-center text-2xl tracking-widest focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    maxLength={6}
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setStep('input');
                      setOtp('');
                      setOtpSent(false);
                    }}
                    className="flex-1 px-6 py-3 border border-white/10 rounded-lg text-white hover:bg-white/5 transition-colors"
                  >
                    Cancel
                  </button>
                  {countdown === 0 && (
                    <button
                      type="button"
                      onClick={handleResendOtp}
                      className="flex-1 px-6 py-3 border border-primary/30 rounded-lg text-primary hover:bg-primary/10 transition-colors"
                    >
                      Resend Code
                    </button>
                  )}
                  <button
                    type="submit"
                    disabled={otp.length !== 6}
                    className="flex-1 px-6 py-3 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Verify
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Step 4: Confirm Deletion */}
          {step === 'confirm' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Confirm Account Deletion</h2>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-red-500">warning</span>
                    <div>
                      <h3 className="text-red-400 font-bold mb-2">This action cannot be undone</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Once you delete your account, all of your data will be permanently removed. This includes:
                      </p>
                      <ul className="list-disc list-inside text-gray-300 text-sm mt-2 space-y-1">
                        <li>Your profile and account information</li>
                        <li>Tournament history and achievements</li>
                        <li>Virtual currency and rewards</li>
                        <li>Game statistics and progress</li>
                        <li>All associated data and preferences</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mb-6">
                  <h3 className="text-primary font-bold mb-2">Deletion Timeline</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Your account will be scheduled for deletion and will be permanently removed within <strong className="text-white">15 days</strong>. 
                    During this period, if you access your account again, the deletion will be processed immediately.
                  </p>
                </div>

                <div className="bg-background-dark/50 border border-white/10 rounded-lg p-4">
                  <h3 className="text-white font-bold mb-2">Data Retention</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Some data may be retained for legal or regulatory purposes as required by law, but will not be used for any other purpose.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleCancel}
                  className="flex-1 px-6 py-3 border border-white/10 rounded-lg text-white hover:bg-white/5 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmDelete}
                  className="flex-1 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors"
                >
                  Delete My Account
                </button>
              </div>
            </div>
          )}

          {/* Step 5: Success */}
          {step === 'success' && (
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-red-500 text-4xl">check_circle</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Account Deletion Requested</h2>
                <p className="text-gray-400 mb-6">
                  Your account deletion request has been received and will be processed within 15 days.
                </p>
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 text-left">
                  <h3 className="text-primary font-bold mb-3">What happens next?</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Your account will be deactivated immediately</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>All data will be permanently deleted within 15 days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>If you log in again during this period, deletion will occur immediately</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>You will receive a confirmation email once deletion is complete</span>
                    </li>
                  </ul>
                </div>
              </div>
              <a
                href="#"
                className="inline-block px-6 py-3 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg transition-colors"
              >
                Return to Home
              </a>
            </div>
          )}
        </div>

        {/* Information Section */}
        <div className="mt-8 bg-surface-dark/50 border border-white/5 p-6 rounded-xl">
          <h3 className="text-white font-bold mb-3">About Account Deletion</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            <strong className="text-white">16Arena</strong>, operated by <strong className="text-white">16Arena Labs Private Limited</strong>, 
            respects your right to delete your account and personal data. This process is designed to be secure and verifiable.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            If you have any questions or concerns about account deletion, please contact us at{' '}
            <a href="mailto:support@16arena.com" className="text-primary hover:underline">support@16arena.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
