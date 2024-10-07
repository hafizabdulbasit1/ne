import Link from "next/link"
import Image from "next/image"
export default function Head() {
    return (
    
        <div>
            <nav className="bg-[#fcd34d]   py-2 flex justify-between ">
                
                <span className=" flex  py-2 mx-4 hover:bg-yellow-500 hover:text-white rounded-2xl bg-green-400  px-2 font-bold text-2xl">
                    <h1 className=" text-3xl">ABD</h1>

                </span>
                
                <ul className=" flex text-black font-bold    px-96 py-1 space-x-2 ">

                    <li className=" hover:bg-green-600  rounded-full px-4 py-2"><Link href="/">home</Link></li>
                    <li className=" hover:bg-green-600 rounded-full px-4 py-2 "><Link href="about">about</Link></li>
                    <li className=" hover:bg-green-600 rounded-full px-4 py-2 "><Link href="gallery">gallery</Link></li>
                    <li className=" hover:bg-green-600 rounded-full px-4 py-2 "><Link href="contact-us">contact us</Link></li>
                </ul>
            </nav>


            <main className="bg-slate-900 py-40 pl-24 flex">
                {/* heading and text */}
                <div>
                    <h1 className="text-white font-boldhello text-7xl "> This is main page</h1>
                    <p className="text-white font-bold py-5 w-2/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quia odit <br />laudantium accusamus eveniet fugit asperiores cumque quis minima assumenda consequuntur iste modi iusto amet adipisci, blanditiis excepturi, quas saepe?</p>
                
                    
                    {/* button */}
                    <div className="button text-2xl">
                        <button className=" size- rounded-2xl bg-[#fcd34d]  text-green-900 hover:bg-green-500 hover:text-black px-3 py-2 mx-2 ">clik this</button>
                        <button className="size- rounded-2xl bg-[#fcd34d]  text-green-900 hover:bg-green-500 hover:text-black px-3 py-2 mx-2">for more</button>
                        </div>
                        </div>

                <div className="flex-4 py-6" >        
                    <Image width={800} height={500} src="/animation.png" alt="shoes" />
                    </div>  
            </main> 
<footer>
<div className="bg-green-900 py-14 text-white ">
    <div className="flex justify-between ">
<div className="">
    <h2 className="text-3xl font-bold ">explore</h2>
    <ul className=" ">
        <li><a href="#">facebook</a></li>
        <li><a href="#"> </a>youtube</li>
        <li><a href="#"> </a> whatsapp</li>
    </ul>
    
    </div>

<div className="">
    <h2 className="text-3xl font-bold ml-4">more about</h2>
    <ul className="ml-4">
    <li><a href="#">home</a></li>
    <li><a href="#">about</a></li>
    <li><a href="#">gallery</a></li>
    
    </ul>

</div>
<div className="">
    <h2 className="text-3xl font-bold ml-4">Abdul BAsit</h2>
<p className="mr-8">copyright 2024 by aboul basit </p>
</div>

    </div>



</div>

</footer>



</div>  
    )
}