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
            </div>
        </div>
    );
}
