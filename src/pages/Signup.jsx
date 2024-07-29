import { useForm } from "react-hook-form";
import { useUserSignUpMutation } from "../redux/apiClient/userApi";
import { toast } from "sonner";

const Signup = () => {
  const [signUp] = useUserSignUpMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Signup form submit handler--
  const formSubmitHandler = handleSubmit(async (data) => {
    const file = data.avatar[0];
    console.log(file);

    const formData = new FormData();
    formData.set("username", data.username);
    formData.set("email", data.email);
    formData.set("password", data.password);

    const reader = new FileReader();
    reader.onload = async () => {
      if (reader.readyState === 2) {
        const base64String = reader.result;
        formData.set("avatar", base64String);
        try {
          await signUp(formData).unwrap();
          toast.success("Sign up successfull");
          reset({
            username: "",
            email: "",
            password: "",
            avatar: "",
          });
        } catch (err) {
          toast.error(err?.data?.message);
        }
      }
    };
    reader.readAsDataURL(file);
  });

  return (
    <div className="flex items-center justify-center w-[100%] h-screen max-h-[auto]">
      {/* container-- */}
      <div className="rounded-md shadow-md px-[30px] py-[30px] bg-[#222831] w-[500px]">
        <h3 className="font-ternary text-[white] text-center text-[25px] mb-[30px]">
          Signup
        </h3>
        {/* form-- */}
        <form onSubmit={formSubmitHandler}>
          {/* inputbox-- */}
          <div className="my-[10px]">
            <label
              htmlFor="username"
              className="font-primary text-[white] mb-[5px] inline-block"
            >
              User name
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your uesrname"
              className="w-full rounded-md px-[20px] h-[45px] font-primary"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && (
              <span className="text-[10px] text-[red] font-primary my-2">
                {errors.username.message}*
              </span>
            )}
          </div>
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
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-[10px] text-[red] font-primary my-2">
                {errors.email.message}*
              </span>
            )}
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
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <span className="text-[10px] text-[red] font-primary my-2">
                {errors.password.message}*
              </span>
            )}
          </div>
          {/* inpubox */}
          <div className="my-[10px]">
            <label
              htmlFor="avatar"
              className="font-primary text-[white] mb-[5px] inline-block"
            >
              Avatar
            </label>
            <input
              type="file"
              id="avatar"
              placeholder="Enter your avatar"
              accept="image/*"
              className="w-full rounded-md  h-[45px] font-primary bg-white file:h-full cursor-pointer"
              {...register("avatar", { required: "Avatar is required" })}
            />
            {errors.avatar && (
              <span className="text-[10px] text-[red] font-primary my-2">
                {errors.avatar.message}*
              </span>
            )}
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

export default Signup;