import "../styles/login.css";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

export default function Login() {
    const schema=yup.object({
        name:yup.string().required(),
        email:yup.string().required()
    }).required()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm(
    {resolver:yupResolver(schema)}
    );
  const onSubmit = (state) => console.log(state);
  console.log(watch("name"));
  return (
    <div className="login">
      <div className="login__header">Register</div>

      <form onSubmit={handleSubmit(onSubmit)} className="login__data">
        <section className="login__wrap">
          <div className="data__row">
            <div className="data__row__wrap">
              <label>Name <span className="error">*</span></label>
              <input type={"text"} {...register("name",{required:true})}  />
              {errors.name?.type === 'required' && <p className="error">First name is required *</p>}

            </div>
            <div className="data__row__wrap">
              <label>Email<span className="error">*</span></label>
              <input type={"email"}  {...register("email",{required:true})} />
              {errors.email?.type === 'required' && <p className="error">Email is required *</p>}

            </div>
          </div>
        </section>

        <section className="login__wrap">
          <label>Mobile</label>

          <input type={"number"}  {...register("mobile",{min:0})}/>
        </section>
        <section className="login__wrap">
          <label>Country</label>

          <input type={"text"} {...register("country")} />
        </section>
        <section className="login__wrap">
          <label>City</label>

          <input type={"text"}  {...register("city")} />
        </section>
        <section className="login__wrap">
          <label>State</label>

          <input type={"text"}  {...register("state")}/>
        </section>
        <section className="login__wrap">
          <label>Message</label>

          <textarea  {...register("message")} />
        </section>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
