const Words = () => {

    const words: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

    return (
        <>
            {words.map((word,index) =>
                <div
                    key={index}
                    className="w-[100px] h-[100px] font-[50px] pl-[50px]">
                    {word}
                </div>
            )}
        </>
    )
}

export default Words