export const Error = () => {
    return(
        <>
            <div className="row d-flex justify-content-center py-5 p-3">
                <div className="col-md-8 col-lg-6 col-xl-5">
                    <div className="card text-body" style={{ borderRadius: '35px' }}>
                        <div className="card-body p-4">

                            <div className="d-flex">
                                <h6 className="flex-grow-1">Error</h6>
                            </div>

                            <div className="d-flex flex-column text-center mt-5 mb-4">
                                <span className="small">City not found, try again.</span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}