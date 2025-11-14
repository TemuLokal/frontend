import { useState } from "react";

function Register() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-22 flex flex-col items-center">
            <form className="md:w-[50%] w-full" method="POST">
                <div className="text-center flex flex-col items-center justify-center gap-2">
                    <h1 className="font-bold text-3xl">Welcome back!</h1>
                    <p className="text-[#71717B]">Temukan produk dan layanan berkualitas dari UMKM terpercaya di seluruh Indonesia. Bersama kita tumbuh, bersama kita maju.</p>
                </div>
        
                <div className="pt-4 w-full">
                    <div className="w-full flex items-center bg-white rounded-[10px] shadow border border-[#E8E8EB] px-4 sm:px-5 py-3 sm:py-4 my-4 sm:gap-2">
                        <img className="w-5 h-5 sm:w-6 sm:h-6 text-[#B08B8B] mr-3" src="/mail-brown.svg" />
                        <input
                            type="text"
                            placeholder="Masukkan email kamu"
                            className="w-full bg-transparent outline-none text-sm sm:text-base md:text-lg"
                        />
                    </div>

                    <div className="w-full flex items-center bg-white rounded-[10px] shadow border border-[#E8E8EB] px-4 sm:px-5 py-3 sm:py-4 my-4 sm:gap-2">
                        <img className="w-5 h-5 sm:w-6 sm:h-6 text-[#B08B8B] mr-3" src="/key.svg" />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Masukkan password kamu"
                            className="w-full bg-transparent outline-none text-sm sm:text-base md:text-lg"
                        />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="focus:outline-none cursor-pointer">
                            {showPassword ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                                    viewBox="0 0 24 24" fill="none" stroke="#71717B" 
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                                    className="feather feather-eye">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                                    viewBox="0 0 24 24" fill="none" stroke="#71717B" 
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                                    className="feather feather-eye-off">
                                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                                    <line x1="1" y1="1" x2="23" y2="23"></line>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                <div className="text-right py-2">
                    <a href="#" className="font-semibold text-[#71717B]">Forgot Password?</a>
                </div>

                <div className="pt-4">
                    <button className="w-full font-bold text-center bg-[#730700] text-white outline-none text-sm sm:text-base md:text-lg px-4 sm:px-5 py-3 sm:py-4 rounded-[10px] shadow cursor-pointer" type="submit">Masuk</button>
                </div>

                <div className="flex flex-row justify-center items-center gap-2 pt-8">
                    <span className="w-full h-[1px] bg-[#E8E8EB]"></span>
                    <span className="w-full text-[#71717B] whitespace-nowrap">atau lanjutkan dengan</span>
                    <span className="w-full h-[1px] bg-[#E8E8EB]"></span>
                </div>

                <div className="flex flex-row justify-center items-center gap-6 pt-8">
                    <a href="#" className="bg-[#730700] px-4 py-4 rounded-full">
                        <img className="w-6 h-6 sm:w-7 sm:h-7 text-[#B08B8B]" src="/google.svg" />
                    </a>
                    <a href="#" className="bg-[#730700] px-4 py-4 rounded-full">
                        <img className="w-6 h-6 sm:w-7 sm:h-7 text-[#B08B8B]" src="/apple.svg" />
                    </a>
                    <a href="#" className="bg-[#730700] px-4 py-4 rounded-full">
                        <img className="w-6 h-6 sm:w-7 sm:h-7 text-[#B08B8B]" src="/facebook-solid.svg" />
                    </a>
                </div>

                <div className="text-center pt-8">
                    <p className="text-[#71717B]">Belum punya akun? <a href="/register" className="text-[#730700] font-semibold">Daftar sekarang!</a></p>
                </div>
            </form>
        </section>
    )
}

export default Register;