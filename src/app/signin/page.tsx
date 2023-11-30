import axios from "axios";

interface SignUpData {
  username: string;
  password: string;
  password_confirmation: string;
  is_admin: boolean;
}

const signUp = async (data: SignUpData) => {
  await axios.post("https://interns-test-fe.snp.agency/api/v1/signup", data, {
    headers: {
      "scope-key": "Rm36-GQ.Z(%rFfwAu:LvY7",
    },
  });
};

export default function SignInPage() {
  return (
    <div>
      <h1>Sign up</h1>
      <p>Данные введены. Регистрируемся?</p>
      {/* <button onClick={() => signUp({ username })}>Зарегаться</button> */}
    </div>
  );
}
