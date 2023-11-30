import Image from "next/image";
import styles from "./page.module.css";
import axios from "axios";

const fetchTests = async () => {
  const tests = await axios("https://interns-test-fe.snp.agency/api/v1/tests", {
    headers: {
      "scope-key": "Rm36-GQ.Z(%rFfwAu:LvY7",
    },
  });
  return tests.data;
};

export default function Home() {
  const tests = fetchTests();
  console.log(tests);
  console.log("hi");

  return <h1>Тесты</h1>;
}
