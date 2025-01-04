import { redirect } from "next/navigation";

export default function BlogRedirect() {
    // Redirect to root `/`
    redirect("/");
}