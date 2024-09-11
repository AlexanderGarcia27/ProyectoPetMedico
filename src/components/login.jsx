import logo1 from "../assets/logo1.jpg";

export default function Login() {
  return (
    <div className="bg-white flex min-h-full flex-1 items-center justify-center px-6 py-12 lg:px-8 shadow-md shadow-gray-400">
      <div className="flex flex-col sm:flex-row w-full max-w-4xl">
        <div className="hidden sm:flex sm:w-1/2 justify-center items-center">
          <img
            src={logo1}
            alt="Imagen"
            className="w-full max-w-md object-contain"
          />
        </div>

        <div className="w-full sm:w-1/2 flex flex-col justify-center px-6 py-12 lg:px-8 relative">
          <div className="absolute top-4 right-4 sm:static">
            <span className="text-lg font-semibold text-gray-900">PetMedico</span>
          </div>

          <div className="sm:hidden flex justify-center">
            <img
              src={logo1}
              alt="Imagen"
              className="w-1/2 max-w-xs object-contain"
            />
          </div>

          <div className="bg-white mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">
              <div className="flex justify-center">
                <div className="w-full max-w-xs">
                  <label
                    htmlFor="text"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Usuario
                  </label>
                  <div className="mt-2">
                    <input
                      id="text"
                      name="text"
                      type="text"
                      required
                      autoComplete="text"
                      className="block w-full border-b-2 border-gray-300 bg-white py-1.5 text-gray-900 focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:ring-inset transition-border duration-700 ease-in-out placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-full max-w-xs">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Contraseña
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      autoComplete="current-password"
                      className="block w-full border-b-2 border-gray-300 bg-white py-1.5 text-gray-900 focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:ring-inset transition-border duration-700 ease-in-out placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-full max-w-xs">
                  <button
                    type="submit"
                    className="flex w-full justify-center bg-gray-500 text-white hover:bg-black hover:text-white px-6 py-2 text-sm transition-all duration-300 rounded-3xl"
                  >
                    Log in
                  </button>
                  <br />
                  <div className="text-sm text-center">
                    <a href="#" className="font-semibold text-black hover:text-black">
                      Sign in
                    </a>
                  </div>
                </div>
              </div>
            </form>
            <br />
            <div className="text-sm text-center">
              <a href="#" className="font-semibold text-black hover:text-black">
                Forgot password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
