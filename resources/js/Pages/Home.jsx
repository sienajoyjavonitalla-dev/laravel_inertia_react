import { Link, usePage } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function Home({posts}) {
    const flash = usePage().props['0']?.flash;  // Access flash from the '0' key
    const [showFlash, setShowFlash] = useState(!!flash?.message);

    useEffect(() => {
        if (flash?.message) {
            setShowFlash(true);
            const timer = setTimeout(() => setShowFlash(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [flash?.message]);

    return <>
        <h1 className="title"> Posts</h1>
        {showFlash && flash?.message && (
            <div className="fixed top-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 z-50">
                {flash.message}
            </div>
        )}
        <div>
            {posts.data.map(post => (
                <div key={post.id} className="border-b-2 mb-8 py-2">
                    <span className="text-gray-400 text-sm">
                        Posted on: {new Date(post.created_at).toLocaleTimeString()}
                    </span>
                    <div className="font-semibold">
                        {post.body}
                    </div>
                    <Link href={route('posts.show', post)} className="text-blue-500 text-sm ml-2">Read more...</Link>
                </div>
            ))}
        </div>
        <div>
            {posts.links.map((link, index) => (
                link.url ? (
                    <Link 
                        key={index} // Use index for safety since labels repeat
                        href={link.url} 
                        dangerouslySetInnerHTML={{ __html: link.label }} 
                        className={`px-3 py-1 ${link.active ? 'text-blue-500 font-bold' : ''}`}
                    />
                ) : (
                    // Render a span for disabled links (Previous/Next when inactive)
                    <span 
                        key={index} 
                        dangerouslySetInnerHTML={{ __html: link.label }} 
                        className="px-3 py-1 text-gray-400"
                    />
                )
            ))}
        </div>
    </>;
}