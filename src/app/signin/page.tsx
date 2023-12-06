import { BoxContainer } from "@/components/layout/box-container";
import { Paragraph } from "@/components/ui/typography/paragraph";
import { axios } from "@/lib/axios";

const getData = async () => {
  const data = (await axios("http://localhost:3000/api/signin")).data;
  return data;
};

export default async function SignInPage() {
  // const data = await getData();
  // console.log(data);

  return (
    <BoxContainer>
      <h1>Sign in</h1>
    </BoxContainer>
  );
}
