import Image from "next/image";
import Link from "next/link";
import DesktopNav from "$/app/_components/navigation";
import { Linkedin, Twitter, Instagram } from "lucide-react";
export default function Footer() {
	return (
		<footer className="px-5 py-8 md:px-8 md:py-12 xl:px-20 mx-auto max-w-screen-2xl">
			<div className="px-6 py-4 common-border3 rounded-3xl bg-indigo-900/40">
				<div className="flex flex-col gap-4 lg:flex-row items-center  justify-between border-b pb-4">
					<div className="flex items-center justify-center">
						<Image
							src={"/logo-light.png"}
							alt="Infinity Devs lOGO"
							width={200}
							height={200}
						/>
					</div>
					{/* <DesktopNav /> */}
					<div className="flex gap-4 text-white">
						<Link
							href={"https://www.linkedin.com/company/infinitydevshq/"}
							target="_blank"
							className="common-gradient hover:-translate-y-1.5 transition-all ease-in-out duration-300 p-2  md:p-3 rounded-full"
						>
							<Linkedin
								size={28}
								fill="transparent"
							/>
						</Link>
						<Link
							href={"https://twitter.com/InfinityDevsHQ"}
							target="_blank"
							className="common-gradient hover:-translate-y-1.5 transition-all ease-in-out duration-300 p-2  md:p-3 rounded-full"
						>
							<Twitter
								size={28}
								fill="transparent"
							/>
						</Link>
						<Link
							href={"https://www.instagram.com/infinitydevshq"}
							target="_blank"
							className="common-gradient hover:-translate-y-1.5 transition-all ease-in-out duration-300 p-2   md:p-3 rounded-full"
						>
							<Instagram
								size={28}
								fill="transparent"
							/>
						</Link>
					</div>
				</div>
				<p className="main-description text-zinc-300 text-center pt-4 text-sm lg:text-base">
					Infinity Devs &copy; 2024, All Rights Reserved
				</p>
			</div>
		</footer>
	);
}
