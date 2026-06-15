import React from 'react';

function Hero() {
    return (
        <div
            style={{
                backgroundColor: '#f2f2f2',
                padding: '40px 60px 48px'
            }}
        >
            {/* Top Row */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1
                    style={{
                        fontSize: '32px',
                        fontWeight: '700',
                        color: '#1a1a1a',
                        margin: 0
                    }}
                >
                    Support Portal
                </h1>

                <a
                    href="/tickets"
                    style={{
                        backgroundColor: '#387ed1',
                        color: '#fff',
                        padding: '12px 24px',
                        borderRadius: '4px',
                        fontSize: '15px',
                        fontWeight: '500',
                        textDecoration: 'none',
                        whiteSpace: 'nowrap'
                    }}
                >
                    My Tickets
                </a>
            </div>

            {/* Search Bar */}
            <div
                style={{
                    backgroundColor: '#fff',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '12px 16px',
                    gap: '10px'
                }}
            >
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#aaa"
                    strokeWidth="2"
                >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>

                <input
                    type="text"
                    placeholder="Eg: How do I open my account, How do I activate F&O..."
                    style={{
                        border: 'none',
                        outline: 'none',
                        fontSize: '15px',
                        color: '#333',
                        width: '100%',
                        backgroundColor: 'transparent'
                    }}
                />
            </div>
        </div>
    );
}

export default Hero;