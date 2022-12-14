import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";


export default function Contact() {
  return (
    <MainLayout>
      <h2>Contact page</h2>
      <h1 className=".title">
        Ir <Link href="/">Home</Link>
      </h1>

      <p className=".description">
        Get started by editing
        <code className=".code">pages/contact.js</code>
      </p>
    </MainLayout>
  );
}
