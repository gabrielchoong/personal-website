import {insertBlog} from "../src/lib/db.js";

(async () => {
    try {
        const newBlog = {
            title: "My First Blog",
            content: "This is a test blog"
        };
        await insertBlog(newBlog);
        console.log("Insert blog successful.");
    } catch (error) {
        console.error("Error in inserting blog", error);
    }
})();