import { useForm, SubmitHandler } from "react-hook-form";

import { User } from "../typings/user";

// Componente Login
export const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    //formstate es como otra clase más
    formState: { errors },
  } = useForm<User>();
  const onSubmit: SubmitHandler<User> = (data) => console.log(data);
  return (
    <div className="mb-2">
      <h1 className="font-weight-bold">Welcome</h1>

      <form className="formLogin novalidate" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-1">
          <input
            type="text"
            defaultValue=""
            {...register("user", { required: "Este campo es obligatorio" })}
            placeholder="Usuario"
            className={`input ${errors.user ? "is-invalid" : ""}`}
          />
          {errors.user && (
            <div className="invalid-feedback">{errors.user.message}</div>
          )}
        </div>

        <div className="mb-1">
          <input
            type="email"
            defaultValue=""
            {...register("email", { required: "Este campo es obligatorio" })}
            placeholder="Email"
            className={`input ${errors.email ? "is-invalid" : ""}`}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email.message}</div>
          )}
        </div>

        <div className="mb-1">
          <input
            type="password"
            defaultValue=""
            {...register("password", { required: "Este campo es obligatorio" })}
            placeholder="Contraseña"
            className={`input ${errors.password ? "is-invalid" : ""}`}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password.message}</div>
          )}
        </div>

        <button type="submit" className="btn btn-outline-secondary btn-lg">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};
