import response from "./Inference"

export default function OutputBox (response) {
    return (
        <div className="flex flex-center">{response}</div>
    )
}
