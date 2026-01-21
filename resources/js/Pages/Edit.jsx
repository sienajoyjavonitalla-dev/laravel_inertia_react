import { Head, useForm, usePage } from '@inertiajs/react';
import { useRoute } from "../../../vendor/tightenco/ziggy";

export default function Edit({ post }) {
    const { data, setData, put, processing, errors } = useForm({
        body: post.body,
    });
    const {component} = usePage();
    const route = useRoute();

    const submit = (e) => {
        e.preventDefault();
        // put(`/posts/${post.id}`);
        put(route('posts.update', post));
    };

    return (
        <>
            <Head title={component}/>

            <h1 className="title">
                Edit Post
            </h1>
            <div className="w-1/2 mx-auto">
                <form className={errors.body && "border border-red-600"} onSubmit={submit}>
                    <div>
                        <textarea
                            id="body"
                            value={data.body}
                            onChange={(e) => setData('body', e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            rows="4"
                        />
                        {errors.body && <div className="mt-2 text-sm text-red-600">{errors.body}</div>}
                    </div>
                    <div className="mt-2">
                        <button
                            type="submit"
                            disabled={processing}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                        >
                            {processing ? 'Updating...' : 'Update Post'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}