import React from 'react';

const Offcanvas = ({ show, title, onClose, children }) => {
    return (
        <>
            {/* Backdrop (no onClick to prevent outside close) */}
            {show && (
                <div
                    className="modal-backdrop fade show"
                    style={{ zIndex: 1040 }}
                />
            )}

            {/* Offcanvas panel */}
            <div
                className={`offcanvas offcanvas-end ${show ? 'show' : ''}`}
                tabIndex="-1"
                style={{
                    visibility: show ? 'visible' : 'hidden',
                    width: '50vw',
                    zIndex: 1050,
                    transform: show ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'transform 0.3s ease-in-out',
                }}
            >
                <div className="offcanvas-header bg-primary text-white">
                    <h5 className="offcanvas-title fw-bold">{title}</h5>
                    <button
                        type="button"
                        className="btn-close btn-close-white"
                        aria-label="Close"
                        onClick={onClose}
                    />
                </div>
                <div className="offcanvas-body px-4 py-3 bg-light">
                    {children}
                </div>
            </div>
        </>
    );
};

export default Offcanvas;
