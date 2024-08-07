import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/features/user/userApi";
import { useAppDispatch } from "../../redux/hooks";

type FormData = {
  userName: string;
  password: string;
};

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [Login] = useLoginMutation();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    const username = data.userName;
    const password = data.password;

    const userInfo = {
      username,
      password,
    };

    Login(userInfo)
      .unwrap()
      .then((res) => {
        console.log(res);
        // dispatch(setUser(res));
        // navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });

    // axiosPublic
    //   .post("/patient/login/", { username: username, password: password })
    //   .then((res) => {
    //     dispatch(login(res.data));
    //     navigate("/");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  });

  return (
    <div className="min-h-screen my-12">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <h1 className="text-center font-bold text-2xl md:text-4xl">Login</h1>
      <form
        onSubmit={onSubmit}
        className="max-w-sm mt-12 md:max-w-xl mx-auto space-y-10"
      >
        <Input
          label="User Name"
          className="font-bold"
          radius="full"
          isRequired
          isClearable
          maxLength={20}
          classNames={{
            label: "ml-2 no-asterisk",
            errorMessage: "text-red-500 text-sm px-3",
            input: "bg-white",
            inputWrapper: "bg-white",
          }}
          variant="bordered"
          size="lg"
          labelPlacement="outside"
          {...register("userName", { required: true })}
          placeholder="Enter your user name"
        />

        <Input
          label="Password"
          className="font-bold my-2 rounded-[136px]"
          radius="full"
          variant="bordered"
          size="lg"
          isRequired
          labelPlacement="outside"
          {...register("password", {
            required: true,
          })}
          placeholder="Enter your password"
          classNames={{
            label: "ml-2 no-asterisk",
            errorMessage: "text-red-500 text-sm px-3",
            input: "bg-white",
            inputWrapper: "bg-white",
          }}
          endContent={
            <button
              className=""
              type="button"
              onClick={() => {
                setIsVisible(!isVisible);
              }}
            >
              {isVisible ? (
                <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <FaEye className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          type="submit"
          isDisabled={password === ""}
          className="w-32 font-bold h-12 mx-auto bg-[#06ABA1] text-white rounded-full flex items-center hover:bg-gray-300 hover:text-black"
        >
          Login
        </Button>
      </form>
      <div className="my-3 space-y-3">
        <p className="text-gray-800 hover:underline hover:text-red-500 text-center">
          Forgot your password?
        </p>
        <p className="text-gray-800 text-center">
          Don't have an account?{" "}
          <Link
            to={"/sign-up"}
            className="text-navPrimary hover:underline hover:text-green-800"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
