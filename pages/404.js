import Layout from "@/components/Layout"
import styles from "@/styles/Notfound.module.css"
import Link from "next/link"
import {FaExclamationTriangle} from "react-icons/fa"
export default function NotFoundPage() {
  return (
    <Layout title='404 Not Found | DJ Events'>
        <div className={styles.error}>
            <h1><FaExclamationTriangle /> 404</h1>
            <h4>Sorry, buralar çok ıssız gözüküyor</h4>
            <Link href="/">Home</Link>
        </div>
    </Layout>
  )
}
