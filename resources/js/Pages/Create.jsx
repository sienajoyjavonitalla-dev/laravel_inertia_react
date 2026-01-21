import { Head, useForm, usePage } from "@inertiajs/react";

export default function Create() {
    const {data, setData, post, errors, processing} = useForm({
        body: ""
    });
    const {component} = usePage();
    
    function submit(e) {
        e.preventDefault();
        post("/posts");
    }

    return (
        <>
            <Head title={component}/>

            <h1 className="title">
                Create Post
            </h1>
            <div className="w-1/2 mx-auto">
                <form onSubmit={submit}>
                    <textarea rows="10" 
                    value={data.body} 
                    onChange={(e) => setData('body', e.target.value)} 
                    className={errors.body && "border border-red-600"}
                    ></textarea>
                    {errors.body && <div className="error">{errors.body}</div>}
                    <button className="mt-4 primary-btn" type="submit" disabled={processing}>Create</button>
                </form>
                
            </div>
        </>
    )
    ;
}