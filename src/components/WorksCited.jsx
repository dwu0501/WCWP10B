<<<<<<< HEAD
import { X } from 'lucide-react';
import './WorksCited.css';

const citations = [
    {
        id: 1,
        formatted: `Bock, Sara. "Doomscrolling Again? Expert Explains Why We're Wired for Worry." Ucsd.edu, 2025,`,
        url: "https://today.ucsd.edu/story/doomscrolling-again-expert-explains-why-were-wired-for-worry",
        urlDisplay: "today.ucsd.edu/story/doomscrolling-again-expert-explains-why-were-wired-for-worry.",
    },
    {
        id: 2,
        formatted: `Modern Millie. "THE TIKTOK ALGORITHM EXPLAINED | Your 2025 Guide to TikTok Success!" YouTube, 23 July 2025,`,
        url: "https://www.youtube.com/watch?v=diJ172jDsxA",
        urlDisplay: "www.youtube.com/watch?v=diJ172jDsxA.",
    },
    {
        id: 3,
        formatted: "Wade, Natasha. Personal Interview. 5 March 2026.",
        url: null,
        urlDisplay: null,
    },
    {
        id: 4,
        formatted: `Choi, Eun Jung, et al. "Screen Time in Children and Youth during the Pandemic: A Systematic Review and Meta-Analysis." Global Pediatrics, vol. 6, 2023, p. 100080,`,
        url: "https://doi.org/10.1016/j.gpeds.2023.100080",
        urlDisplay: "doi.org/10.1016/j.gpeds.2023.100080.",
    },
    {
        id: 5,
        formatted: `The Annie E. Casey Foundation. "Generation Z's Mental Health Issues - the Annie E. Casey Foundation." The Annie E. Casey Foundation, 3 Mar. 2021,`,
        url: "https://www.aecf.org/blog/generation-z-and-mental-health",
        urlDisplay: "www.aecf.org/blog/generation-z-and-mental-health.",
    },
];

export default function WorksCited({ onClose }) {
    return (
        <div className="wc-overlay" onClick={onClose}>
            <div className="wc-content" onClick={e => e.stopPropagation()}>
                <button className="wc-close" onClick={onClose}>
                    <X size={24} />
                </button>
                <div className="wc-header">
                    <h2>Works Cited</h2>
                    <p className="wc-subtitle">Sources referenced in this project</p>
                </div>
                <div className="wc-body">
                    <ol className="wc-list">
                        {citations.map(c => (
                            <li key={c.id} className="wc-item">
                                {c.formatted}
                                {c.urlDisplay && (
                                    <> <a className="wc-link" href={c.url} target="_blank" rel="noreferrer">{c.urlDisplay}</a></>
                                )}
                            </li>
                        ))}
                    </ol>
                </div>
=======
import React from 'react';

export default function WorksCited() {
    const citations = [
        "Bock. Interview with Dr. Susan Tapert on Doomscrolling and the Amygdala. UC San Diego Today.",
        "Millie, Modern. 'How non-actions affect your FYP (The Magic Mirror).' YouTube.",
        "Wade, Natasha. Interview regarding Adolescent Brain Cognitive Development (ABCD) Study.",
        "Choi, Eun Jung, Gabrielle K.C. King, and Emma G. Duerden. Screen time increases during pandemic. 2023.",
        "Trang, et al. 'TikTok's influence in Gen Z: Increased screen time addiction and impacts on neural development.'",
        "ACEF. Data on Gen Z anxiety from economic instability, social media, and future uncertainty."
    ];

    return (
        <div style={{ flexGrow: 1, height: '100vh', overflowY: 'auto', backgroundColor: '#000', color: 'white', padding: '60px 40px', boxSizing: 'border-box' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ fontSize: '42px', marginBottom: '30px', borderBottom: '4px solid #20D5EC', display: 'inline-block' }}>Works Cited</h1>

                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {citations.map((cite, i) => (
                        <li key={i} style={{ marginBottom: '15px', padding: '15px', background: '#1e1e1e', borderRadius: '8px', lineHeight: 1.5, borderLeft: '2px solid #555' }}>
                            {cite}
                        </li>
                    ))}
                </ul>
>>>>>>> 50055af094136b67f9795f5a710ca3e2083749c2
            </div>
        </div>
    );
}
