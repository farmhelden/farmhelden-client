import Link from "next/link";
import { PrimaryButton } from "./Button";
import { Title } from "./Title";

const Header = () => {
  return (
    <div className="flex justify-between items-center mt-4 mb-8">
      <Title as="h1" className="text-4xl" bold>
        Farm-Helden.de
      </Title>
      <Link href="/helper">
        <PrimaryButton theme="border">Ansicht wechseln</PrimaryButton>
      </Link>
    </div>
  );
};

export default Header;
