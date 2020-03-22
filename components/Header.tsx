import Link from "next/link";
import { PrimaryButton } from "./Button";
import { Title } from "./Title";
import { Logo } from "./Logo";

const Header = () => {
  return (
    <div className="flex justify-between items-center mt-4 mb-8">
      <div className="flex items-center">
        <Logo size={90} className="mr-2" />
        <Title as="h1" className="text-4xl" bold>
          Farm-Helden.de
        </Title>
      </div>
    </div>
  );
};

export default Header;
