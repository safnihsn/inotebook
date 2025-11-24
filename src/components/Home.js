import Notes from "./Notes";

const Home = ({ showAlert }) => {
  const isLoggedIn = localStorage.getItem("token");
  
  return (
    <>
      {isLoggedIn ? (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          <Notes showAlert={showAlert} />
        </div>
      ) : (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8 animate-fade-in-up">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl mb-6 border border-white border-opacity-20">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  Forget forgetting!
                </h1>
                <p className="text-xl md:text-2xl text-purple-200 mb-4">
                  Say hello to your digital brain — <span className="text-white font-semibold">iNoteBook</span>
                </p>
                <p className="text-lg md:text-xl text-purple-200 mb-2">
                  From midnight thoughts to grocery lists,
                </p>
                <p className="text-lg md:text-xl text-purple-200 mb-8">
                  we keep it all safe, neat, and ready whenever you need it.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-300">
                <a
                  href="/signup"
                  className="inline-flex items-center gap-2 bg-white text-indigo-900 font-semibold px-8 py-4 rounded-xl hover:bg-opacity-90 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  Get Started
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="/login"
                  className="inline-flex items-center gap-2 bg-white bg-opacity-10 backdrop-blur-lg text-white font-semibold px-8 py-4 rounded-xl border border-white border-opacity-30 hover:bg-opacity-20 transition-all duration-200 shadow-xl"
                >
                  Login
                </a>
              </div>

              {/* Feature highlights */}
              <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up animation-delay-600">
                <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-2xl border border-white border-opacity-20">
                  <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">Lightning Fast</h3>
                  <p className="text-purple-200 text-sm">Capture your thoughts instantly, no delays</p>
                </div>

                <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-2xl border border-white border-opacity-20">
                  <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">Secure & Private</h3>
                  <p className="text-purple-200 text-sm">Your notes are encrypted and safe</p>
                </div>

                <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-2xl border border-white border-opacity-20">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">Organized Tags</h3>
                  <p className="text-purple-200 text-sm">Keep everything sorted with smart tags</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;