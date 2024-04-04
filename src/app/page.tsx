import Image from "next/image";
import e from "../../public/img.png";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Image src={e} width={500} height={500} alt={""} />
    </div>
  );
}
