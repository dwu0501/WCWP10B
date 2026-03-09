import { X } from 'lucide-react';
import './LiveModal.css';

export default function LiveModal({ onClose }) {
    return (
        <div className="live-modal-overlay" onClick={onClose}>
            <div className="live-modal-content" onClick={e => e.stopPropagation()}>
                <button className="live-modal-close" onClick={onClose}>
                    <X size={24} />
                </button>
                <div className="live-modal-body">
                    <div className="live-section">
                        <h3>What conditions cause a person to be trapped on the internet?</h3>
                        <p>
                            If we look into it, it is not strange for Gen Z to want to find an outlet to reality, a comforting place that pulls you out of your daily life. Around 50% of Gen Z-ers experience some sort of anxiety which is driven by economic instability, social media, and future uncertainty.
                        </p>
                    </div>

                    <div className="live-section">
                        <h3>Evolution and Doomscrolling</h3>
                        <p>
                            Dr. Susan Tapert, an expert in psychiatry, explains how our brains are evolutionally made so we pay more attention to bad news. The amygdala sends stress signals that keep us alert and scanning for danger, and doomscrolling satisfies that need. We end up in an infinite loop since "following our instincts" releases dopamine, making us want to look more into these news.
                        </p>
                    </div>

                    <div className="live-section">
                        <h3>The Adolescent Brain</h3>
                        <p>
                            According to Dr. Natasha Wade, a researcher on the Adolescent Brain Cognitive Development (ABCD) Study, adolescents develop their emotion centers before other regions like those responsible for self-regulation and impulse control. This signifies that teenagers and young adults are more emotional than rational. The "For You Page" is designed in a way that fits into our brains. These companies are trying to make a profit off of this vulnerability. This "addiction" is not the consequence but the product they are selling.
                        </p>
                    </div>

                    <div className="live-section">
                        <h3>The Pandemic Catalyst</h3>
                        <p>
                            Average screen time increased drastically during the pandemic, a time when adolescents experienced intense cognitive changes while stuck indoors. Without technology, the pandemic would have been far more isolating, but it also created the perfect stage to develop a frequent use of screens.
                        </p>
                    </div>

                    <div className="live-section">
                        <h3>Conclusion</h3>
                        <p>
                            The answer is not biological, algorithmic, or a generational pathology. We are a generation which spent their adolescence locked down; a generation whose coming of age came with the rise of AI and social anxieties. TikTok did not create that condition, but it was built to profit from it. What we need is to understand the stakes behind the engines.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
