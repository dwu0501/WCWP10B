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
            </div>
        </div>
    );
}
