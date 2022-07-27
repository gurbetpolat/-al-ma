
import Link from "next/link"
import Head from "next/head"
export default function About() {
    return <div> <h3>About page</h3>
        <Head> <title>Hakkımızda</title></Head>
        <div>asdhashdhasdkjashdk</div>
        <Link href="/">
            Geri dön
        </Link>
        <style jsx>{`
   h3{
       font-size:20px;
 color:blue;
   }
    `}

        </style>
    </div>
}