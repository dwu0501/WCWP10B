import React, { useEffect } from 'react';

export default function MindfulnessTap({ onResume }) {
    return (
        <div style={{ flexGrow: 1, height: '100vh', width: '100vw', backgroundColor: '#000', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999, position: 'fixed', top: 0, left: 0 }}>
            <div style={{ textAlign: 'center', maxWidth: '800px', padding: '40px' }}>
                <h1 style={{ fontSize: '60px', color: '#fe2c55', textShadow: '0 0 30px rgba(254, 15, 76, 0.8)', marginBottom: '30px' }}>
                    Breathe.
                </h1>

                <div style={{ fontSize: '24px', fontStyle: 'italic', color: 'rgba(255,255,255,0.8)', borderLeft: '4px solid #fe2c55', paddingLeft: '20px', margin: '30px 0', background: 'rgba(254, 15, 76, 0.05)', padding: '20px', borderRadius: '0 8px 8px 0', lineHeight: 1.6 }}>
                    <p>"The question is not which app to ban, but what makes us want to separate ourselves from reality. We are, in a sense, a sorrowful generation... TikTok did not create that condition, but it was built to profit from it."</p>
                </div>

                <div style={{ margin: '50px auto', position: 'relative', width: '100px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{
                        position: 'absolute',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, #20D5EC, transparent)',
                        boxShadow: '0 0 50px #20D5EC',
                        animation: 'breathe 8s infinite cubic-bezier(0.4, 0, 0.2, 1)'
                    }} />
                    <style>
                        {`
                        @keyframes breathe {
                            0%, 100% { transform: scale(1); opacity: 0.5; }
                            50% { transform: scale(4); opacity: 1; }
                        }
                        @keyframes textFade {
                            0%, 100% { opacity: 0.5; content: "Inhale..."; }
                            50% { opacity: 1; content: "Exhale..."; }
                        }
                        .breath-text::after {
                            content: "Inhale...";
                            animation: textFade 8s infinite;
                        }
                        `}
                    </style>
                </div>

                <p className="breath-text" style={{ fontSize: '24px', fontWeight: 300, letterSpacing: '5px', marginBottom: '30px', color: '#20D5EC' }}></p>

                <p style={{ color: '#aaa', marginBottom: '40px' }}>You have scrolled past 10 videos. It's time to break the loop.</p>

                <button
                    onClick={onResume}
                    style={{ background: 'transparent', color: 'white', border: '2px solid #fe2c55', padding: '12px 30px', fontSize: '18px', fontWeight: 600, borderRadius: '30px', cursor: 'pointer', boxShadow: '0 0 15px rgba(254, 15, 76, 0.4)' }}
                >
                    Return to Reality
                </button>
            </div>
        </div>
    );
}
