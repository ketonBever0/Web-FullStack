export default function signIn() {
    return (
        <div className="">

            <h1 className="text-center text-4xl mt-5 mb-10">Login!</h1>

            <form className="form-control flex flex-col flex-wrap gap-5 place-content-center">

                <div>
                    <label className="label">
                        <span className="label-text">What is your name?</span>
                        {/* <span className="label-text-alt">Top Right label</span> */}
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered" />
                    {/* <label className="label">
                    // <span className="label-text-alt">Bottom Left label</span>
                    <span className="label-text-alt">Bottom Right label</span>
                </label> */}
                </div>

                <div>
                    <label className="label">
                        <span className="label-text">What is your name?</span>
                        {/* <span className="label-text-alt">Top Right label</span> */}
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered" />
                    <label className="label">
                        <span className="label-text-alt">Bottom Left label</span>
                        {/* <span className="label-text-alt">Bottom Right label</span> */}
                    </label>
                </div>

            </form>
        </div>
    )
};
