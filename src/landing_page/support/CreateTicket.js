import React, { useState } from 'react';

const announcements = [
    { text: 'Offer for sale (OFS) – June 2026', href: '#' },
    { text: 'Current Takeovers and Delisting – June 2026', href: '#' },
];

const quickLinks = [
    '1. Track account opening',
    '2. Track segment activation',
    '3. Intraday margins',
    '4. Kite user manual',
    '5. Learn how to create a ticket',
];

function CreateTicket() {
    const [openIndex, setOpenIndex] = useState(null);

    const categories = [
        {
            name: 'Account Opening',
            icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#387ed1" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>,
        },
        {
            name: 'Your Zerodha Account',
            icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#387ed1" strokeWidth="1.5"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /><circle cx="12" cy="12" r="10" /></svg>,
        },
        {
            name: 'Kite',
            icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#387ed1" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><polyline points="8,12 11,9 14,12 17,9" /><line x1="8" y1="15" x2="16" y2="15" /></svg>,
        },
        {
            name: 'Funds',
            icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#387ed1" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 7v10M9 9.5h4.5a1.5 1.5 0 0 1 0 3H10a1.5 1.5 0 0 0 0 3H14" /></svg>,
        },
        {
            name: 'Console',
            icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#387ed1" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /><line x1="12" y1="2" x2="12" y2="8" /><line x1="12" y1="16" x2="12" y2="22" /><line x1="2" y1="12" x2="8" y2="12" /><line x1="16" y1="12" x2="22" y2="12" /></svg>,
        },
        {
            name: 'Coin',
            icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#387ed1" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="5" /></svg>,
        },
    ];

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <div style={{ backgroundColor: '#f2f2f2', padding: '32px 60px 48px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px' }}>

                {/* Left: Accordion */}
                <div style={{ flex: 1 }}>
                    {categories.map((cat, i) => (
                        <div
                            key={i}
                            style={{
                                backgroundColor: '#fff',
                                border: '1px solid #e0e0e0',
                                borderRadius: '4px',
                                marginBottom: '12px',
                                cursor: 'pointer',
                            }}
                        >
                            <div
                                onClick={() => toggle(i)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '18px 20px',
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                    {cat.icon}
                                    <span style={{ fontSize: '16px', color: '#1a1a1a', fontWeight: '400' }}>
                                        {cat.name}
                                    </span>
                                </div>
                                <svg
                                    width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="#888" strokeWidth="2"
                                    style={{
                                        transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                                        transition: 'transform 0.2s'
                                    }}
                                >
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </div>
                            {openIndex === i && (
                                <div style={{
                                    padding: '0 20px 16px 56px',
                                    fontSize: '14px',
                                    color: '#555',
                                    borderTop: '1px solid #f0f0f0'
                                }}>
                                    <p style={{ marginTop: '12px' }}>
                                        Browse articles in <strong>{cat.name}</strong> or{' '}
                                        <a href="#" style={{ color: '#387ed1' }}>create a ticket</a>.
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right: Sidebar */}
                <div style={{ width: '320px', flexShrink: 0 }}>

                    {/* Announcements */}
                    <div style={{
                        backgroundColor: '#fffbf2',
                        borderLeft: '4px solid #f0a500',
                        borderRadius: '0 4px 4px 0',
                        padding: '16px 20px',
                        marginBottom: '16px'
                    }}>
                        <ul style={{ listStyle: 'disc', paddingLeft: '18px', margin: 0 }}>
                            {announcements.map((a, i) => (
                                <li key={i} style={{ marginBottom: i < announcements.length - 1 ? '10px' : 0 }}>
                                    <a href={a.href} style={{ color: '#387ed1', fontSize: '14px' }}>
                                        {a.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div style={{
                        backgroundColor: '#fff',
                        border: '1px solid #e0e0e0',
                        borderRadius: '4px',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            padding: '14px 20px',
                            backgroundColor: '#f7f7f7',
                            borderBottom: '1px solid #e0e0e0',
                            fontSize: '15px',
                            fontWeight: '500',
                            color: '#1a1a1a'
                        }}>
                            Quick links
                        </div>
                        {quickLinks.map((link, i) => (
                            <div key={i} style={{
                                padding: '13px 20px',
                                borderBottom: i < quickLinks.length - 1 ? '1px solid #f0f0f0' : 'none',
                            }}>
                                <a href="#" style={{ color: '#387ed1', fontSize: '14px' }}>
                                    {link}
                                </a>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CreateTicket;