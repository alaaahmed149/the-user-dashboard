'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { fakeLogin } from "./authAPI";
import { loginSuccess } from "./authSlice";
import { useState } from "react";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type LoginForm = z.infer<typeof schema>;

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(schema),
  });

  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = async (data: LoginForm) => {
    setIsLoading(true);
    try {
      const token = await fakeLogin(data.email, data.password);
      dispatch(loginSuccess(token));
      setTimeout(() => {
        router.push('/dashboard');
        router.refresh(); 
      }, 100);
    } catch {
      alert("Login Failed.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-4 justify-center items-center w-[300px] max-w-sm mx-auto">
        <h2 className="text-xl font-bold mb-4"></h2>
        <input type="email" {...register("email")} placeholder="Email.." className="block w-full mb-2 p-2 border rounded-md" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input type="password" {...register("password")} placeholder="Password.." className="block w-full mb-2 p-2 border rounded-md" />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}

        <button type="submit" className="bg-black hover:bg-gray-800 drop-shadow-2xs text-white cursor-pointer px-4 py-2 rounded-md w-full" disabled={isLoading}>{isLoading ? "Loading..." : "Login"}</button>
    </form>

  );
}
