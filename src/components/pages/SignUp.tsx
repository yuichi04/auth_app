import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { PageTitle } from "../atoms";
import { Container } from "../layouts";

type Register = {
  username: string;
  email: string;
  password: string;
  confirmPw: string;
};

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<Register>();

  const onSubmit: SubmitHandler<Register> = (data) => {
    if (isSubmitting) return;
    console.log(data);
    // firebaseに認証情報を問い合わせる処理
    // ホーム画面に遷移させる処理
  };

  return (
    <div className="bg-gray-100 p-8 shadow-lg h-screen">
      <Container>
        <div className="mb-4">
          <PageTitle>sign up</PageTitle>
        </div>
        <form className="font-mono uppercase mb-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <p className="text-red-600">{errors.username?.message}</p>
            <label>user name:</label>
            <input
              type="text"
              className={`w-full p-1 ${errors.username?.message && "outline outline-1 outline-red-600"}`}
              placeholder="4文字以上で入力してください"
              autoComplete="off"
              {...register("username", {
                required: "ユーザー名を入力してください",
                minLength: { value: 4, message: "4文字以上で入力してください" },
              })}
            />
          </div>
          <div className="mb-4">
            <p className="text-red-600">{errors.email?.message}</p>
            <label>email:</label>
            <input
              type="email"
              className={`w-full p-1 ${errors.email?.message && "outline outline-1 outline-red-600"}`}
              placeholder="example@xxx.com"
              autoComplete="off"
              {...register("email", {
                required: "メールアドレスを入力してください",
                pattern: {
                  value: /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
                  message: "メールアドレスの形式が正しくありません",
                },
              })}
            />
          </div>
          <div className="mb-4">
            <p className="text-red-600">{errors.password?.message}</p>
            <label>password:</label>
            <input
              type="password"
              className={`w-full p-1 ${errors.password?.message && "outline outline-1 outline-red-600"}`}
              placeholder="8文字以上で入力してください"
              autoComplete="off"
              {...register("password", {
                required: "パスワードを入力してください",
                minLength: { value: 8, message: "8文字以上で設定してください" },
                onBlur: () => {
                  if (getValues("confirmPw")) trigger("confirmPw");
                },
              })}
            />
          </div>
          <div className="mb-8">
            <p className="text-red-600">{errors.confirmPw?.message}</p>
            <label>confirm:</label>
            <input
              type="password"
              className={`w-full p-1 ${errors.confirmPw?.message && "outline outline-1 outline-red-600"}`}
              placeholder="もう一度パスワードを入力してください"
              autoComplete="off"
              {...register("confirmPw", {
                required: "確認用のパスワードを入力してください",
                validate: (value) => {
                  return value === getValues("password") || "パスワードが一致しません";
                },
              })}
            />
          </div>
          <button className="bg-blue-800 text-white w-full p-1 uppercase transition-opacity hover:opacity-80">
            sign up
          </button>
        </form>
        <Link
          to="/login"
          className="bg-stone-700 text-white text-center w-full p-1 transition-opacity inline-block hover:opacity-80"
        >
          ログインはこちらから
        </Link>
      </Container>
    </div>
  );
};

export default SignUp;
