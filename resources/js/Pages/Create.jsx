import { useForm } from "@inertiajs/react";

export default function Create() {
    const {data, setData, post, errors, processing} = useForm({
        body: ""
    });
    
    function submit(e) {
        e.preventDefault();
        post("/posts");
    }

    return (
        <>
            <h1 className="title">
                Create Post
            </h1>
            <div>
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