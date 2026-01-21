import { Link, router } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy";

export default function Show({ post }) {
    const { delete: destroy } = useForm();
    const route = useRoute();

    function submit(e) {
        e.preventDefault();
        destroy(`${post.id}`);
        route('posts.destroy', post);
    }

    return (
        <>
            <h1 className="title">Post Details</h1>
            <div className="mb-8 py-2">
                <span className="text-gray-400 text-sm">
                    Posted on: {new Date(post.created_at).toLocaleTimeString()}
                </span>
                <div className="font-semibold mt-2">{post.body}</div>
            </div>
            <div className="mt-4 flex justify-between items-center">
                <Link href={route('home')} className="text-blue-500">
                    Back to Posts
                </Link>
                <div className="flex space-x-4">
                    <Link href={route('posts.edit', post)} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                        Edit
                    </Link>
                    <form onSubmit={submit} className="inline">
                        <button 
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        >
                            Delete Post
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}