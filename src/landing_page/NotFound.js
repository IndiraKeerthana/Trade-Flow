import React from 'react';

function NotFound() {
    return (
        <div className="container py-4 py-lg-5 mt-5 mb-5 px-3">
            <div className="row text-center">
                <h1 className="mt-5 fs-3 mb-2" style = {{color: "#424242", fontSize: "1.75rem"}}>404 Not Found</h1>
                <p className="text-muted fs-5 mb-3 mt-2" style = {{fontWeight: "400"}}>The page your looking for does not exist.</p>
            </div>
        </div>
    );
}

export default NotFound;