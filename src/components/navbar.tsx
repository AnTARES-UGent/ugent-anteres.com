import Link from 'next/link';

const Navbar = () => {
    return (
            <div style={{ position: 'sticky', top: 0, background: "black" /* TODO fix light dark mode*/}} className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <div className="flex-left">
                    <p className="fixed left-0 top-0 flex w-full justify-center pb-6 pt-8 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                        AnTARES
                    </p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }} className="flex-right">
                    <a href="#home" className="fixed left-0 top-0 flex w-full justify-center pb-6 pt-8 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"><button>Home</button></a>
                    <a href="#about" className="fixed left-0 top-0 flex w-full justify-center pb-6 pt-8 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"><button>About</button></a>
                    <a href="#sponsors" className="fixed left-0 top-0 flex w-full justify-center pb-6 pt-8 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"><button>Sponsors</button></a>
                    <a href="#join" className="fixed left-0 top-0 flex w-full justify-center pb-6 pt-8 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"><button>Join</button></a>
                    <a href="#contact" className="fixed left-0 top-0 flex w-full justify-center pb-6 pt-8 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"><button>Contact</button></a>
                </div>
            </div>
    );
};

export default Navbar;