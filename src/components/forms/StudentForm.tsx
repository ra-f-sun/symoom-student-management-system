"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters" })
    .max(20, { message: "Username must not exceed 20 characters" }),
  email: z.string().email({ message: "Invalid email address!" }),
  password: z
    .string()
    .min(8, { message: "Password must contain 8 characters" }),
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  bloodType: z.string().min(1, { message: "Blood Type is required" }),
  birthdate: z.date({ message: "Birthdate is required" }),
  sex: z.enum(["male", "female"], { message: "Gender is required" }),
  img: z.instanceof(File, { message: "Image is required" }),
});

type Inputs = z.infer<typeof schema>;

const StudentForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold "> Create a new student</h1>
      <span className="text-xs text-gray-400 font-medium">
        Authentication Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Username"
          register={register}
          name="username"
          error={errors?.username}
          defaultValue={data?.username}
        />
        <InputField
          label="Email"
          register={register}
          name="email"
          error={errors?.email}
          defaultValue={data?.email}
        />
        <InputField
          label="Password"
          register={register}
          name="password"
          error={errors?.password}
          defaultValue={data?.password}
          type="password"
        />
      </div>

      <span className="text-xs text-gray-400 font-medium">
        Personal Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="First Name"
          register={register}
          name="firstName"
          error={errors?.firstName}
          defaultValue={data?.firstName}
        />
        <InputField
          label="Last Name"
          register={register}
          name="lastName"
          error={errors?.lastName}
          defaultValue={data?.lastName}
        />
        <InputField
          label="Phone"
          register={register}
          name="phone"
          error={errors?.phone}
          defaultValue={data?.phone}
        />
        <InputField
          label="Address"
          register={register}
          name="address"
          error={errors?.address}
          defaultValue={data?.address}
        />
        <InputField
          label="Blood Type"
          register={register}
          name="bloodType"
          error={errors?.bloodType}
          defaultValue={data?.bloodType}
        />
        <InputField
          label="Birthdate"
          register={register}
          name="birthdate"
          error={errors?.birthdate}
          defaultValue={data?.birthdate}
          type="date"
        />
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Gender</label>
          <select
            {...register("sex")}
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            defaultValue={data?.sex}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.sex?.message && (
            <p className="text-xs text-red-500 font-bold">
              {errors.sex?.message.toString()}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
          <label
            className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
            htmlFor="img"
          >
            <Image src="/upload.png" alt="" height={28} width={28} />
            <span>Upload Image</span>
          </label>
          <input type="file" id="img" {...register("img")} className="hidden" />
          {errors.img?.message && (
            <p className="text-xs text-red-500 font-bold">
              {errors.img?.message.toString()}
            </p>
          )}
        </div>
      </div>
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default StudentForm;
