import React from "react";

const AdminLogin = () => {
    return (
        <div className=" h-screen flex flex-col  justify-center items-center ">
            <h1 className="text-white/80 font-bold text-4xl tracking-wide text-center ">Sign in to Account</h1>
            <div className="bg-white/80 h-[3px] w-[70px] rounded-xl my-5"></div>

            <div className="flex justify-around w-fit text-white/80">
                <div className="hover:cursor-pointer hover:border-white/60 rounded-full border-white/30 border-2 p-3 mr-4 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                    </svg>
                </div>
                <div className="hover:cursor-pointer hover:border-white/60 rounded-full border-white/30 border-2 p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                </div>
                <div className=" hover:cursor-pointer hover:border-white/60 rounded-full border-white/30 border-2 p-3 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                </div>
            </div>

            <div className="text-white/60 my-5 text-center">or use your email account</div>

            <form className="flex flex-col w-full  items-center ">
                <div className="flex flex-col  justify-center  max-w-[400px] w-[80%] " >
                    <label for="userMail" className="text-white/80 text-lg tracking-wide mb-1 ">
                        Email
                    </label>
                    <input id="userMail" type="email" placeholder="Email"className="transition-all placeholder:text-white/50 text-white/90 px-5 py-1 w-full  text-lg bg-transparent focus:outline-none focus:border-white/90 outline-white rounded-full border-2 border-white/50" />
                </div>

                <div className="flex flex-col  justify-center  max-w-[400px] w-[80%] mt-5" >
                    <label for="password" className="text-white/80 text-lg tracking-wide mb-1">
                        Password
                    </label>
                    <input id="password" type="password" placeholder="Password" className=" placeholder:text-white/50  text-white/90 px-5 py-2 w-full  text-lg bg-transparent focus:outline-none focus:border-white/90 outline-white rounded-full border-2 border-white/50"/>
                    <div className="my-4 flex flex-col sm:flex-row items-center justify-between ">
                        <div  className="flex items-center">
                            <input id="rememberMe" className="transition-all h-4 w-4 mr-1 rounded-sm outline-none border-none" type="checkbox" />
                            <label for="rememberMe" className="text-white/80 text-normal tracking-wide ">Remember Me</label>
                        </div>
                        <p className="text-white font-semibold hover:cursor-pointer hover:underline">Forgot Password?</p>
                    </div>
                    <button type="submit" className="transition-all font-bold  hover:bg-white/90 hover:text-black py-2 px-auto  flex justify-center items-center text-white/90 text-xl rounded-full border-2 border-white/50">Sign in</button>
                </div>
            </form>
        </div>
    )
}

export default AdminLogin;