import React from 'react';

export default function ActivityCenter({ watchTimes }) {
    const topics = Object.keys(watchTimes || {});

    let highestTime = 0;
    let favoriteTopic = "Unknown";

    const rows = topics.sort((a, b) => watchTimes[b] - watchTimes[a]).map(topic => {
        const ms = watchTimes[topic];
        const seconds = (ms / 1000).toFixed(1);

        if (ms > highestTime) {
            highestTime = ms;
            favoriteTopic = topic;
        }

        return (
            <div key={topic} style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 0', borderBottom: '1px solid #333', fontSize: '18px' }}>
                <span style={{ fontWeight: 600 }}>{topic}</span>
                <span style={{ color: '#20D5EC', fontFamily: 'monospace', fontSize: '20px' }}>{seconds}s</span>
            </div>
        );
    });

    return (
        <div style={{ flexGrow: 1, height: '100vh', overflowY: 'auto', backgroundColor: '#000', color: 'white', padding: '60px 40px', boxSizing: 'border-box' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ fontSize: '42px', marginBottom: '30px', borderBottom: '4px solid #fe2c55', display: 'inline-block' }}>Your "Magic Mirror"</h1>

                <div style={{ fontSize: '20px', lineHeight: '1.6', fontStyle: 'italic', color: 'rgba(255,255,255,0.8)', borderLeft: '4px solid #20D5EC', paddingLeft: '20px', margin: '30px 0', background: 'rgba(32, 213, 236, 0.05)', padding: '20px', borderRadius: '0 8px 8px 0' }}>
                    <p>"What really traps me in TikTok is the content tailored to the niche I like... non-actions affect your FYP. These include factors like the time a user spends on a video which is the implicit body language that the algorithm learns from."</p>
                </div>

                <div style={{ background: '#1e1e1e', padding: '30px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', marginTop: '40px' }}>
                    <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#20D5EC' }}>Algorithm Analysis</h2>

                    <div>
                        {rows.length > 0 ? rows : <p>Watch some videos to generate your profile.</p>}
                    </div>

                    <div style={{ marginTop: '30px', textAlign: 'center', padding: '20px', background: '#111', borderRadius: '10px', border: '1px solid #333' }}>
                        <h3>Inferred Preference:</h3>
                        <h4 style={{ fontSize: '36px', color: '#20D5EC', textShadow: '0 0 20px rgba(32, 213, 236, 0.6)', marginTop: '10px' }}>{favoriteTopic}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
