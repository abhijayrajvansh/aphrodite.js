import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";

export default function Home() {
	return (
		<section className="bred w-screen h-screen flex flex-col items-center justify-center">
				<Snippet hideSymbol hideCopyButton variant="flat">
						<div className="flex items-center gap-3">
							Get started by editing
							<Code color="success">components/Home.tsx</Code>
						</div>
				</Snippet>
				<div className="mt-5 flex gap-2">
					<ThemeSwitch />
          <p className="text-lg">~ Developed by</p>
          <Link href='https://linkedin.com/in/abhijayrajvansh' target="_blank" rel="noopener noreferrer">
            <h1 className="text-xl text-primary-500 font-semibold flex items-center gap-2">
              Abhijay Rajvansh.
            </h1>
          </Link>
        </div>
		</section>
	);
}