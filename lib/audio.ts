// Web Audio API synthesized UI sound effects for ultra-modern portfolio experience
class SoundEffects {
    private ctx: AudioContext | null = null;
    public enabled: boolean = false;

    private getContext(): AudioContext | null {
        if (typeof window === "undefined") return null;
        if (!this.ctx) {
            const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
            if (AudioCtx) {
                this.ctx = new AudioCtx();
            }
        }
        if (this.ctx && this.ctx.state === "suspended") {
            this.ctx.resume().catch(() => {});
        }
        return this.ctx;
    }

    public playHover() {
        if (!this.enabled) return;
        const ctx = this.getContext();
        if (!ctx) return;

        try {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "sine";
            osc.frequency.setValueAtTime(420, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(780, ctx.currentTime + 0.04);

            gain.gain.setValueAtTime(0.015, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.04);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.04);
        } catch {
            // AudioContext not allowed before user gesture
        }
    }

    public playClick() {
        if (!this.enabled) return;
        const ctx = this.getContext();
        if (!ctx) return;

        try {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "triangle";
            osc.frequency.setValueAtTime(800, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.06);

            gain.gain.setValueAtTime(0.03, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.06);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.06);
        } catch {
            // AudioContext not allowed before user gesture
        }
    }

    public playSuccess() {
        if (!this.enabled) return;
        const ctx = this.getContext();
        if (!ctx) return;

        try {
            const now = ctx.currentTime;
            [523.25, 659.25, 783.99].forEach((freq, i) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = "sine";
                osc.frequency.setValueAtTime(freq, now + i * 0.06);
                gain.gain.setValueAtTime(0.02, now + i * 0.06);
                gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.06 + 0.12);

                osc.connect(gain);
                gain.connect(ctx.destination);

                osc.start(now + i * 0.06);
                osc.stop(now + i * 0.06 + 0.12);
            });
        } catch {
            // AudioContext not allowed before user gesture
        }
    }
}

export const soundFx = new SoundEffects();
