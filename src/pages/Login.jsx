const Login = () => {
  return (
    <div className="flex items-center justify-center w-[100%] h-screen max-h-[auto]">
      {/* container-- */}
      <div className="rounded-md shadow-md px-[30px] py-[30px] bg-[#222831] w-[500px]">
        <h3 className="font-ternary text-[white] text-center text-[25px] mb-[30px]">
          Login
        </h3>
        {/* form-- */}
        <form>
          {/* inpubox */}
          <div className="my-[10px]">
            <label
              htmlFor="email"
              className="font-primary text-[white] mb-[5px] inline-block"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full rounded-md px-[20px] h-[45px] font-primary"
            />
          </div>
          {/* inpubox */}
          <div className="my-[10px]">
            <label
              htmlFor="password"
              className="font-primary text-[white] mb-[5px] inline-block"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full rounded-md px-[20px] h-[45px] font-primary"
            />
          </div>
          <button
            type="submit"
            className="text-center bg-[black] text-[white] font-primary h-[45px] px-[10px] rounded-md w-full my-[10px] hover:opacity-[.5] duration-300 transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
