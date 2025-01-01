import {getBlogs} from "../src/lib/db.js";

(async () => {
    try {
        const blogs = await getBlogs();
        console.log("Retrieved blogs:", blogs);
    } catch (error) {
        console.error("Error fetching blogs", error);
    }
})();