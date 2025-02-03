function placeholder () {
    return (
        <>
            <p>Let us go then, you and I,</p>
            <p>When the evening is spread out against the sky</p>
            <p>Like a patient etherized upon a table;</p>
            <p>Let us go, through certain half-deserted streets,</p>
            <p>The muttering retreats</p>
            <p>Of restless nights in one-night cheap hotels</p>
            <p>And sawdust restaurants with oyster-shells:</p>
            <p>Streets that follow like a tedious argument</p>
            <p>Of insidious intent</p>
            <p>To lead you to an overwhelming question…</p>
            <p>Oh, do not ask, "What is it?"</p>
            <p>Let us go and make our visit.</p>
        </>
    )
}

export default function OutputBox ({res}) {
    return (
        <div className="text-left text-black text-lg">{res === "" || res == null ? placeholder() : res}</div>
    )
}