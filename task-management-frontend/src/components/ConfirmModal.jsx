import React from 'react';

const ConfirmModal = ({ show, title = 'Are you sure?', onConfirm, onCancel }) => {
    if (!show) return null;

    return (
        <>
            {/* Backdrop */}
            <div className="modal-backdrop fade show" style={{ zIndex: 1040 }} />

            {/* Modal */}
            <div
                className="modal d-block"
                role="dialog"
                style={{ zIndex: 1055 }}
                aria-modal="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content shadow-lg border-0">
                        <div className="modal-header bg-danger text-white">
                            <h5 className="modal-title fw-semibold">{title}</h5>
                            <button
                                type="button"
                                className="btn-close btn-close-white"
                                aria-label="Close"
                                onClick={onCancel}
                            />
                        </div>

                        <div className="modal-body text-center">
                            <p className="mb-0">This action cannot be undone.</p>
                        </div>

                        <div className="modal-footer justify-content-center">
                            <button
                                type="button"
                                className="btn btn-secondary px-4"
                                onClick={onCancel}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger px-4"
                                onClick={onConfirm}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConfirmModal;
