import Link from "next/link";
import { useRouter } from "next/router";

const CoffeeStore = () => {
  const router = useRouter();
  // console.log(router);
  const { id } = router?.query;
  return (
    <div>
      <h2>Coffee store page</h2>
      <Link href="/">Back To Home</Link>
      <Link href="/coffee-store/two">Go To dynamic page</Link>
    </div>
  );
};

export default CoffeeStore;
