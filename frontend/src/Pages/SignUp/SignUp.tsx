import { Input } from "@nextui-org/react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
type FormData = {
  userName: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  password: string;
  confirmPassword: string;
};

const SignUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Sign Up</title>
      </Helmet>

      <form onSubmit={onSubmit} className="max-w-xl mx-auto space-y-10">
        <Input
          label="User Name"
          className="font-bold"
          radius="full"
          isClearable
          maxLength={20}
          classNames={{
            label: "ml-2",
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
          label="Full Name"
          className="font-bold my-2"
          radius="full"
          isClearable
          variant="bordered"
          size="lg"
          maxLength={100}
          labelPlacement="outside"
          {...register("fullName", { required: true })}
          placeholder="Enter your full name"
          classNames={{
            label: "ml-2",
            errorMessage: "text-red-500 text-sm px-3",
            input: "bg-white",
            inputWrapper: "bg-white",
          }}
        />
        <Input
          label="Email"
          className="font-bold my-2"
          radius="full"
          isClearable
          variant="bordered"
          size="lg"
          type="email"
          maxLength={100}
          labelPlacement="outside"
          {...register("email", { required: true })}
          placeholder="Enter your email address"
          classNames={{
            label: "ml-2",
            errorMessage: "text-red-500 text-sm px-3",
            input: "bg-white",
            inputWrapper: "bg-white",
          }}
        />
        <Input
          label="Phone"
          className="font-bold my-2 rounded-[136px]"
          radius="full"
          isClearable
          variant="bordered"
          size="lg"
          type="tel"
          maxLength={11}
          minLength={11}
          labelPlacement="outside"
          {...register("phone", {
            required: true,
          })}
          placeholder="Enter your phone number"
          classNames={{
            label: "ml-2",
            errorMessage: "text-red-500 text-sm px-3",
            input: "bg-white",
            inputWrapper: "bg-white",
          }}
        />
        <Input
          label="Address"
          className="font-bold my-2 rounded-[136px]"
          radius="full"
          isClearable
          variant="bordered"
          size="lg"
          labelPlacement="outside"
          {...register("address", {
            required: true,
          })}
          placeholder="Enter your Address"
          classNames={{
            label: "ml-2",
            errorMessage: "text-red-500 text-sm px-3",
            input: "bg-white",
            inputWrapper: "bg-white",
          }}
        />
        <Input
          label="Password"
          className="font-bold my-2 rounded-[136px]"
          radius="full"
          variant="bordered"
          size="lg"
          labelPlacement="outside"
          {...register("password", {
            required: true,
          })}
          placeholder="Enter your password"
          classNames={{
            label: "ml-2",
            errorMessage: "text-red-500 text-sm px-3",
            input: "bg-white",
            inputWrapper: "bg-white",
          }}
          endContent={
            <button
              className=""
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setIsVisible(!isVisible);
                console.log(isVisible);
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
        />
      </form>
    </div>
  );
};

export default SignUp;
