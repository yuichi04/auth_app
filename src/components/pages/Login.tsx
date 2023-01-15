import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { PageTitle } from "../atoms";
import { Container } from "../layouts";

type LoginState = {
  email: string;
  password: string;
};

const Login: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginState>();

  const onSubmit: SubmitHandler<LoginState> = (data) => {
    if (isSubmitting) return;
    // firebaseに認証情報を問い合わせる処理
    // ホーム画面に遷移させる処理
    console.log(data);
  };

  return (
    <div className="bg-gray-100 p-8 shadow-lg h-screen">
      <Container>
        <div className="mb-4">
          <PageTitle>login</PageTitle>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex-col uppercase mb-8 font-mono">
          <div className="mb-4">
            <p className="text-red-600">{errors.email?.message}</p>
            <label>email:</label>
            <input
              type="email"
              className="w-full"
              autoComplete="current-email"
              {...register("email", {
                required: "メールアドレスを入力してください",
                pattern: {
                  value: /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
                  message: "正しいメールアドレスを入力してください",
                },
              })}
            />
          </div>
          <div className="mb-8">
            <p className="text-red-600">{errors.password?.message}</p>
            <label>password:</label>
            <input
              type="password"
              className="w-full"
              autoComplete="current-password"
              {...register("password", {
                required: "パスワードが入力されていません",
                minLength: { value: 8, message: "正しいパスワードを入力してください" },
              })}
            />
          </div>
          <button className="bg-blue-800 text-white text-center w-full py-1 uppercase transition-opacity hover:opacity-80">
            Login
          </button>
        </form>
        <Link
          to="/signup"
          className="bg-stone-700 text-center text-white w-full py-1 inline-block transition-opacity hover:opacity-80"
        >
          アカウント作成はこちら
        </Link>
      </Container>
    </div>
  );
};

export default Login;
