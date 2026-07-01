export default function NoiseOverlay() {
    return (
        <div
            className="
            pointer-events-none
            fixed
            inset-0
            opacity-[0.03]
            mix-blend-multiply
            bg-[url('/noise.png')]
            "
        />
    );
}