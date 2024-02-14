const CardShimmer = () => {
    return (
        <div className="card p-3 relative">
            <div className="card-image bg-slate-200 h-60 rounded-lg overflow-hidden">
            </div>
            <div className="card-body relative pt-2">
                <h5 className="bg-slate-200 rounded-full h-7 w-11/12 my-1"></h5>
                <h6 className="bg-slate-200 rounded-full h-7 w-full my-1"></h6>
                <h6 className="bg-slate-200 rounded-full h-7 absolute top-0 right-0"></h6>
                <span className="bg-slate-200 rounded-full h-5 w-11/12 my-1"></span>
                <h6 className="bg-slate-200 rounded-full h-7 w-24 my-1"></h6>
            </div>
        </div>
    )
}
export default CardShimmer;