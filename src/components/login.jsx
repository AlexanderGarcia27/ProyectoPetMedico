import logo1 from "../assets/logo1.jpg";

export default function Login() {
  return (
    <div className="bg-white flex min-h-full flex-1 items-center justify-center px-6 py-12 lg:px-8 shadow-md shadow-gray-400">
      <div className="flex w-full max-w-4xl">
        <div className="w-full sm:w-1/2 flex items-center justify-center border-l-4 border-black pl-4">
          <img
            src={logo1}
            alt="Imagen"
            className="max-w-md w-full h-auto object-contain"
          />
        </div>
        <div className="w-full sm:w-1/2 flex flex-col justify-center px-6 py-12 lg:px-8 ml-4 relative">
          <div className="absolute top-4 right-4">
            <span className="text-lg font-semibold text-gray-900">PetMedico</span>
          </div>
          <div className="bg-white mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="text"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Ingrese su usuario
                </label>

                <div className="mt-2">
                  <input
                    id="text"
                    name="text"
                    type="text"
                    required
                    autoComplete="text"
                    className="block w-full border-b-2 border-gray-300 bg-white py-1.5 text-gray-900 focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:ring-inset transition-all duration-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Ingrese su contraseña
                </label>

                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full border-b-2 border-gray-300 bg-white py-1.5 text-gray-900 focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:ring-inset transition-all duration-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center bg-gray-500 text-white hover:bg-black hover:text-white px-6 py-2 text-sm transition-all duration-300 rounded-3xl"
                >
                  Log in
                </button>
                <br />
                <div className="text-sm">
                  <a href="#" className="font-semibold text-black hover:text-black">
                    Sign in
                  </a>
                </div>
              </div>
            </form>
            <br />
            <div className="text-sm">
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
