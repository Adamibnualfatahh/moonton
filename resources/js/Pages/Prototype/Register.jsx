import Input from "@/Components/Input";
import Label from "@/Components/InputLabel";
import Button from "@/Components/Button";
import { Link, Head } from '@inertiajs/react';

export default function (){
    return (
        <>
            <Head title="Sign Up" />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img src="/images/signup-image.png"
                         className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt=""/>
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src="/images/moonton-white.svg" alt=""/>
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Sign Up
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br/>
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]">
                            <div className="flex flex-col gap-6">
                                <div>
                                    <Label
                                        forInput="fullName" value="Full Name" />
                                    <Input type="text" name="fullname"
                                           placeholder="Your fullname" defaultValue="Adam React"/>
                                </div>
                                <div>
                                    <Label
                                        forInput="email" value="Email Address"/>
                                    <Input type="email" name="email"
                                           placeholder="Your email" defaultValue="adamforreact@fb.com"/>
                                </div>
                                <div>
                                    <Label
                                        forInput="password" value="Password"/>
                                    <Input type="password" name="password"
                                           placeholder="Your Password" defaultValue="eeeeeeeeeeeeeee"/>
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <Button>
                                <span className="text-base font-semibold">
                                    Sign Up
                                </span>
                                </Button>
                                <Link href={route('prototype.login')}>
                                    <Button variant="light-outline">
                                    <span className="text-base text-white">
                                        Sign In to My Account
                                    </span>
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
