import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => setIsLoading(false), 2000);
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-50 py-12">
            <div className="max-w-md w-full mx-4">
                <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 transition-all duration-300 hover:shadow-3xl">
                    {/* Header */}
                    <div className="text-center mb-8 animate-fade-in-up">
                        <h1 className="text-3xl font-bold text-gray-900 mb-3">Buat Akun Baru</h1>
                        <p className="text-gray-600 leading-relaxed">
                            Bergabunglah dengan kami untuk mendukung UMKM lokal Indonesia
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Input */}
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Nama Lengkap
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <img className="w-5 h-5 text-gray-400" src="/user.svg" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Masukkan nama lengkap kamu"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#730700] focus:border-transparent transition-all duration-300 outline-none"
                                    required
                                />
                            </div>

                        {/* Email Input */}
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <img className="w-5 h-5 text-gray-400" src="/mail-brown.svg" />
                                </div>
                                <input
                                    type="email"
                                    placeholder="Masukkan email kamu"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#730700] focus:border-transparent transition-all duration-300 outline-none"
                                    required
                                />
                            </div>

                        {/* Password Input */}
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <img className="w-5 h-5 text-gray-400" src="/key.svg" />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Masukkan password kamu"
                                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#730700] focus:border-transparent transition-all duration-300 outline-none"
                                    required
                                />
                                <button 
                                    type="button" 
                                    onClick={() => setShowPassword(!showPassword)} 
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-300"
                                >
                                    {showPassword ? (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                        </svg>
                                    )}
                                </button>
                            </div>

                        {/* Confirm Password Input */}
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Konfirmasi Password
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <img className="w-5 h-5 text-gray-400" src="/key.svg" />
                                </div>
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Masukkan konfirmasi password kamu"
                                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#730700] focus:border-transparent transition-all duration-300 outline-none"
                                    required
                                />
                                <button 
                                    type="button" 
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-300"
                                >
                                    {showConfirmPassword ? (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                        </svg>
                                    )}
                                </button>
                            </div>

                        {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-[#730700] hover:bg-[#5a0500] text-white font-semibold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                            >
                                {isLoading ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Membuat Akun...
                                    </>
                                ) : (
                                    "Daftar"
                                )}
                            </button>
                    </form>

                    <div className="my-8">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">atau lanjutkan dengan</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Login */}
                    <div className="grid grid-cols-3 gap-4">
                        {[
                            { name: 'Google', icon: '/google.svg', bg: 'bg-red-500 hover:bg-red-800' },
                            { name: 'Apple', icon: '/apple.svg', bg: 'bg-gray-500 hover:bg-gray-800' },
                            { name: 'Facebook', icon: '/facebook-solid.svg', bg: 'bg-blue-500 hover:bg-blue-800' }
                        ].map((social, index) => (
                            <button
                                key={social.name}
                                type="button"
                                className={`${social.bg} p-3 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-lg flex items-center justify-center`}
                                style={{ animationDelay: `${index * 100 + 1200}ms` }}
                            >
                                <img className="w-6 h-6" src={social.icon} alt={social.name} />
                            </button>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <p className="text-gray-600">
                            Sudah punya akun?{' '}
                            <Link to="/login" className="font-semibold text-[#730700] hover:text-[#5a0500] transition-colors duration-300">
                                Masuk sekarang!
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;