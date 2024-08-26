interface PromptOutputProps {
    isNegative?: boolean;
}

export default function PromptOutput({ isNegative = false }: PromptOutputProps) {
    return (
        <div className={`p-4 rounded-md text-white bg-gray-800`}>
            <h3 className="text-lg font-semibold mb-2">{isNegative ? 'Negative' : 'Prompt'}</h3>
            <p className="text-sm">This is where the first AI-generated text output will appear.</p>
        </div>
    )
}