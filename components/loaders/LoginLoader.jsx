export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <aside className="w-full max-w-6xl bg-white rounded-2xl overflow-hidden shadow-xl flex">
        {/* Left side - Illustration */}
        <section className="hidden md:block w-1/2 relative">
          <div className="h-full">
            <div className="w-full h-full bg-slate-100 animate-pulse"></div>
          </div>
        </section>

        {/* Right side - Form */}
        <section className="w-screen h-screen md:w-1/2 p-8 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <div className="mb-8 text-center">
              <div className="flex gap-2 justify-center items-center mb-2">
                <span
                  src="/images/logo.png"
                  className="mr-1 w-7.5 h-7.5 bg-accent animate-pulse rounded-full"
                  alt="Ecorise Global Initiative Logo"
                ></span>
                <span className="text-lime-500 w-80 h-8 text-lg bg-accent animate-pulse rounded-lg"></span>
              </div>

              <h1 className="text-2xl font-bold text-gray-800 mt-6 mb-8">
                Login Panel
              </h1>
            </div>

            <div className="space-y-4">
              <div className="w-full">
                <label className="text-sm text-black">Email</label>
                <div
                  className="w-full h-10 px-4 py-2 rounded-xl 
		bg-accent animate-pulse text-gray-900 text-sm"
                ></div>
              </div>

              <div className="w-full">
                <label className="text-sm text-black">Password</label>
                <div
                  className="w-full h-10 px-4 py-2 rounded-xl 
		bg-accent animate-pulse text-gray-900 text-sm"
                ></div>
              </div>
              <br />

              {/* SUBMIT BUTTON */}
              <div
                className="w-full h-10 px-4 py-2 rounded-xl 
		bg-accent animate-pulse text-gray-900 text-sm"
              ></div>
            </div>

            <div className="mt-8 text-center text-sm text-gray-500 space-y-4">
              <div className="w-64 h-5 bg-slate-100 animate-pulse mx-auto rounded-sm"></div>
              <div className="w-52 h-5 bg-slate-100 animate-pulse mx-auto rounded-sm"></div>
            </div>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500 text-sm">or</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Register Link */}
            <div className="text-center space-y-3">
              <div className="w-36 h-5 bg-slate-100 animate-pulse mx-auto rounded-sm"></div>
            </div>

            {/* Security Badge */}
            <div className="mt-6 flex justify-center items-center space-x-3 text-gray-500 text-xs mx-auto">
              <div className="w-7 h-7 rounded-full bg-slate-100 animate-pulse"></div>
              <div className="w-56 h-4 rounded-full bg-slate-100 animate-pulse"></div>
            </div>
          </div>
        </section>
      </aside>

      {/* {notification && <Notification notification={notification} />} */}
    </div>
  );
}
